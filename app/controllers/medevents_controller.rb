class MedeventsController < ApplicationController
  # GET /medevents
  # GET /medevents.xml
  def index
    @medevents = Medevent.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @medevents }
    end
  end

  # GET /medevents/1
  # GET /medevents/1.xml
  def show
    @medevent = Medevent.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @medevent }
    end
  end

  # GET /medevents/new
  # GET /medevents/new.xml
  def new
    @medevent = Medevent.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @medevent }
    end
  end

  # GET /medevents/1/edit
  def edit
    @medevent = Medevent.find(params[:id])
  end

  # POST /medevents
  # POST /medevents.xml
  def create
    @medevent = Medevent.new(params[:medevent])

    respond_to do |format|
      if @medevent.save
        format.html { redirect_to(@medevent, :notice => 'Medevent was successfully created.') }
        format.xml  { render :xml => @medevent, :status => :created, :location => @medevent }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @medevent.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /medevents/1
  # PUT /medevents/1.xml
  def update
    @medevent = Medevent.find(params[:id])

    respond_to do |format|
      if @medevent.update_attributes(params[:medevent])
        format.html { redirect_to(@medevent, :notice => 'Medevent was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @medevent.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /medevents/1
  # DELETE /medevents/1.xml
  def destroy
    @medevent = Medevent.find(params[:id])
    @medevent.destroy

    respond_to do |format|
      format.html { redirect_to(medevents_url) }
      format.xml  { head :ok }
    end
  end
end
