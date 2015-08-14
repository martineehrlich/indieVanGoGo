class Api::PatronsController < ApplicationController
  def create
    @patron = Patron.new(patron_params)
    if @patron.save
      render json: @patron
    else
      flash.now[:errors] = @patron.errors.full_messages
      render json: @patron
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
