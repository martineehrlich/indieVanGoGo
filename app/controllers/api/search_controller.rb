class Api::SearchController < ApplicationController
  def index
    @artists = User.artists_in_search(params[:search_string])
    @arts = Art.arts_in_search(params[:search_string])
    @results = @artists + @arts
    render :search
  end

end
