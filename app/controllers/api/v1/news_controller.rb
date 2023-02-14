class Api::V1::NewsController < ApplicationController
  def index
    news = News.all

    render json: news
  end

  def show
    news = News.find_by(slug: params[:slug])

    if news
      render json: news
    else
      render json: { error: 'News not found' }, status: :not_found
    end
  end
end
