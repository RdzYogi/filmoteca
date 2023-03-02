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
    # cycle = Cycle.includes(:movies, movies: [:projections, projections: [:session, session: :hall]]).references(:movies, :projections, :sessions, :halls).find_by(slug: params[:slug])
    cycle = Cycle.includes(:movies, movies: [:projections, projections: [:session, session: :hall]]).find_by(slug: params[:slug])
    if cycle
      result = cycle.movies.map do |movie|
        projections = movie.projections.map do |projection|
          session = projection.session
          hall = session.hall
          { projection:, include: { session:, hall: } }
        end
        { movie:, include: { projections: } }
      end
      render json: { cycle:, include: result }
    else
      render json: { error: 'Cycle not found' }, status: :not_found
    end
  end

  # create, destory, update
  # need to add that only admin can do these three
  def create
    cycle = Cycle.create(cycle_params)
    render json: cycle
  end

  def destroy
    Cycle.find_by(slug: params[:slug]).destroy
  end

  def update
    cycle = Cycle.includes(:movies, :sessions).find_by(slug: params[:slug])
    cycle.update(cycle_params)
    render json: cycle
  end

  private

  def cycle_params
    params.require(:cycle).permit(:id, :name, :description, :quote, :img_url, :start_date, :end_date, :color, :slug)
  end
end
