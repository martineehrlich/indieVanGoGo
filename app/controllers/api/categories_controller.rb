class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  private

  def category_params
    params.require(:category).permit(:name, :image_url)
  end
end
