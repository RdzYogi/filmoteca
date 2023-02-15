Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cycles, only: %w[index show], param: :slug
      resources :movies, only: %w[index show], param: :slug
      resources :news, only: %w[index show], param: :slug
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#home"
  # You have to route all pages to the front controller with react
  # So that we don't get the rails red page
  Ç*¨^PÑet '*path', to: 'pages#home', via: :all

end
