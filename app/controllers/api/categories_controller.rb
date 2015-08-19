class Api::CategoriesController < ApplicationController
before_action :require_signed_in!
  def index
    @categories = Category.all
    render json: @categories
  end

  private

  def category_params
    params.require(:category).permit(:name, :image_url)
  end
end
