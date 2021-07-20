class Api::CartsController < ApplicationController
  # before_action :require_logged_in

  def show
    @cart = Cart.find_by(user_id: params[:id])
    render :show
  end

  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render :show
    else
      render @cart.errors.full_messages, status: 422
    end
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id)
  end
end
