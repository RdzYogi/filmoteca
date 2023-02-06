class Api::V1::CyclesController < ApplicationController
  def index
    # Cycle.include preloads the data from the database
    # So that when we render the json, it doesn't have to make
    # a new query to the database for each movie and session
    cycles = Cycle.includes(:movies, :sessions).references(:movies, :sessions)

    # We use the include option to tell the json renderer
    # to include the movies and sessions in the json
    render json: cycles, include: %i[movies sessions]
  end

  def show
    cycle = Cycle.find_by(slug: params[:slug])
    if cycle
      render json: cycle, include: %i[movies sessions]
    else
      render json: { error: 'Cycle not found' }, status: :not_found
    end
  end
end