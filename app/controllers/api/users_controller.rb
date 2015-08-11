class Api::UsersController < ApplicationController
  def show
			@user = User.find(params[:id])
      @arts = @user.arts
			render :show
  end
end
