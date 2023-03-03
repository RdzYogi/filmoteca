Rails.application.routes.draw do
  get 'sessions/index'
  # get 'reservations/index'
  # get 'reservations/show'
  # get 'reservations/create'
  # get 'halls/index'
  devise_for :users, defaults: { format: :json },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations',
    }
  get '/member-data', to: 'members#show'


  namespace :api do
    namespace :v1 do
      resources :cycles, only: %w[index show create destroy update], param: :slug
      resources :movies, only: %w[index show create destroy update], param: :slug
      resources :news, only: %w[index show], param: :slug
      resources :halls, only: %w[index show], param: :id
      resources :reservations, only: %w[index show create], param: :id
      resources :projections, only: %w[index show create], param: :id
      get '/user_details', to: 'user_details#index'
      post 'mails', to: 'mails#mail'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#home"
  # You have to route all pages to the front controller with react
  # So that we don't get the rails red page
  get '*path', to: 'pages#home', via: :all

end
