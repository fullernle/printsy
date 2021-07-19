Rails
  .application
  .routes
  .draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: { format: :json } do
      resource :user, only: [:create]
      resource :session, only: %i[create destroy show]
      resources :products, only: %i[create show index]
      resources :categories, only: %i[index show]
      resources :carts, only: %i[show create]
      resources :cart_items, only: %i[index create update destroy show]
			resources :reviews, only: %i[index create update destroy show]
    end

    root to: 'static_pages#root'
  end
