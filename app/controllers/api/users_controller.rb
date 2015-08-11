class Api::UsersController < ApplicationController
  def show
			@user = User.find(params[:id])
      @arts = @user.arts
			render json: @user
  end

  def index
    @artists = User.all.select { |user| user.arts.length > 0 }
    render json: @artists
  end

end
