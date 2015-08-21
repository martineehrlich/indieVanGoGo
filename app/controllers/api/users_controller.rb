class Api::UsersController < ApplicationController
  def show
			@user = User.find(params[:id])
			render :show
  end

  def index
    if params[:category_id]
      @artists = User.artists_in_category(params[:category_id])
    else
      @artists = User.artists
    end
    render :index
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render :json => @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email, :name, :description, :image_url, :goal)
  end

end
