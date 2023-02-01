Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#home"
  # You have to route all pages to the front controller with react
  # So that we don't get the rails red page
  get '*path', to: 'pages#home', via: :all
end
