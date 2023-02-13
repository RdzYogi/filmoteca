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
19.times do |row|
  18.times do |column|
    Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
  end
end

# Hall 2
11.times do |row|
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

Cycle.create(name: "DOUGLAS SIRK. LA EMOCIÓN INMEDIATA",
             description: "Douglas Sirk, el maestro del melodrama: el
             título es incontestable. Hoy en día seguimos
             viendo Obsesión (1954), Su gran deseo (1953),
             Solo el cielo lo sabe (1955), Escrito sobre el
             viento (1956) e Imitación a la vida (1959) con
             la misma fascinación y emoción -que, a veces,
             intenta combatir con una sonrisa- que cuando
             se estrenaron.",
             quote: "Ciclo 1",
             img_url: "https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM=",
             color: "green-cycle",
             slug: "ciclo-1",
             start_date: "2023-01-01",
             end_date: "2023-03-31")

Cycle.create(name: "LOS MIL Y UN EMBRUJOS DE LOLA FLORES",
            description: "¿Se puede decir algo nuevo sobre esta gran
            estrella del mundo del espectáculo español?
            ¿Queda algo que podamos apuntar acerca
            de una persona que rompió todos los moldes
            en un tiempo en el que ser notoria aludía a un
            horizonte no apto para las mujeres? ¿Puede
            alguien ser merecedora de la Gran Cruz de la
            Orden de Isabel Católica, otorgada en pleno
            franquismo, y de la muy democrática Medalla
            de Oro al Mérito en el trabajo?",
            quote: "Ciclo 2",
            img_url: "https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM=",
            color: "blue-cycle",
            slug: "ciclo-2",
            start_date: "2023-02-01",
            end_date: "2023-12-28")

puts "Cycles created"

# Define placeholder sessions

Session.create(name: "Movie 1",
              description: "Movie 1",
              quote: "Movie 1",
              play_time: "2021-01-01 12:00:00",
              cycle_id: Cycle.all[0].id,
              hall_id: Hall.all[0].id)

# Define placeholder movies
# Douglas Sirk Movies
Movie.create(title: "April, Apri!",
              runtime: "82'",
              director: "Douglas Sirk",
              description: "Un panadero que se ha hecho rico monta una fábrica
              de pasta. Un amigo, harto de su superficialidad, decide
              gastarle una broma y le cuenta que un príncipe va a ir
              a visitarla. Debut en el largometraje de Detlef Sierck/
              Douglas Sirk, siguiendo el sistema de dobles versiones
              tan común en la época fue rodada también en holandés,
              aunque esa versión se ha perdido.",
              quote: "«El primer intento de hacer una comedia alemana con el
              estilo americano». (Douglas Sirk)",
              img_url: "",
              slug: "movie-1",
              year: "1935",
              session_id: Session.all[0].id,
              cycle_id: Cycle.all[0].id)
puts "Movie-1 created"
Movie.create(title: "Concierto en la corte",
              runtime: "85'",
              director: "Douglas Sirk",
              description: "Relato musical sobre los encuentros y desencuentros
              amorosos de una cantante en busca de su padre",
              quote: "«Es una obra de pastelería vienesa. Tras la gravedad de
              La novena sinfonía, sentí la necesidad de hacer algo lige-
              ro y por eso la hice: requería un tono ligero. La rodé en
              Würzburg en el verano de 1936. Por las fotos puedes ver
              que era una película de gran presupuesto. Tenía en ella a
              Martha Eggerth, que era una famosa soprano de la épo-
              ca. Pude hacer algunos experimentos con la iluminación
              y la cámara. Tenía un operador muy bueno; Weihmayr
              hizo aquí un magnífico trabajo y lo mantuve para el resto
              de mis películas alemanas». (Douglas Sirk)",
              slug: "movie-2",
              img_url: "",
              year: "2021",
              session_id: Session.all[0].id,
              cycle_id: Cycle.all[0].id)
puts "Movie-2 created"
Movie.create(title: "La golondrina cautiva",
            runtime: "106'",
            director: "Douglas Sirk",
            description: "Cuando se descubre a un noble caído en desgracia
            cometiendo un delito, una actriz que está perdidamente
            enamorada de él acepta encubrirle e ir a prisión en su lugar.",
            quote: "«Es una obra de crítica social, de la clase que a mí me gus-
            ta. Detesto el término “crítica social” porque se ha conver-
            tido en un cliché, pero no parece que exista otra expresión
            para describir este tipo de película. Además, la palabra
            “crítica” (criticism) tiene dos aspectos en inglés. Lo que yo
            hago en una película como esta es simplemente mostrar
            cosas; la crítica tiene que empezar en el público. [...] Tiene
            dos elementos que son fundamentales en mi cine: este
            aspecto de conciencia social y el tipo de personaje que
            siempre me había interesado, tanto en el cine como en el
            teatro, y que procuré mantener también en el melodrama,
            el indeciso, el ambiguo, el inseguro». (Douglas Sirk)",
            slug: "movie-3",
            img_url: "",
            year: "1937",
            session_id: Session.all[0].id,
            cycle_id: Cycle.all[0].id)
puts "Movie-3 created"
Movie.create(title: "La Habanera",
            runtime: "98'",
            director: "Douglas Sirk",
            description: "«Fuimos a Tenerife, que estaba en manos franquistas,
            para rodarla. Era en medio de la guerra civil española.
            Era terrible lo que estaba pasando allí: había un enorme
            campo de concentración, algo que yo no había visto en
            Alemania. […] Pero, volviendo a la película, era otra mues-
            tra de lo que he llamado crítica social. […] Era una película
            anticapitalista, cosa que caía bien en Alemania en aquel
            momento». (Douglas Sirk)",
            img_url: "",
            slug: "movie-4",
            year: "1937",
            session_id: Session.all[0].id,
            cycle_id: Cycle.all[0].id)
puts "Movie-4 created"
Movie.create(title: "La novena sinfonía",
            runtime: "100'",
            director: "Douglas Sirk",
            description: "Obligada a emigrar a Estados Unidos, una mujer alemana
            decide ceder a su bebé en adopción. Cuando regresa a
            Alemania tiempo después, se introduce como niñera en
            la casa de la familia que acogió a su hijo para poder estar
            cerca de él.",
            quote: "«Es una película bastante importante en mi carrera. […]
            Era la primera vez que prescindía del material literario. […]
            Me di cuenta de que debía romper por completo con mi
            pasado teatral. […] Al principio estaba terriblemente ata-
            do a la literatura. A partir de La novena sinfonía me liberé
            de ella y traté de desarrollar un estilo cinematográfico.
            Empecé a comprender que aquí la cámara es lo impor-
            tante […] El movimiento es emoción, en un modo en el
            que nunca puede serlo en el teatro». (Douglas Sirk)",
            img_url: "",
            slug: "movie-5",
            year: "1936",
            session_id: Session.all[0].id,
            cycle_id: Cycle.all[0].id)
puts "Movie-5 created"
# Lola Flores movies
Movie.create(title: "Embrujo",
  runtime: "82'",
  director: "Carlos Serrano de Osma",
  description: "La exitosa pareja artística que forman una bailaora y un
  cantaor se quiebra cuando él se enamora de ella.",
  quote: "«Embrujo fue un intento honrado y Lola Flores lo sabe.
  Un experimento que ha dado, artísticamente –no así en
  lo comercial- un resultado negativo. Pero era un experi-
  mento necesario. Me decía Jesús Leoz, a raíz del mal am-
  biente que se hizo en torno a la película: “Ahora te cen-
  suran, pero un día veremos cosas de Embrujo en el cine
  español”. Hemos visto influencias directísimas de Em-
  brujo en Noche sin cielo, de Iquino; Brindis a Manolete,
  de Florián Rey; El amor brujo, de Tony Román […] No, Lola
  Flores sabe que Embrujo no fue un camelo, aunque bien
  pudiera parecerlo tal y como la presentaron al público
  productores y exhibidores». (Carlos Serrano de Osma)",
  img_url: "",
  slug: "movie-6",
  year: "1947",
  session_id: Session.all[0].id,
  cycle_id: Cycle.all[1].id)
puts "Movie-6 created"
Movie.create(title: "Una señora estupenda",
  runtime: "70'",
  director: "Eugenio Martin",
  description: "Una cantante española que ha hecho fortuna en México
  regresa a España tras la boda de su hijo. Al llegar descubre
  que no todo el mundo está contento con su vuelta.",
  quote: "«Combina sin inquietud los ingredientes de un prota-
  gonismo de Lola Flores en la época con rasgos melo-
  sos típicamente mexicanos y el estilo de comicidad del
  cine español coetáneo, no en vano intervienen José Luis
  López Vázquez, José Sazatornil, Gracita Morales, Rafaela
  Aparicio… amén de un Miguel Gila cuyas escenas se di-
  rían autónomas. Con todo, resulta inolvidable la escena
  en que la estrella canta Qué barbaridad, chispeante y
  arrolladora […] La guitarra corre a cargo del marido de
  Lola Flores, o sea Antonio González El Pescaílla, e inter-
  vienen también un apreciable número de artistas flamen-
  cos: Rafael Romero, Pepe Montoyita, Beni de Jerez, Paco
  Aguilera, Juana la del Pipa…». (Carlos Aguilar y Anita Haas)",
  img_url: "",
  slug: "movie-6",
  year: "1947",
  session_id: Session.all[0].id,
  cycle_id: Cycle.all[1].id)
puts "Movie-6 created"
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
