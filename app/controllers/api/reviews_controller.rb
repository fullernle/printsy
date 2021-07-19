class Api::ReviewsController < ApplicationController
	# before_action :require_logged_in, except: [:index]

	def index 
		@reviews = Review.all
		render :index
	end

	def show 
		@reviews = Review.find_by(product_id: review_params[:product_id])
		render :index
	end

	def create 
		user = current_user 
		
		@review = Review.new(review_params)

		if @review.save 
			render :index 
		else 
			render json: @review.errors.full_messages, status: 422
		end
	end

	def update 
		@review = Review.find(params[:id]) 
		user = current_user 

		if @review.reviewer_id != user.id 
			render json: ["You are not the owner of this review!"], status: 422
		else 
			if @review && @review.update(review_params) 
				render :index 
			else 
				render json: @review.errors.full_messages, status: 422 
			end
		end
	end

	def destroy 
		@review = Review.find(params[:id]) 
		user = current_user 

		if @review.reviewer_id != user.id 
			render json: ["You are not the owner of this review!"], status: 422
		else 
			if @review && @review.delete
				render :index 
			else 
				render json: @review.errors.full_messages, status: 422 
			end
		end
	end

	
	private 
	def review_params 
		params.require(:review).permit(:product_id, :reviewer_id, :body, :rating)
	end
end
