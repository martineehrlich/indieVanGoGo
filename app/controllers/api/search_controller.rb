class Api::SearchController < ApplicationController
  def search
    @artists = User.artists_in_search(params[:search_string])
    @arts = Art.arts_in_search(params[:search_string])
  end


end
