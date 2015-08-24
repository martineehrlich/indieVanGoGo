class Api::PatronsController < ApplicationController
  before_action :require_signed_in!
  def create
    @patron = Patron.new(patron_params)
    if @patron.save
      render json: @patron
    else
      render json: @patron.errors.full_messages, status: 422
    end
  end

  def new
    @patron = Patron.new
    render json: @patron
  end

  private
  def patron_params
    params.require(:patron).permit(:artist_id, :amount, :anonymous, :name)
  end
end
