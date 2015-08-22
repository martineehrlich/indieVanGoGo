class Api::UsersController < ApplicationController
  def show
			@user = User.find(params[:id])
			render :show
  end

  def index
    if params[:category_id]
      @artists = User.artists_in_category(params[:category_id]).page(params[:page]).per(6)
    else
      @artists = User.artists.page(params[:page]).per(6)
    end

    @page = params[:page] ? params[:page].to_i : 1
    @total_pages = @artists.total_pages

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
