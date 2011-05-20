require 'test_helper'

class MedeventsControllerTest < ActionController::TestCase
  setup do
    @medevent = medevents(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:medevents)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create medevent" do
    assert_difference('Medevent.count') do
      post :create, :medevent => @medevent.attributes
    end

    assert_redirected_to medevent_path(assigns(:medevent))
  end

  test "should show medevent" do
    get :show, :id => @medevent.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @medevent.to_param
    assert_response :success
  end

  test "should update medevent" do
    put :update, :id => @medevent.to_param, :medevent => @medevent.attributes
    assert_redirected_to medevent_path(assigns(:medevent))
  end

  test "should destroy medevent" do
    assert_difference('Medevent.count', -1) do
      delete :destroy, :id => @medevent.to_param
    end

    assert_redirected_to medevents_path
  end
end
