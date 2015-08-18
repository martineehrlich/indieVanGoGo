class Api::ArtsController < ApplicationController
  def index
    if params[:category_id]
      @arts = Art.arts_in_category(params[:category_id])
    else
      @arts = Art.all
    end

    if params[:search_string]
      @artists = User.arts_in_search(params[:search_string])
    else
      @artists = User.artists
    end
    render json: @arts
  end

  def new
    @art = Art.new
    render json: @art
  end

  def create
    @art = Art.new(art_params)
    @art.artist_id = current_user.id
    if @art.save
      Categorizing.create(category_id: params[:category_id], categorizable_id: @art.id, categorizable_type: "Art")
      render :show
    else
      flash.now[:errors] = @art.errors.full_messages
      render :show
    end
  end

  def show
    @art = Art.find(params[:id])
    @artist = @art.artist
    render :show
  end

  private
  def art_params
    params.require(:art).permit(:artist_id, :title, :description, :image_file_name)
  end
end
