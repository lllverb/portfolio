Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'portfolios#index'
  resources :portfolios, only: [:index] do
    collection do
      get 'money'
      get 'fleamarket'
      get 'chatspace'
      get 'quiz'
    end
  end
end
