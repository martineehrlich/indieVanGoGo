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
    render json: @artists
  end

end
