function submitAjaxForm(formId, divId, options, showLoadingIcon) {
    var formData = Form.serialize(formId);
    options = options || {};
    if (options.extraArgs) {
        formData = formData + '&' + Hash.toQueryString(options.extraArgs);
    }
    var div = document.getElementById(divId);
    if (showLoadingIcon) {
        div.innerHTML = '<div><img alt="Indicator" align="absmiddle" src="' + contextPath + '/images/loading.gif"/>&nbsp;Loading...</div>';
    }
    var url = options.url || $(formId).action;
    new Ajax.Updater(divId, url, {parameters: formData, evalScripts: true, insertion: options.insertion} );
    return false;
}

function submitDivAsForm(url, divId) { 
    var div = document.getElementById(divId);
    var fields = div.getElementsByTagName("input");
    var params="";
    for (var i=0; i<fields.length; i++) {
        params += fields[i].name + "=" + escape(fields[i].value) + "&";
    }
    var aj = new Ajax.Updater(div, url, {
        asynchronous: true,
        method: 'post',
        evalScripts: true,
        parameters: params
    });
    return false;
}

function loadDiv(url, divId, showLoadingIcon) {
    var div = document.getElementById(divId);
    div.style.display = 'block';
    if (showLoadingIcon) {
        div.innerHTML = '<div><img alt="Indicator" align="absmiddle" src="' + contextPath + '/images/loading.gif"/>&nbsp;Loading...</div>';
    }
    var aj = new Ajax.Updater(div, url, {
        asynchronous: true,
        method: 'get',
        evalScripts: true
    });
    return false;
}

function submitDivOnReturn(e, addId) {
    var characterCode;
    if(e && e.which){
        e = e;
        characterCode = e.which;
    } else {
        e = event;
        characterCode = e.keyCode;
    }
    if(characterCode == 13){
        var add = document.getElementById(addId);
        add.onclick();
        return false
    }
    else{
        return true
    }
}

function setFocusById(divId) {
	try {
		$(divId).focus();
	} catch(er) {
	}
}

function setFocusToFirstControl() {
    for (var f=0; f < document.forms.length; f++) {
        for(var i=0; i < document.forms[f].length; i++) {
            var elt = document.forms[f][i];
            if (elt.type != "hidden" && elt.disabled != true && elt.id != 'enableEnterSubmit') {
                try {
                    elt.focus();
                    return;
                } catch(er) {
                }
            }
        }
    }
}

function activateNavAnchor(navAnchorName) {
	$(navAnchorName).className = "selected";
}

function showFileSavedMessage() {
	$('fileSavedDiv').style.display = 'block';
}

function saveAndDisplayMessage(saveXmlUrl, reindexFlag) {
	saveXmlDocument(saveXmlUrl, reindexFlag);
	showFileSavedMessage();
	window.top.showFileSavedMessage();
}

function saveAndRedirect(saveXmlUrl, redirectUrl) {
	saveXmlDocument(saveXmlUrl, false);
	
	saveXmlDocument(redirectUrl, false);
}



function saveXmlDocument(saveXmlUrl, reindexFlag) {
    var form = document.createElement("form");
    form.method="post";
    form.style.display="none";
    form.action = saveXmlUrl;
    document.body.appendChild(form);
    if (reindexFlag) {
        var relidValue = $F('relativeId');
        var relid = document.createElement("input");
        relid.type = "hidden";
        relid.name="relativeId";
        relid.value= relidValue;
        form.appendChild(relid);
    }
    form.submit();
    $(form).remove();
    startLogoutTimer();
}


function saveXmlDocumentWithFileName(saveXmlUrl, reindexFlag) {
    var form = document.createElement("form");
    form.method="post";
    form.style.display="none";
    form.action = saveXmlUrl;

    var fileNameValue = $('_fileName').value;
    
    alert(fileNameValue);
    
    var fileName = document.createElement("input");
    fileName.type = "hidden";
    fileName.name = "fileName";
    fileName.value = fileNameValue;
    form.appendChild(fileName);

    document.body.appendChild(form);
    if (reindexFlag) {
        var relidValue = $F('relativeId');
        var relid = document.createElement("input");
        relid.type = "hidden";
        relid.name="relativeId";
        relid.value= relidValue;
        form.appendChild(relid);
    }
    form.submit();
    $(form).remove();
    startLogoutTimer();
}



function previewPopup(previewUrl, reindexFlag) {
    var options = "resizable,scrollbars=1,height=480,width=640";
    window.open(previewUrl, 'newWin', options);
    window.onload(previewReindex(previewUrl, reindexFlag));
}   

function previewReindex(previewUrl, reindexFlag) {
    var form = document.createElement("form");
    form.method="post";
    form.style.display="none";
    form.action = previewUrl;
    document.body.appendChild(form);
    if (reindexFlag) {
        var relidValue = $F('relativeId');
        var relid = document.createElement("input");
        relid.type = "hidden";
        relid.name="relativeId";
        relid.value= relidValue;
        form.appendChild(relid);
    }
    form.target="_blank";
    form.submit();
    $(form).remove();
    startLogoutTimer();
}

function popupWindow(url) {
	var options = "resizable,scrollbars=1,height=480,width=640";
	var newWin = window.open(url, 'newWin', options);
	newWin.focus();
}

function fireEvent(eventElement, firefoxEvent, ieEvent) {
	if (ieEvent == null) {
		ieEvent = "on" + firefoxEvent;
	}
	if (document.createEvent) {
		var e = document.createEvent('Events');
		e.initEvent(firefoxEvent, true, true);
	} else if (document.createEventObject) {
		var e = document.createEventObject();
	}
	if (eventElement != null) {
		if (eventElement.dispatchEvent) {
			eventElement.dispatchEvent(e);
		} else if (eventElement.fireEvent) {
			eventElement.fireEvent(ieEvent, e);
		}
	}
}

// Session timeout functionality
var logoutTimer;
var warningTimer;
var sessionLength = 55; // in minutes
var warningLength = 180; // in seconds
var remainingTime = warningLength;
startLogoutTimer = function() {
	if ($('logoutWarningDiv') != null) {
		$('logoutWarningDiv').style.display = 'none';
	    if (logoutTimer) {
	        clearTimeout(logoutTimer);
	    }
	    if (warningTimer) {
	        clearTimeout(warningTimer);
	    }
	    remainingTime = warningLength;
	    warningTimer = setTimeout('showLogoutWarning()', ((sessionLength * 60) - warningLength) * 1000);
	    logoutTimer = setTimeout('logout()', sessionLength * 60 * 1000);
	}
}

showLogoutWarning = function() {
    $('logoutWarningDiv').style.display = 'block';
    $('warningCountdownDisplay').update(remainingTime--);
    if (remainingTime==0) {
        logout();
    }
    warningTimer = setTimeout('showLogoutWarning()', 1000);
}
