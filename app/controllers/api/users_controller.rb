class Api::UsersController < ApplicationController
  def show
			@user = User.find(params[:id])
			render :show
  end

  def index
    @artists = User.all.select { |user| user.arts.length > 0 }
    render json: @artists
  end

end
