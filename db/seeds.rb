Seat.destroy_all unless Seat.all.empty?
Projection.destroy_all unless Projection.all.empty?
Movie.destroy_all unless Movie.all.empty?
Session.destroy_all unless Session.all.empty?
Hall.destroy_all unless Hall.all.empty?
Cycle.destroy_all unless Cycle.all.empty?
Subscription.destroy_all unless Subscription.all.empty?
User.destroy_all unless User.all.empty?
News.destroy_all


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
20.times do |row|
  17.times do |column|
    Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
  end
end

# Hall 2
11.times do |row|
  13.times do |column|
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
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "green-cycle",
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
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/Embrujo_hre7a8.jpg",
            color: "purple-cycle",
            start_date: "2023-02-01",
            end_date: "2023-12-28")

Cycle.create(name: "FILMOTECA JUNIOR",
            description: "Pelis para los junior de la casa",
            quote: "Ciclo 3",
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/La-bella-y-la-bestia_npzo3w.jpg",
            color: "blue-cycle",
            start_date: "2023-02-01",
            end_date: "2023-12-28")
puts "Cycles created"

# Define placeholder sessions

Session.create(name: "Movie 1",
              description: "Movie 1",
              quote: "Movie 1",
              play_time: "2023-02-01 17:00:00",
              cycle_id: Cycle.all[0].id,
              hall_id: Hall.all[0].id)

Session.create(name: "Movie 2",
                description: "Movie 2",
                quote: "Movie 2",
                play_time: "2023-02-02 19:00:00",
                cycle_id: Cycle.all[0].id,
                hall_id: Hall.all[0].id)

# Define placeholder movies
# Add Douglas Sirk Movies
Movie.create(title: "April, April",
              runtime: "84'",
              director: "Douglas Sirk",
              description: "Un panadero que se ha hecho rico monta una fábrica de pasta. Un amigo, harto de su superficialidad, decide gastarle una broma y le cuenta que un príncipe va a ir a visitarla. Debut en el largometraje de Detlef Sierck / Douglas Sirk, siguiendo el sistema de dobles versiones tan común en la época fue rodada también en holandés, aunque esa versión se ha perdido.",
              quote: "«El primer intento de hacer una comedia alemana con el estilo americano». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              year: "1943",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "Concierto en la corte",
              runtime: "85'",
              director: "Douglas Sirk",
              description: "Relato musical sobre los encuentros y desencuentros
              amorosos de una cantante en busca de su padre",
              quote: "«Es una obra de pastelería vienesa. Tras la gravedad de
              La novena sinfonía, sentí la necesidad de hacer algo lige-
              ro y por eso la hice: requería un tono ligero. La rodé en
              Würzburg en el verano de 1936. Por las fotos puedes veremb
              que era una película de gran presupuesto. Tenía en ella a
              Martha Eggerth, que era una famosa soprano de la épo-
              ca. Pude hacer algunos experimentos con la iluminación
              y la cámara. Tenía un operador muy bueno; Weihmayr
              hizo aquí un magnífico trabajo y lo mantuve para el resto
              de mis películas alemanas». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301245/Filmoteca/Concierto-en-la-corte_cvfxwv.jpg",
              year: "2021",
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
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676291459/Filmoteca/Mas-fuerte-que-la-ley_kgutup.jpg",
            year: "1937",
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
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301247/Filmoteca/La-Habanera_v0tmk8.jpg",
            year: "1937",
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
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301243/Filmoteca/La-novena-sinfon%C3%ADa_ifwrdb.jpg",
            year: "1936",
            cycle_id: Cycle.all[0].id)
puts "Movie-5 created"
# Add Lola Flores movies
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
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/Embrujo_hre7a8.jpg",
            year: "1947",
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
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301269/Filmoteca/Una-se%C3%B1ora-estupenda_x6ymci.jpg",
            year: "1947",
            cycle_id: Cycle.all[1].id)
puts "Movie-7 created"
# Add Filmoteca Junior movies
Movie.create(title: "El último unicornio",
            runtime: "92'",
            director: "Arthur Rankin",
            description: "Negándose a creer que sea la última de su especie, una
            unicornia parte en busca de otros como ella, aunque le
            suponga enfrentarse a un malvado rey obsesionado con
            capturarla.",
            quote: "«Vista con ojos contemporáneos, la animación es uno
            de los puntos fuertes de El último unicornio. […] Posee
            una gracia lírica y unos arranques de sofisticado su-
            rrealismo que la diferencian de muchas otras produc-
            ciones animadas. La gente de Rankin/Bass era capaz de
            reconocer el talento, así que trabajaron con el estudio
            Topcraft hasta que este tuvo que cerrar por dificultades
            económicas. En ese momento, un grupo de animado-
            res compró el estudio para empezar un nuevo proyecto,
            manteniendo buena parte de sus empleados. Ese grupo
            estaba compuesto por Hayao Miyazaki, Toshio Suzuki e
            Isao Takahata; el nuevo proyecto era el Estudio Ghibli».
            (Alex McLevy)",
            img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/El-%C3%BAltimo-unicornio_mxtekq.jpg",
            year: "1982",
            cycle_id: Cycle.all[2].id)
puts "Movie-8 created"
Movie.create(title: "La bella y la bestia",
              runtime: "84'",
              director: " Gary Trousdale y Kirk Wise",
              description: "Una joven acepta convertirse en prisionera de un
              temible monstruo para salvar a su padre. Sin embargo, la
              convivencia va derribando las barreras entre ambos.",
              quote: "«Con La bella y la bestia, una película aún más tierna,
              constante y ambiciosa que La sirenita, Disney ha logra-
              do algo que nadie había conseguido antes: combinar
              las últimas técnicas de animación por ordenador con lo
              mejor de Broadway. Aquí, bajo la apariencia de una fá-
              bula infantil se esconde el tipo de partitura ingeniosa e
              inspiradora que ya no existe en los escenarios. La sireni-
              ta ya era una demostración del talento para componer
              canciones de Howard Ashman y Alan Menken, pero en
              este caso la música es incluso más importante. Broad-
              way tiene aquí tanto peso en la puesta en escena y la
              construcción de personajes como en las propias can-
              ciones». (Janet Maslin)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/La-bella-y-la-bestia_npzo3w.jpg",
              year: "1991",
              cycle_id: Cycle.all[2].id)
puts "Movie-9 created"
puts "Movies created"

# Creating Projections
Projection.create(movie_id: Movie.all[0].id,
                  session_id: Session.all[0].id)
puts "Projection-1 created"

Projection.create(movie_id: Movie.all[0].id,
                  session_id: Session.all[1].id)
puts "Projection-2 created"

Projection.create(movie_id: Movie.all[1].id,
                  session_id: Session.all[0].id)
puts "Projection-3 created"

Projection.create(movie_id: Movie.all[2].id,
                  session_id: Session.all[1].id)
puts "Projection-4 created"

Projection.create(movie_id: Movie.all[3].id,
                  session_id: Session.all[0].id)
puts "Projection-5 created"

Projection.create(movie_id: Movie.all[4].id,
                  session_id: Session.all[1].id)
puts "Projection-6 created"

Projection.create(movie_id: Movie.all[5].id,
                  session_id: Session.all[0].id)
puts "Projection-7 created"

Projection.create(movie_id: Movie.all[5].id,
                  session_id: Session.all[1].id)
puts "Projection-8 created"

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

# Creating users

User.create(email: "fran@gmail.com",
            password: "123456")
puts "Fran created"

User.create(email: "vito@gmail.com",
            password: "123456")
puts "Vito created"

User.create(email: "silviu@gmail.com",
            password: "123456")
puts "Silviu created"

User.create(email: "alberto@gmail.com",
            password: "123456")
puts "Alberto created"

User.create(email: "laura@gmail.com",
            password: "123456")
puts "Laura created"

# Creating subscriptions for users

Subscription.create(user_id: User.all[0].id,
                    tipo: "Abono 10",
                    remaining_uses: 10)
puts "Subscription-1 created"

Subscription.create(user_id: User.all[1].id,
                    tipo: "Abono 10",
                    remaining_uses: 8)
puts "Subscription-2 created"

Subscription.create(user_id: User.all[2].id,
                    tipo: "Abono 10",
                    remaining_uses: 6)
puts "Subscription-3 created"

Subscription.create(user_id: User.all[3].id,
                    tipo: "Abono 10",
                    remaining_uses: 4)
puts "Subscription-4 created"

Subscription.create(user_id: User.all[4].id,
                    tipo: "Abono 10",
                    remaining_uses: 5)
puts "Subscription-5 created"

