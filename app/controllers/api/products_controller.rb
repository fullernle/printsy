class Api::ProductsController < ApplicationController
  def index
    @products = Product.all

    # render "api/products/index"
    render :index
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      # render "api/products/show"
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def show
    @product = Product.find(params[:id])

    if @product
      # render "api/products/show"
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  private

  def product_params
    params
      .require(:product)
      .permit(:name, :description, :price, :seller_id, :photo)
  end
end
