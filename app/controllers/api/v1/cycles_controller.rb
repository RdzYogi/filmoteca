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
      movies = Movie.where(cycle_id: cycle.id)
      include = movies.map do |movie|
        session = Session.find(movie.session_id)
        hall = Hall.find(session.hall_id)
        { movie:, include: { session:, hall: } }
      end
      result = { cycle:, movies: include }
      render json: result
    else
      render json: { error: 'Cycle not found' }, status: :not_found
    end
  end

  # create, destory, update
  def create
    cycle = Cycle.create(cycle_params)
    render json: cycle
  end

  def destroy
    Cycle.destroy(params[:id])
  end

  def update
    cycle = Cycle.find(params["id"])
    cycle.update_attributes(cycle_params)
    render json: cycle
  end

  private

  def cycle_params
    params.require(:cycle).permit(:id, :name, :description, :quote, :img_url, :start_date, :end_date, :color)
  end
end
