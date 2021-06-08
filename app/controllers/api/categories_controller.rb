class Api::CategoriesController < ApplicationController
  def index 
    @categories = Category.all 
    render :index
  end
  
  def show 
    @category = Category.find(params[:id])
    render "api/categories/show"
  end
end
