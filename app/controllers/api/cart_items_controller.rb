class Api::CartItemsController < ApplicationController
  before_action :require_logged_in

  def index
    user = current_user
    @cart_items = user.cart.cart_items
    render :index
  end

  def create
    user = current_user

    if user.cart.id != cart_item_params[:cart_id].to_i
      render json: ['You are not the owner of this cart!'], status: 422
    else
      @cart_item = CartItem.new(cart_item_params)

      if @cart_item.save
        render :index
      else
        render json: @cart_item.errors.full_messages, status: 422
      end
    end
  end

  def update
    @cart_item = CartItem.find(params[:id])
    user = current_user

    if user.cart.id != cart_item_params[:cart_id].to_i
      render json: ['You are not the owner of this cart!'], status: 422
    else
      if @cart_item && @cart_item.update(cart_item_params)
        render :index
      else
        render json: @cart_item.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    user = current_user

    if user.cart.id != @cart_item.cart_id.to_i
      render json: ['You are not the owner of this cart!'], status: 422
    else
      if @cart_item && @cart_item.delete
        render :index
      else
        render json @cart_item.errors.full_messages, status: 422
      end
    end
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:cart_id, :product_id, :quantity)
  end
end
