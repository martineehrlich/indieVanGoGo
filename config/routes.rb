Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users
  resource :session

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :edit, :update]
    resources :arts, only: [:show, :new, :create, :index, :destroy]
    resources :categories, only: [:show, :index]
    resources :patrons, only: [:new, :create]
    resources :search, only: [:index]
  end
end
