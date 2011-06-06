/*
	This Family Echo file is Copyright (c) Familiality Ltd.

	This file may be distributed only in whole and unmodified, as part of a
	family downloaded from Family Echo. You may make this file available on the
	World Wide Web without modification, only if used to display a family
	downloaded from Family Echo. You may make copies of this file for personal
	archiving purposes, only as part of a family downloaded from Family Echo.

	This file may not be distributed or copied for any other purpose. You are
	not permitted to modify, merge, publish, sublicense, rent, sell, lease,
	loan, decompile, reverse engineer or create derivative works from this file.

	This copyright and license notice must be kept in all copies of this file.
*/

function TND(){
return {l:0,r:0,w:0,t:0,b:0,h:0,e:{},n:[]};
}
function TAE(d,i,p,x,y,k){
var di=d.e[i];
if(di){
i+=Math.random(0,999999);
}
d.e[i]={p:p,x:x,y:y,k:k,d:di};
d.l=Math.min(d.l,x);
d.r=Math.max(d.r,1+x);
d.w=d.r-d.l;
d.t=Math.min(d.t,y);
d.b=Math.max(d.b,1+y);
d.h=d.b-d.t;
}
function TAL(d,x1,y1,x2,y2,k){
d.n[d.n.length]={x1:x1,y1:y1,x2:x2,y2:y2,k:k};
}
function TAD(od,d,dx,dy){
for(var j=0;j<d.n.length;j++){
var n=d.n[j];
TAL(od,n.x1+dx,n.y1+dy,n.x2+dx,n.y2+dy,n.k);
}
for(var i in d.e){
var e=d.e[i];
TAE(od,e.p.i,e.p,e.x+dx,e.y+dy,e.k);
}
}
function TDS(zf,y,mn){
return {Tew:parseInt(((y||mn)?100:80)*zf),Teh:parseInt((y?((y=="r")?120:80):40)*zf),Tmh:parseInt(40*zf),Ths:parseInt(20*zf),Tvs:parseInt((y?40:60)*zf),Tfs:parseInt(12*zf),Tds:parseInt(10*zf)};
}
function TGZ(d,y,mn,mw,mh){
var sz=TDS(1,y,mn);
return Math.min(2,Math.min(mw/(d.w*(sz.Tew+sz.Ths)-sz.Ths),mh/(d.h*(sz.Teh+sz.Tvs)-sz.Tvs)));
}
function TRD(d,y,bn,mn,o,oi,wp,pr,zf,_28){
var _29=wp?19200:0;
var _2a=wp?12000:0;
var sz=TDS(zf,y,mn);
var tw=(sz.Tew+sz.Ths)*d.w-sz.Ths;
var th=(sz.Teh+sz.Tvs)*d.h-sz.Tvs;
if(!wp){
ox=sz.Tew/2-d.l*(sz.Tew+sz.Ths);
oy=sz.Teh/2-d.t*(sz.Teh+sz.Tvs);
}else{
if(oi&&o.ps[oi]&&d.e[oi]){
ox=o.ps[oi].x-d.e[oi].x*(sz.Tew+sz.Ths);
oy=o.ps[oi].y-d.e[oi].y*(sz.Teh+sz.Tvs);
}else{
ox=_29-d.l*(sz.Tew+sz.Ths);
oy=_2a-d.t*(sz.Teh+sz.Tvs);
}
}
o.innerHTML="";
o.ps={};
o.es={l:(ox+(d.l-0.5)*(sz.Tew+sz.Ths)),t:(oy+(d.t-0.5)*(sz.Teh+sz.Tvs)),r:(ox+(d.r-0.5)*(sz.Tew+sz.Ths)),b:(oy+(d.b-0.5)*(sz.Teh+sz.Tvs))};
var s=o.style;
s.width=(tw+_29*2)+"px";
s.height=(th+_2a*2)+"px";
for(var j=0;j<d.n.length;j++){
var n=d.n[j];
var l=Math.min(n.x1,n.x2);
var r=Math.max(n.x1,n.x2);
var t=Math.min(n.y1,n.y2);
var b=Math.max(n.y1,n.y2);
if(pr){
var k=n.k?2:1;
var ko=k;
var v=document.createElement("img");
v.src=(n.k===null)?((r==l)?"grayvcheck.gif":"grayhcheck.gif"):"graypixel.gif";
v.style.position="absolute";
}else{
var k=n.k?4:((n.k===null)?0:2);
var ko=n.k?4:2;
var v=document.createElement("div");
v.className=(n.k===null)?"ddotted":"dline";
}
var s=v.style;
s.width=((r==l)?k:(r-l)*(sz.Tew+sz.Ths)+k)+"px";
s.height=((b==t)?k:(b-t)*(sz.Teh+sz.Tvs)+k)+"px";
s.left=ox+(l*(sz.Tew+sz.Ths)-ko/2)+"px";
s.top=oy+(t*(sz.Teh+sz.Tvs)-ko/2)+"px";
o.appendChild(v);
}
for(var i in d.e){
var e=d.e[i];
var rs="";
var sn=bn?(e.p.q||e.p.l):(e.p.l||e.p.q);
var fn=e.p.hp?(e.p.p+(sn?(" "+sn):"")):e.p.h;
var cc=((e.p.z=="1")&&!pr)?"dcelld":"dcella";
if(y){
if(y=="r"){
if(e.p.r){
var ey=e.p.r.split(" ");
var uf=(parent&&parent.EIU)||(opener&&opener.top&&opener.top.EIU);
if(uf){
var u=uf(ey[0]);
var ew=sz.Tew-4;
var eh=sz.Tew-4;
if(ey[1]&&ey[2]){
if(parseInt(ey[1])>parseInt(ey[2])){
eh=Math.floor(ew*ey[2]/ey[1]);
}else{
ew=Math.floor(eh*ey[1]/ey[2]);
}
}
rs="<TR><TD CLASS=\""+cc+"\"><IMG SRC=\""+u+"\" WIDTH=\""+ew+"\" HEIGHT=\""+eh+"\" TITLE=\""+EH(fn)+"\"></TD></TR>";
}
}
}else{
var ey=TGL(y,e.p);
if(ey&&ey.length){
rs="<TR><TD CLASS=\""+cc+"\" STYLE=\"font-size:"+sz.Tds+"px;\" TITLE=\""+EH(ey.replace(/\n/g,", "))+"\">"+EL(ey)+"</TD></TR>";
}
}
}
var sh=rs?sz.Teh:sz.Tmh;
var sx=ox+(e.x)*(sz.Tew+sz.Ths);
var sy=oy+(e.y)*(sz.Teh+sz.Tvs);
if(pr){
v=document.createElement("img");
v.src=((e.p.g=="f")?"female":((e.p.g=="m")?"male":"neuter"))+"pixel.gif";
var s=v.style;
s.position="absolute";
s.width=sz.Tew+"px";
s.height=sh+"px";
s.left=(sx-(sz.Tew/2))+"px";
s.top=(sy-(sh/2))+"px";
o.appendChild(v);
}else{
if(e.k){
TRB(o,sx-(sz.Tew/2),sy-(sh/2),sz.Tew,sh,3,"000",_28);
}
TRB(o,sx-(sz.Tew/2),sy-(sh/2),sz.Tew,sh,1,(e.p.g=="f")?"FFD6EE":((e.p.g=="m")?"D6DDFF":"FFFFFF"),null);
}
var v=document.createElement("div");
v.className="di";
var s=v.style;
s.width=sz.Tew+"px";
s.height=sh+"px";
s.left=(sx-(sz.Tew/2))+"px";
s.top=(sy-(sh/2))+"px";
if(wp){
v.onmousedown=TCT;
v.id=i;
v.pid=e.p.i;
o.ps[i]={x:sx,y:sy};
}
var tn=e.p.hp?((rs&&(y=="r"))?(mn?e.p.p:e.p.h):(mn?fn:(e.p.h+(sn?(" "+sn):"")))):e.p.h;
v.innerHTML="<TABLE WIDTH=\"100%\" HEIGHT=\"100%\" STYLE=\"table-layout:fixed;\">"+"<TR><TD CLASS=\""+cc+"\" STYLE=\"font-size:"+(e.d?sz.Tds:sz.Tfs)+"px;\""+" TITLE=\""+(e.d?"Duplicate: ":"")+EH(fn)+"\">"+(e.d?"<I>Duplicate:</I><BR>":"")+(e.m?"<B>":"")+EL(tn)+(e.m?"</B>":"")+"</TD></TR>"+rs+"</TABLE>";
o.appendChild(v);
}
}
function TGL(y,p){
var ey="";
if(y=="tku"){
ey=p.t?("\n"+p.t+" (h)"):"";
ey+=p.k?("\n"+p.k+" (w)"):"";
ey+=p.u?("\n"+p.u+" (m)"):"";
if(ey){
ey=ey.substring(1);
}
}else{
if(y=="bd"){
var bs=FPD(p.b||"").y;
var ds=FPD(p.d||"").y;
ey=(bs||"")+((bs||ds)?"-":"")+(ds||"");
}else{
if(y=="bv"){
var bs=FDT(p.b);
ey=((bs||p.v)?"Born ":"")+(bs||"")+((bs&&p.v)?", ":"")+(p.v||"");
}else{
if(y=="dy"){
var ds=FDT(p.d);
ey=((ds||p.y)?"Died ":"")+(ds||"")+((ds&&p.y)?", ":"")+(p.y||"");
}else{
if(y=="e"){
ey=p.e?p.e.replace(/@/g,"@ "):"";
}else{
ey=p[y];
}
}
}
}
}
return ey;
}
function TCD(o,i,t){
if(i&&o.ps[i]){
var dw,dh;
if(self.innerHeight){
dw=self.innerWidth;
dh=self.innerHeight;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
dw=document.documentElement.clientWidth;
dh=document.documentElement.clientHeight;
}else{
if(document.body){
dw=document.body.clientWidth;
dh=document.body.clientHeight;
}
}
}
if(dw<64){
dw=self.outerWidth;
}
if(dh<64){
dh=self.outerHeight;
}
var sx=o.ps[i].x-dw/2;
var sy=o.ps[i].y-dh/2;
if(o.es){
var as={l:sx+64,t:sy+32,r:sx+dw-32,b:sy+dh-64};
sx+=0.9*(Math.min(0,Math.max(o.es.l-as.l,o.es.r-as.r))+Math.max(0,Math.min(o.es.l-as.l,o.es.r-as.r)));
sy+=0.9*(Math.min(0,Math.max(o.es.t-as.t,o.es.b-as.b))+Math.max(0,Math.min(o.es.t-as.t,o.es.b-as.b)));
}
var scs=DT();
TSS(sx,sy,scs,scs+t,"_sel");
}
}
function TRB(o,l,t,w,h,k,b,_5c){
v=document.createElement("div");
var s=v.style;
if(_5c){
s.visibility="hidden";
v.id=_5c;
}
s.position="absolute";
s.width=(w+k*2)+"px";
s.left=(l-k)+"px";
s.top=(t-k)+"px";
var e="background:#"+b+";"+((k==1)?"":("border-width:0 "+k+"px;"));
var e2=(k>1)?"background:#000;":"";
var e3=(k>2)?"background:#000;":"";
var e4=(k>2)?"border-width:0 "+(k+1)+"px;":"";
v.innerHTML="<b class=\"db\"><b class=\"db1\"></b><b class=\"db2\" style=\""+e+e2+"\"></b><b class=\"db3\" style=\""+e+e3+"\"></b><b class=\"db4\" style=\""+e+e4+"\"></b><b class=\"db4\" style=\""+e+"\"></b></b><div class=\"dc\" style=\"height:"+(h+k*2-10)+"px;"+e+"\"></div>"+"<b class=\"db\"><b class=\"db4\" style=\""+e+"\"></b><b class=\"db4\" style=\""+e+e4+"\"></b><b class=\"db3\" style=\""+e+e3+"\"></b><b class=\"db2\" style=\""+e+e2+"\"></b><b class=\"db1\"></b></b>";
o.appendChild(v);
}
var Tpd=false;
var Tdx,Tdy;
function TGS(){
if(self.pageYOffset){
scrolltop=self.pageYOffset;
scrollleft=self.pageXOffset;
}else{
if(document.documentElement&&document.documentElement.scrollTop){
scrolltop=document.documentElement.scrollTop;
scrollleft=document.documentElement.scrollLeft;
}else{
if(document.body){
scrolltop=document.body.scrollTop;
scrollleft=document.body.scrollLeft;
}
}
}
return {top:scrolltop,left:scrollleft};
}
function TIS(o){
o.onmousedown=function(_63){
_63=_63?_63:window.event;
Tpd=true;
scrollpos=TGS();
Tdx=scrollpos.left+_63.screenX;
Tdy=scrollpos.top+_63.screenY;
};
o.onmouseup=function(_64){
Tpd=false;
};
document.onmousemove=function(_65){
_65=_65?_65:window.event;
if(Tpd){
TSS(Tdx-_65.screenX,Tdy-_65.screenY,0,0,null);
}
};
}
var Tst=null,Tsf,Tsd,Tss,Tse,Tsv;
function TSS(x,y,scs,scf,scv){
if(Tst){
clearTimeout(Tst);
Tst=null;
}
Tsf=TGS();
Tsd={top:y,left:x};
Tss=scs;
Tse=scf;
Tsv=scv;
if(DT()>=scf){
TST();
}else{
Tst=setTimeout("TST()",10);
}
}
function TST(){
var n=DT();
if(n>=Tse){
self.scrollTo(Tsd.left,Tsd.top);
if(Tsv&&GE(Tsv)){
SI(Tsv,true);
}
}else{
var p=(n-Tss)/(Tse-Tss);
p=1-Math.pow(0.5,p/0.2);
self.scrollTo(Tsf.left+p*(Tsd.left-Tsf.left),Tsf.top+p*(Tsd.top-Tsf.top));
Tst=setTimeout("TST()",10);
}
}
function TCT(){
parent.ESP(this.pid,true);
}
function TFE(o,i){
return (o.ps&&i)?o.ps[i]:null;
}
function TRT(f,i,m,y,bn,mn,ch,ph,co,pi,zf,s){
var o=GE("treebg");
var _7c=null;
if(TFE(o,i)){
var oi=i;
var sd=0;
if(i!=pi){
_7c="_sel";
if(GE(_7c)){
SI(_7c,false);
}
}
}else{
var oi=TFE(o,pi)?pi:null;
var sd=oi?250:0;
}
TRD(BFT(f,i,m,ch,ph,co),y,bn,mn,o,oi,true,false,zf,_7c);
setTimeout("TCD(GE('treebg'), '"+i+"', "+(s?250:0)+")",sd);
}
