Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users
  resource :session

  namespace :api do
    resources :users, only: :show
    resources :arts, only: [:show, :new, :create]
  end
end
