Seat.destroy_all unless Seat.all.empty?
Movie.destroy_all unless Movie.all.empty?
Session.destroy_all unless Session.all.empty?
Hall.destroy_all unless Hall.all.empty?
Cycle.destroy_all unless Cycle.all.empty?


# Define the halls
Hall.create(name: "Sala 1")
Hall.create(name: "Sala 2")
Hall.create(name: "Sala 3")
puts "Halls created"


# Define the seats for each hall
# TODO: Find the exact number of seats for each hall
# TODO: Find the exact distribution on seats for each hall

# For each hall, create 10 rows and 10 columns

# Hall 1
10.times do |row|
  10.times do |column|
    Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
  end
end

# Hall 2
10.times do |row|
  10.times do |column|
    Seat.create(row: row, column: column, hall_id: Hall.all[1].id)
  end
end

# Hall 3
10.times do |row|
  10.times do |column|
    Seat.create(row: row, column: column, hall_id: Hall.all[2].id)
  end
end

puts "Seats created"

# Define placeholder cycles
# TODO: Fill in the correct data for each cycle

Cycle.create(name: "Ciclo 1",
             description: "Ciclo 1",
             quote: "Ciclo 1",
             img_url: "https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM=",
             color: "blue-cycle",
             slug: "ciclo-1",
             start_date: "2021-01-01",
             end_date: "2021-03-31")

Cycle.create(name: "Ciclo 2",
              description: "Ciclo 2",
              quote: "Ciclo 2",
              img_url: "https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM=",
              color: "green-cycle",
              slug: "ciclo-2",
              start_date: "2021-02-01",
              end_date: "2021-03-28")

puts "Cycles created"

# Define placeholder sessions

Session.create(name: "Movie 1",
              description: "Movie 1",
              quote: "Movie 1",
              play_time: "2021-01-01 12:00:00",
              cycle_id: Cycle.all[0].id,
              hall_id: Hall.all[0].id)

# Define placeholder movies

Movie.create(title: "Movie 1",
              runtime: "1h 30m",
              director: "Director 1",
              description: "Movie 1",
              quote: "Movie 1",
              img_url: "",
              slug: "movie-1",
              year: "2021",
              session_id: Session.all[0].id,
              cycle_id: Cycle.all[0].id)

Movie.create(title: "Movie 2",
              runtime: "1h 30m",
              director: "Director 2",
              description: "Movie 2",
              quote: "Movie 2",
              slug: "movie-2",
              img_url: "",
              year: "2021",
              session_id: Session.all[0].id,
              cycle_id: Cycle.all[0].id)

puts "Movies created"

# Define News placeholder

News.create(title: "news1",
            description: "amazing news for everybody 1",
            link: "https://entradasfilmoteca.gob.es/",
            img_url: "https://unsplash.com/photos/h7rOzTmGxWE")

News.create(title: "news2",
            description: "amazing news for everybody 2",
            link: "https://entradasfilmoteca.gob.es/",
            img_url: "https://unsplash.com/photos/h7rOzTmGxWE")

puts "News created"
