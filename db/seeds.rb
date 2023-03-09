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
  if row < 13
    16.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
    end
  elsif row == 13
    14.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
    end
  elsif row == 14
    12.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
    end
  elsif row == 15
    10.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
    end
  else
    17.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[0].id)
    end
  end
end

# Hall 2
11.times do |row|
  if row < 1
    8.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[1].id)
    end
  elsif row == 1
    9.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[1].id)
    end
  elsif row == 2 || row == 3
    10.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[1].id)
    end
  elsif row == 4 || row == 5 || row == 7
    11.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[1].id)
    end
  elsif row == 6 || row == 8 || row == 9
    12.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[1].id)
    end
  else
    13.times do |column|
      Seat.create(row: row, column: column, hall_id: Hall.all[1].id)
    end
  end
end

# Hall 3
10.times do |row|
  10.times do |column|
    Seat.create(row: row, column: column, hall_id: Hall.all[2].id)
  end
end

puts "Seats created"

# Define placeholder sessions
require 'date'
start_date = Date.today
# puts start_date
first_day_month = Date.new(start_date.year, start_date.month, 1)
# puts first_day_month
end_date = first_day_month >> 1
# puts end_date
array_days = (first_day_month...end_date).to_a
array_days.each do |day|
  if day.monday? == false
    # p day.asctime
    i = 16
    6.times do
      if i <= 20
        new_date_t = DateTime.new(day.year, day.month, day.mday, i, 0, 0)
        new_date = new_date_t.strftime('%a, %d %b %Y %H:%M:%S')
        i += 2
        # crear sesion con new date sala 1
        Session.create(play_time: new_date, hall_id: Hall.all[0].id)
      else
        new_date_t = DateTime.new(day.year, day.month, day.mday, i - 6, 0, 0)
        new_date = new_date_t.strftime('%a, %d %b %Y %H:%M:%S')
        i += 2
        # crear sesion con new date sala 2
        Session.create(play_time: new_date, hall_id: Hall.all[1].id)
      end
    end
  end
end
puts "Sessions Created"

# Define the cycles and the movies for each cycle

Cycle.create(name: "JERZY SKOLIMOWSKI IDENTIDADES MÚLTIPLES",
              description: "Jerzy Skolimowski jamás se ha dejado engullir
              completamente por el cine. Más bien es él
              quien se apodera de la cámara utilizándola
              cuándo, cómo y dónde quiere. ¿Un debut en
              el largometraje compuesto de cortometrajes
              rodados en la Escuela de Cine de Łódź? ¿Por
              qué no? Así nació la película Identification
              Marks: None (1964), crucial para el cine polaco.
              Su primera película extranjera, La partida,
              galardonada en 1967 con el Oso de Oro en
              Berlín, fue protagonizada por Jean-Pierre
              Léaud, el joven más famoso de la Nouvelle
              Vague. Durante la emigración forzosa a Londres
              nació Deep end (1970), probablemente la mejor,
              y siempre poco conocida, película de toda su
              carrera: un relato agridulce sobre la iniciación
              sexual que, de una manera magistral, atrapaba
              el ambiente de finales de los años 60. Por
              entonces le comparaban con los mejores del
              cine europeo, con Jean-Luc Godard y François
              Truffaut a la cabeza.",
              quote: "Ciclo 1",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "blue-cycle",
              start_date: "2021-03-01",
              end_date: "2021-05-31")

Movie.create(title: "11 MINUTES",
             runtime: "81 min",
              year: "2015",
              director: "Jerzy Skolimowski",
              description: "El impacto de un suceso extraordinario, la aparición de
              un extraño objeto en el cielo, visto a través de la vida de
              diferentes habitantes de Varsovia.",
              quote: "«En su poco ortodoxa respuesta al cine de acción de Hollywood, Jerzy Skolimowski ha hecho una película que es
              más de lo que parece (o quizá es exactamente eso). En
              términos narrativos, tenemos la lucha (inconsciente) por
              la supervivencia de un grupo de gente que se enfrenta a
              su destino entre las 17:00 y las 17:11 de un día cualquiera. Lo extraordinario aquí es que, dentro de la concisa
              geometría del guion, Skolimowski se libera de la carga
              psicológica del cine. Hay algún que otro rasgo psicológico aquí y allá (los celos de un esposo, una ruptura sentimental), pero la mayoría de las historias entrelazadas se
              desarrollan sin exponer de forma clara las motivaciones
              de los personajes, que permanecen suspendidos en el
              limbo del suspense». (Manu Yáñez)"
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "DEEP END",
              runtime: "92 min",
              year: "1970",
              director: "Jerzy Skolimowski",
              description: "Un adolescente que trabaja en una casa de baños se
              obsesiona, de forma progresivamente más enfermiza,
              con una de sus compañeras de trabajo.",
              quote: "«Parece que no hay límite para el número de comedias
              que explotan el oscuro periodo de la adolescencia en
              busca del humor de la vergüenza, la ansiedad y el eterno
              drama inherente a la búsqueda de lo que uno quiere, en
              este caso, acostarse con una chica guapa. Incluso se podría decir que estas historias se escriben solas. Cuando
              el polaco Jerzy Skolimowski rodó Deep End, el éxito de
              taquilla de El graduado estaba todavía en la mente de
              todos, pero el segundo largometraje en inglés de Skolimowski no podía estar más alejado en tono, estilo o incluso en lo que el protagonista de 15 años parece querer,
              en comparación con las aventuras amorosas de Benjamin Braddock. Precediendo a Verano del 42, de Robert
              Mulligan, y a Taxi Driver, de Martin Scorsese, en uno y
              seis años, respectivamente, la alucinante, disonante pero
              convincente historia de confusión hormonal de Skolimowski parece anticiparse a ambas». (Jaime N. Christley)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "EL CUCHILLO EN EL AGUA",
              runtime: "94 min",
              year: "1962",
              director: "Roman Polanski",
              description: "Un matrimonio en crisis recoge a un autoestopista y le
              invitan a pasar el día con ellos en su yate. Según pasan
              las horas, la tensión entre el marido y el autoestopista
              va creciendo. El primer largometraje de Roman Polanski,
              que contó con la colaboración de Jerzy Skolimowski en
              el guion.",
              quote: "«Polanski y sus coguionistas Jerzy Skolimowski y Kuba
              Goldberg trabajaron en el guion durante tres semanas
              antes de presentar un borrador al Ministerio de Cultura. Skolimowski, otro graduado de la Escuela de Cine de
              Lodz, animó a Polanski a reducir el periodo de la historia a una extensión ajustada de 24 horas, lo que ayudó a
              exagerar la intensidad de las emociones y a aumentar las
              tensiones de una escena a otra. Esta historia contada a lo
              largo de varios días podría haber resultado melodramática, pero al limitar el tiempo que los personajes pasan
              juntos, se convierte en un relato que se embellece con un
              propósito tan específico como digno de la deliberación
              del público. Polanski declaró más tarde a “The New York
              Times”, en una entrevista de 1971: “Lo que me gusta son
              las situaciones realistas en la que las cosas no encajan
              del todo”». (Brian Eggert)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "EL GRITO",
              runtime: "86 min",
              year: "1978",
              director: "Jerzy Skolimowski",
              description: "Un hombre que asegura tener el poder de matar gritando
              se introduce en la casa de un matrimonio y comienza a
              dominarles con sus extraños poderes.",
              quote: "«Una etérea alegoría (a partir de un relato de Robert
              Graves) llevada a tierra gracias a una pasión sexual mordaz. Alan Bates es el loco errante que tiene cautivos a
              un compositor y a su esposa. La sexualidad triunfa sobre
              la civilización a través de una serie de pequeñas traiciones, cada una de ellas registrada con espantosa y milimétrica precisión por la cámara de Jerzy Skolimowski.
              Aunque Skolimowski parecía haber retrocedido un poco
              en sus ambiciones formales (antaño parecía un rival real
              de Godard), este largometraje de 1978 es pura astucia e
              imaginación cinematográficas, un thriller en trance que
              supera a Peter Weir en su propio terreno». (Dave Kehr)"
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "ESSENTIAL KILLING",
              runtime: "83 min",
              year: "2010",
              director: "Jerzy Skolimowski",
              description: "Un afgano vinculado a los talibanes es capturado por
              el ejército estadounidense tras atacar a un grupo de
              soldados y llevado a un centro de detención clandestino
              en Europa. Cuando logra escapar de sus captores, se
              inicia una agónica lucha por la supervivencia.",
              quote: "«Sabía de los aviones de la CIA que aterrizaban en un aeropuerto militar cercano por la prensa, y que supuestamente se llevaban prisioneros de Oriente Próximo a esta
              base secreta no muy lejos de mi casa. Instintivamente,
              me negué a pensar en ello como tema de mi próxima película por su contexto político, ya que no me considero
              un activista político. […] No importa si es esta o aquella
              guerra, si tiene lugar en Afganistán o Irak o en la frontera
              de Pakistán. […] Lo que me interesa es que este tipo se ve
              atrapado en estas dramáticas circunstancias y es llevado
              a este paisaje nevado que está lo más lejos posible de
              todo lo que ha conocido. Por un extraño giro de la suerte, o más bien de la desgracia, como pronto descubrirá,
              consigue escapar. La película trata de su lucha por sobrevivir». (Jerzy Skolimowski)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "FERDYDURKE",
              runtime: "90 min",
              year: "1991",
              director: "Jerzy Skolimowski",
              description: "En 1939, un escritor polaco afronta la Segunda Guerra
              Mundial rememorando su infancia. Adaptación de la
              novela homónima de Witold Gombrowicz.",
              quote: "«Poco vista, Ferdydurke es la película que provocó el silencio de diecisiete años de Jerzy Skolimowski como director -un Skolimowski decepcionado se retiró a su casa
              de Malibú y se dedicó a pintar y a algún que otro papel
              como actor- […] El regreso cinematográfico de Skolimowski a su patria, adaptación de un clásico moderno
              querido y admirado y, al mismo tiempo, su primera película rodada en Polonia desde los años sesenta, parece
              haber sido para él una forma de conectar con Polonia y
              los polacos, de los que había vivido tanto tiempo exiliado.
              Es una afirmación de su propia identidad polaca, pero es
              una afirmación que, en el estilo característico de Skolimowski y Gombrowicz, ironiza, se burla y cuestiona».
              (Ian Johnston)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "LAS AVENTURAS DE GERARD",
              runtime: "92 min",
              year: "1970",
              director: "Jerzy Skolimowski",
              description: "Napoleón designa como mensajero a un brigadier que
              cree ser el mejor soldado y amante del mundo, hazañas
              que intenta poner a prueba ante una condesa, un bandido
              y un oficial británico.",
              quote: "«Aunque la película amenaza a veces con convertirse en
              una serie de trucos de magia, Las aventuras de Gerard se
              redime en parte por su tono de fantasía barroca, al estilo
              del barón Munchausen, lleno de toques surrealistas, y en
              parte porque Gerard es un héroe cien por cien propio de
              Skolimowski, estrafalario y resuelto en su búsqueda de la
              realización personal, convirtiéndose en la contraposición
              napoleónica del Marc de La partida. A pesar de su apariencia caótica, Gerard tiene una personalidad inconfundible». (Nigel Andrews)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)

Movie.create(title: "MOONLIGHTING",
              runtime: "97 min",
              year: "1982",
              director: "Jerzy Skolimowski",
              description: "Cuatro obreros polacos llegan a Londres para acometer
              un trabajo. A las dificultades propias de trabajar sin ningún
              tipo de permiso se suma la declaración en Polonia de la
              ley marcial.",
              quote: "«Skolimowski (que ha vivido y trabajado principalmente
              en Inglaterra durante la última década) concibió Trabajo
              clandestino pocos días después del golpe militar de diciembre del 81, escribió el guion en una semana y media,
              consiguió la financiación (2 millones de dólares) durante
              un partido de tenis, rodó la película y la presentó en el
              Festival de Cannes en la primavera de 1982. […] Es el tipo
              de película que me hace maravillarme de cómo alguien
              puede tener una idea tan genial y llevarla a cabo de forma tan redonda, con medios casi cómicamente modestos». (Richard T. Jameson)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[0].id)


Cycle.create(name: "MARGARITA ALEXANDRE VISCERALMENTE LIBRE",
              description: "Se cumplen –se cumplirán el 23 de julio de
              2023– cien años del nacimiento de Margarita
              Alexandre, directora, productora, guionista y
              actriz cinematográfica, cineasta integral que
              hizo del cine un medio con y desde el que vivir
              la vida como un arte, alguien para quien hacer la
              revolución en el cine era tan importante como
              lograr la revolución en la vida. Para Alexandre,
              la vida solo podía ser plenamente vivida en
              libertad y con esa idea de libertad –que quiso
              tanto para ella como para los demás– vivió
              comprometida. Llegó al cine por casualidad,
              cuando estudiaba en la Alianza Francesa y el
              equipo de Eusebio Fernández Ardavín llegó
              buscando a una joven que pudiera dar vida a
              la Inmaculada Concepción de Murillo, que se
              encarnaba en el sueño de la protagonista de
              Tierra y cielo (1941). A partir de ese momento queda fascinada por el mundo que hay detrás de
              la cámara, un espacio que convoca a sonidistas,
              electricistas, foquistas, etc. para obrar
              colectivamente el milagro del cine. Bajo aquel
              encantamiento, Alexandre comenzó a aceptar
              pequeños papeles como actriz secundaria o
              de reparto (en los que solía acreditarse como
              Margarita Sandra) con directores como Edgar
              Neville, Julien Duvivier o Ladislao Vajda. Al
              tiempo que encarnaba a un modelo de mujer
              sofisticada de aire aristocrático, aprendía los
              secretos de la producción y de la dirección
              cinematográfica. Tras realizar su única película
              como actriz protagonista –Barco sin rumbo
              (José María Elorrieta, 1951)–, el trabajo que
              realizó como script para Antonio del Amo en
              Puebla de las mujeres (1952) le sirvió para dar el
              salto definitivo al otro lado de la cámara.",
              quote: "Ciclo 2",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "purple-cycle",
              start_date: "2023-03-01",
              end_date: "2023-03-31",
              )

Movie.create(title: "CRISTO",
              runtime: "73 min",
              year: "1954",
              director: "Margarita Alexandre y Rafael María Torrecilla",
              description: "Adaptación del libro Vida de Cristo, de Fray Justo Pérez
              de Urbel, construida a partir de grandes ejemplos de la
              pintura religiosa.",
              quote: "«Hemos creído que en esta película, como en todas, el
              logro principal es la unidad. Y, en todo lo posible, esa unidad la hemos querido conseguir utilizando en cada una
              de las definidas secuencias de nuestra película las obras
              de un mismo maestro, o, al menos, con las de un mismo estilo, escuela o época. […] Nuestra película comienza
              por tener, por su propio y solemne tema, una intemporalidad que le pone a salvo de gustos y modas. Sirve al
              más alto empeño –la fe- que el cine puede abordar y, al
              mismo tiempo, supone un desfile pictórico, que se ordena por primera vez en el cine: un tesoro plástico que el
              cine va a vulgarizar con su enorme poder de extensión».
              (Margarita Alexandre)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[1].id)

Movie.create(title: "LA CIUDAD PERDIDA",
              runtime: "67 min",
              year: "1955",
              director: "Margarita Alexandre y Rafael María Torrecilla",
              description: "Durante la dictadura franquista, un republicano regresa a
              España con la intención de llevar a cabo un acto terrorista
              contra el régimen. Sin embargo, la misión es un fracaso y
              se ve obligado a tomar a una mujer como rehén para huir.",
              quote: "«Una insólita propuesta de Alexandre y Torrecilla, en un
              contexto marcado por la emergencia de nuevos discursos sobre la Guerra Civil, alejados del cine de cruzada, y
              de planteamientos visuales que conectan con tendencias
              internacionales como el neorrealismo italiano o el cine
              negro, estadounidense o europeo. […] La ciudad perdida
              constituye una suerte de mutación en virtud de la cual la
              trama policial sirve como pretexto para llevar hasta los
              límites de la permisividad la figuración del vencido —para
              emplear la terminología oficial de la época— y la representación del pasado». (Sonia García López)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[1].id)

Movie.create(title: "LA GATA",
              runtime: "94 min",
              year: "1956",
              director: "Margarita Alexandre y Rafael María Torrecilla",
              description: "La hija del mayoral de un cortijo andaluz es pretendida
              por varios hombres del pueblo. Sin embargo, ella está
              enamorada de un apuesto trabajador que sueña con ser
              torero.",
              quote: "«La primera película española que utiliza el
              CinemaScope y el sonido estereofónico, que en 1955
              son sistemas de impactante actualidad. […] Junto a su
              imaginativo sentido del encuadre, tanto en la captación
              del paisaje andaluz (la marisma, los cercados, los montes) como en las escenas dramáticas, destaca también
              el valor histórico de esta pionera aportación española a
              los formatos anamórficos. […] aborda, en pleno franquismo folclorista, una historia de la España racial sin tópicos, huyendo del estereotipo y fijándose en la representación naturalista de la Andalucía rural, la de la marisma
              de Huelva, para la mejor adecuación con el sentido primitivo e instintivo de las pasiones de los protagonistas».
              (Fernando Gabriel Martín)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[1].id)

Movie.create(title: "LA MUERTE DE UN BURÓCRATA",
              runtime: "85 min",
              year: "1966",
              director: "Tomás Gutiérrez Alea",
              description: "Cuando su tío es enterrado con su carné de trabajador,
              un joven vive toda clase de peripecias tratando de
              recuperar el documento, fundamental para que la viuda
              pueda cobrar su pensión.",
              quote: "«Esta comedia absurda y satírica sobre la burocracia
              es probablemente la primera película cubana que tuvo
              un impacto internacional, ganando el Premio Especial
              del Jurado en el Festival de Karlovy Vary. A pesar de que
              La muerte de un burócrata se reía de algunos aspectos
              del comunismo, era un notable ejemplo de las sensibilidades creativas de Tomás Guitérrez Alea, un cineasta
              rompedor capaz de criticar aspectos de su gobierno y al
              mismo tiempo permanecer leal a la revolución cubana».
              (Alejandro Veciana)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[1].id)

Cycle.create(name: "EL SIGLO DE JOSÉ MARÍA FORQUÉ",
              description: "Aragonés, inserto, por tanto, en la insigne
              estirpe de grandes cineastas españoles
              procedentes de esas tierras (Segundo de
              Chomón, Florián Rey, Luis Buñuel, Carlos
              Saura, José Luis Borau…), José María Forqué
              Galindo, nació en Zaragoza el 8 de marzo
              de 1923. De familia humilde, hizo con beca
              sus primeros estudios y el bachillerato y
              muy pronto empezó a participar, con otros
              estudiantes, en el Teatro Universitario de
              Zaragoza. En 1943 consigue un trabajo de
              dibujante de arquitecto en Madrid, donde
              logra ingresar en la Escuela de Arquitectura;
              saca adelante algún curso pero termina
              por abandonar la carrera al no ver claro su
              futuro en ese camino. Conoce a gentes
              del teatro y cine y, sin dejar su trabajo de
              dibujante, tiene sus primeras experiencias
              cinematográficas en documentales de
              carácter oficial y, con ánimo de aprendizaje,
              asiste al rodaje de alguna película. En 1948,
              se casa con la actriz y escritora Carmen
              Vázquez Vigo, de la que tuvo dos hijos,
              Álvaro, también director de cine, y Verónica,
              una de las actrices de mayor prestigio en la
              actualidad.",
              quote: "Ciclo 1",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "red-cycle",
              start_date: "2023-03-01",
              end_date: "2023-03-31")

Movie.create(title: "091: POLICÍA AL HABLA",
              runtime: "91 min",
              year: "1960",
              director: "José María Forqué",
              description: "Un policía vive obsesionado con capturar al coche que se
              dio a la fuga tras el atropello de su hija.",
              quote: "«El que un policía diese una bofetada a un detenido no
              era de ningún modo admisible. Y expliqué a Arias Navarro,
              que entonces era Director General de Seguridad, que si
              el tema no se trataba dramáticamente, con cierta dureza,
              según el contexto de las situaciones, resultaría superfalso; la Policía iba a parecerse a los Coros y Danzas de la
              Sección Femenina. Me dio la razón y, en la misma tesitura, defendió el mantenimiento de algunas situaciones a
              las que había puesto reparos el propio representante, en
              la Censura, del Ministerio de la Gobernación. […] Fue otro
              gran éxito. Me sirvió profesionalmente para poder seguir
              trabajando pero, en otro orden de cosas, hizo que me
              pusieran la etiqueta de director muy comercial. Para mí
              aquello era muy halagador, pues pienso que si una película no es comercial, no es nada, pero, a partir de entonces, la crítica no fue demasiado generosa conmigo, en
              muchas ocasiones». (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "AMANECER EN PUERTA OSCURA",
              runtime: "85 min",
              year: "1957",
              director: "José María Forqué",
              description: "En la Andalucía del siglo XIX, tres forajidos se enfrentan a
              una despiadada compañía minera.",
              quote: "«Al presentar el guion en Censura, el representante del
              Ministerio de Gobernación nos puso una serie de reparos. Uno de ellos, que la Guardia Civil no podía disparar
              sin dar en el blanco, y otro que el tratamiento que dábamos a la situación en las minas podía molestar a los
              americanos. Lo que resultaba sorprendente, primero,
              porque la acción se desarrollaba en el siglo pasado y, segundo, porque en las minas no intervinieron nunca los
              americanos sino los ingleses. Lo que sí existía, como en
              Embajadores en el infierno, era un enfrentamiento entre
              españoles y extranjeros, unos los oprimidos y otros los
              opresores. Yo esta cuestión la sentía como propia, y la
              sigo sintiendo». (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "ATRACO A LAS TRES",
              runtime: "92 min",
              year: "1962",
              director: "José María Forqué",
              description: "Un hombre que trabaja como cajero en un banco convence
              a sus compañeros para atracar su propia sucursal.",
              quote: "«Lo cierto es que pocas veces se ha visto en el cine español un entrelazamiento tan pertinente de las situaciones repetitivas que constituyen el relato paródico y sobre
              todo el gran acierto de la oposición de los estereotipos
              creados por cada personaje. Como en las mejores y más
              canónicas comedias, el espectador intuye cuáles serán
              las reacciones de los oficinistas ante las situaciones diarias o frente a las cuitas del atraco; el resultado es que
              el espectador disfruta sin parar del diseño de los personajes, de los conflictos entre ellos y de las expectativas
              planteadas […] Atraco a las tres es algo más que el resultado del saber hacer en el montaje o la puesta en escena
              de un director artesano». (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "CASI UN CABALLERO",
              runtime: "98 min",
              year: "1964",
              director: "José María Forqué",
              description: "Una ladrona inexperta y sus dos compinches conocen a
              un elegante ladrón de guante blanco.",
              quote: "«En Casi un caballero experimenté efectos, que ya había apuntado en Atraco a las tres, en el juego del humor.
              Se nos ocurrió poner juntos a López Vázquez y Alfredo
              Landa, formando esa pareja de payaso y 'clown', de listo
              y tonto, que siempre funciona de maravilla y que, en el
              cine, enmascarada de una forma u otra, tanto se ha prodigado. Inventamos también una nueva Concha Velasco, en un personaje más sofisticado, cuando ella, hasta
              entonces, hacía sólo papeles de sainete. Se adaptó muy
              bien porque tiene un gran talento intuitivo, aparte de su
              enorme encanto personal. Creamos muchos 'gags' y
              nos divertimos mucho en el rodaje». (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "¡DAME UN POCO DE AMOOOR…!",
              runtime: "87 min",
              year: "1968",
              director: "José María Forqué",
              description: "Un seguidor de las doctrinas de Fu Manchú, en su afán por
              dominar el mundo con una fórmula química, secuestra al
              cantante de Los Bravos.",
              quote: "«Forqué vuelve al género musical con una película muy
              personal, sembrada de hallazgos insólitos. En un grupo
              joven, Los Bravos, muy popular en los años 60, se centraba, no sólo la actuación musical, sino una trama inspirada
              en los cómics de la época. Había una estilización de trucos visuales, de mucha semejanza con la técnica de los
              videoclips, tan en boga hoy. Aquello suponía entonces
              una curiosa novedad». (Florentino Soria)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "DE ESPALDAS A LA PUERTA",
              runtime: "88 min",
              year: "1959",
              director: "José María Forqué",
              description: "Una bailarina de un local es brutalmente agredida. La
              policía investiga el caso haciendo creer a los sospechosos
              que la víctima vio el rostro del agresor.",
              quote: "«Todo transcurre en muy pocas horas, con feliz conversión del tiempo real al tiempo cinematográfico, y en un
              solo ambiente, que es el formado por las distintas dependencias -apenas media docena de decorados- de la
              “boite“. Hay pues, unidad de acción, de lugar y de tiempo, y el director José María Forqué ha resuelto con verdadera elegancia e inteligente seguridad los problemas
              que su resolución le planteaba. Servido con espléndida
              calidad por la admirable fotografía de Enrique Guerner,
              maestro siempre en ambición y refinamiento, luce Forqué
              su flexible dominio de los recursos cinematográficos».
              (Carlos Fernández Cuenca)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)





# Cycle.create(name: "DOUGLAS SIRK. LA EMOCIÓN INMEDIATA",
#               description: "Douglas Sirk, el maestro del melodrama: el
#               título es incontestable. Hoy en día seguimos
#               viendo Obsesión (1954), Su gran deseo (1953),
#               Solo el cielo lo sabe (1955), Escrito sobre el
#               viento (1956) e Imitación a la vida (1959) con
#               la misma fascinación y emoción -que, a veces,
#               intenta combatir con una sonrisa- que cuando
#               se estrenaron.",
#               quote: "Ciclo 1",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
#               color: "green-cycle",
#               start_date: "2023-01-01",
#               end_date: "2023-03-31")

# Cycle.create(name: "LOS MIL Y UN EMBRUJOS DE LOLA FLORES",
#             description: "¿Se puede decir algo nuevo sobre esta gran
#             estrella del mundo del espectáculo español?
#             ¿Queda algo que podamos apuntar acerca
#             de una persona que rompió todos los moldes
#             en un tiempo en el que ser notoria aludía a un
#             horizonte no apto para las mujeres? ¿Puede
#             alguien ser merecedora de la Gran Cruz de la
#             Orden de Isabel Católica, otorgada en pleno
#             franquismo, y de la muy democrática Medalla
#             de Oro al Mérito en el trabajo?",
#             quote: "Ciclo 2",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/Embrujo_hre7a8.jpg",
#             color: "purple-cycle",
#             start_date: "2023-02-01",
#             end_date: "2023-12-28")

# Cycle.create(name: "FILMOTECA JUNIOR",
#             description: "Pelis para los junior de la casa",
#             quote: "Ciclo 3",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/La-bella-y-la-bestia_npzo3w.jpg",
#             color: "blue-cycle",
#             start_date: "2023-02-01",
#             end_date: "2023-12-28")

# Cycle.create(name: "SESIÓN ESPECIAL",
#               description: "Sessions especiales para los amantes del cine. Disfruta de las mejores películas en la mejor compañía.",
#               quote: "Ciclo 4",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301263/Filmoteca/Volver-a-empezar_ivrimz.jpg",
#               color: "gray-cycle",
#               slug: "ciclo-4",
#               start_date: "2023-02-01",
#               end_date: "2023-12-28")

# Cycle.create(name: "A/Z ZULUETA INÉDITO",
#               description: "Voluptuosidad, alucinación y la imposibilidad de
#               acceder al objeto soñado definen, en contraste con
#               el severo o grotesco cine español de su época, las
#               creaciones de Iván Zulueta, a quien conocimos por
#               sus carteles cinematográficos.",
#               quote: "Ciclo 5",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301245/Filmoteca/Con-J-de-Zulueta_ustrdx.jpg",
#               color: "red-cycle",
#               slug: "ciclo-5",
#               start_date: "2023-02-01",
#               end_date: "2023-12-28")

# Cycle.create(name: "OUSMANE SEMBENE. EL LENGUAJE DE ÁFRICA",
#               description: "Abrimos esta retrospectiva dedicada al cineasta senegalés Ousmane Sembene en el año de su
#               centenario con la transcripción de una conferencia que dio en 1995 en Londres. Bajo el título
#               “¿Puede el cine africano conseguir el mismo nivel de indigenización que otras formas de arte
#               popular africano?”, el siguiente texto fue después publicado en el volumen Symbolic Narratives/
#               African Cinema. Audiences, Theory and the Moving Image (British Film Institute, 2000)",
#               quote: "Ciclo 6",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301245/Filmoteca/Borom-sarret_La_noire_l1yyme.jpg",
#               color: "yellow-cycle",
#               slug: "ciclo-6",
#               start_date: "2023-01-01",
#               end_date: "2023-02-28")

# puts "Cycles created"


# Movie.create(title: "April, April",
#               runtime: "84'",
#               director: "Douglas Sirk",
#               description: "Un panadero que se ha hecho rico monta una fábrica de pasta. Un amigo, harto de su superficialidad, decide gastarle una broma y le cuenta que un príncipe va a ir a visitarla. Debut en el largometraje de Detlef Sierck / Douglas Sirk, siguiendo el sistema de dobles versiones tan común en la época fue rodada también en holandés, aunque esa versión se ha perdido.",
#               quote: "«El primer intento de hacer una comedia alemana con el estilo americano». (Douglas Sirk)",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
#               year: "1943",
#               cycle_id: Cycle.all[0].id)

# Movie.create(title: "Concierto en la corte",
#               runtime: "85'",
#               director: "Douglas Sirk",
#               description: "Relato musical sobre los encuentros y desencuentros
#               amorosos de una cantante en busca de su padre",
#               quote: "«Es una obra de pastelería vienesa. Tras la gravedad de
#               La novena sinfonía, sentí la necesidad de hacer algo lige-
#               ro y por eso la hice: requería un tono ligero. La rodé en
#               Würzburg en el verano de 1936. Por las fotos puedes veremb
#               que era una película de gran presupuesto. Tenía en ella a
#               Martha Eggerth, que era una famosa soprano de la épo-
#               ca. Pude hacer algunos experimentos con la iluminación
#               y la cámara. Tenía un operador muy bueno; Weihmayr
#               hizo aquí un magnífico trabajo y lo mantuve para el resto
#               de mis películas alemanas». (Douglas Sirk)",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301245/Filmoteca/Concierto-en-la-corte_cvfxwv.jpg",
#               year: "2021",
#               cycle_id: Cycle.all[0].id)
# puts "Movie-2 created"
# Movie.create(title: "La golondrina cautiva",
#             runtime: "106'",
#             director: "Douglas Sirk",
#             description: "Cuando se descubre a un noble caído en desgracia
#             cometiendo un delito, una actriz que está perdidamente
#             enamorada de él acepta encubrirle e ir a prisión en su lugar.",
#             quote: "«Es una obra de crítica social, de la clase que a mí me gus-
#             ta. Detesto el término “crítica social” porque se ha conver-
#             tido en un cliché, pero no parece que exista otra expresión
#             para describir este tipo de película. Además, la palabra
#             “crítica” (criticism) tiene dos aspectos en inglés. Lo que yo
#             hago en una película como esta es simplemente mostrar
#             cosas; la crítica tiene que empezar en el público. [...] Tiene
#             dos elementos que son fundamentales en mi cine: este
#             aspecto de conciencia social y el tipo de personaje que
#             siempre me había interesado, tanto en el cine como en el
#             teatro, y que procuré mantener también en el melodrama,
#             el indeciso, el ambiguo, el inseguro». (Douglas Sirk)",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676291459/Filmoteca/Mas-fuerte-que-la-ley_kgutup.jpg",
#             year: "1937",
#             cycle_id: Cycle.all[0].id)
# puts "Movie-3 created"
# Movie.create(title: "La Habanera",
#             runtime: "98'",
#             director: "Douglas Sirk",
#             description: "«Fuimos a Tenerife, que estaba en manos franquistas,
#             para rodarla. Era en medio de la guerra civil española.
#             Era terrible lo que estaba pasando allí: había un enorme
#             campo de concentración, algo que yo no había visto en
#             Alemania. […] Pero, volviendo a la película, era otra mues-
#             tra de lo que he llamado crítica social. […] Era una película
#             anticapitalista, cosa que caía bien en Alemania en aquel
#             momento». (Douglas Sirk)",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/La-golondrina-cautiva_n84sve.jpg",
#             year: "1937",
#             cycle_id: Cycle.all[0].id)
# puts "Movie-4 created"
# Movie.create(title: "La novena sinfonía",
#             runtime: "100'",
#             director: "Douglas Sirk",
#             description: "Obligada a emigrar a Estados Unidos, una mujer alemana
#             decide ceder a su bebé en adopción. Cuando regresa a
#             Alemania tiempo después, se introduce como niñera en
#             la casa de la familia que acogió a su hijo para poder estar
#             cerca de él.",
#             quote: "«Es una película bastante importante en mi carrera. […]
#             Era la primera vez que prescindía del material literario. […]
#             Me di cuenta de que debía romper por completo con mi
#             pasado teatral. […] Al principio estaba terriblemente ata-
#             do a la literatura. A partir de La novena sinfonía me liberé
#             de ella y traté de desarrollar un estilo cinematográfico.
#             Empecé a comprender que aquí la cámara es lo impor-
#             tante […] El movimiento es emoción, en un modo en el
#             que nunca puede serlo en el teatro». (Douglas Sirk)",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301243/Filmoteca/La-novena-sinfon%C3%ADa_ifwrdb.jpg",
#             year: "1936",
#             cycle_id: Cycle.all[0].id)
# puts "Movie-5 created"
# # Add Lola Flores movies
# Movie.create(title: "Embrujo",
#             runtime: "82'",
#             director: "Carlos Serrano de Osma",
#             description: "La exitosa pareja artística que forman una bailaora y un
#             cantaor se quiebra cuando él se enamora de ella.",
#             quote: "«Embrujo fue un intento honrado y Lola Flores lo sabe.
#             Un experimento que ha dado, artísticamente –no así en
#             lo comercial- un resultado negativo. Pero era un experi-
#             mento necesario. Me decía Jesús Leoz, a raíz del mal am-
#             biente que se hizo en torno a la película: “Ahora te cen-
#             suran, pero un día veremos cosas de Embrujo en el cine
#             español”. Hemos visto influencias directísimas de Em-
#             brujo en Noche sin cielo, de Iquino; Brindis a Manolete,
#             de Florián Rey; El amor brujo, de Tony Román […] No, Lola
#             Flores sabe que Embrujo no fue un camelo, aunque bien
#             pudiera parecerlo tal y como la presentaron al público
#             productores y exhibidores». (Carlos Serrano de Osma)",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/Embrujo_hre7a8.jpg",
#             year: "1947",
#             cycle_id: Cycle.all[1].id)
# puts "Movie-6 created"
# Movie.create(title: "Una señora estupenda",
#             runtime: "70'",
#             director: "Eugenio Martin",
#             description: "Una cantante española que ha hecho fortuna en México
#             regresa a España tras la boda de su hijo. Al llegar descubre
#             que no todo el mundo está contento con su vuelta.",
#             quote: "«Combina sin inquietud los ingredientes de un prota-
#             gonismo de Lola Flores en la época con rasgos melo-
#             sos típicamente mexicanos y el estilo de comicidad del
#             cine español coetáneo, no en vano intervienen José Luis
#             López Vázquez, José Sazatornil, Gracita Morales, Rafaela
#             Aparicio… amén de un Miguel Gila cuyas escenas se di-
#             rían autónomas. Con todo, resulta inolvidable la escena
#             en que la estrella canta Qué barbaridad, chispeante y
#             arrolladora […] La guitarra corre a cargo del marido de
#             Lola Flores, o sea Antonio González El Pescaílla, e inter-
#             vienen también un apreciable número de artistas flamen-
#             cos: Rafael Romero, Pepe Montoyita, Beni de Jerez, Paco
#             Aguilera, Juana la del Pipa…». (Carlos Aguilar y Anita Haas)",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301269/Filmoteca/Una-se%C3%B1ora-estupenda_x6ymci.jpg",
#             year: "1947",
#             cycle_id: Cycle.all[1].id)
# puts "Movie-7 created"
# # Add Filmoteca Junior movies
# Movie.create(title: "El último unicornio",
#             runtime: "92'",
#             director: "Arthur Rankin",
#             description: "Negándose a creer que sea la última de su especie, una
#             unicornia parte en busca de otros como ella, aunque le
#             suponga enfrentarse a un malvado rey obsesionado con
#             capturarla.",
#             quote: "«Vista con ojos contemporáneos, la animación es uno
#             de los puntos fuertes de El último unicornio. […] Posee
#             una gracia lírica y unos arranques de sofisticado su-
#             rrealismo que la diferencian de muchas otras produc-
#             ciones animadas. La gente de Rankin/Bass era capaz de
#             reconocer el talento, así que trabajaron con el estudio
#             Topcraft hasta que este tuvo que cerrar por dificultades
#             económicas. En ese momento, un grupo de animado-
#             res compró el estudio para empezar un nuevo proyecto,
#             manteniendo buena parte de sus empleados. Ese grupo
#             estaba compuesto por Hayao Miyazaki, Toshio Suzuki e
#             Isao Takahata; el nuevo proyecto era el Estudio Ghibli».
#             (Alex McLevy)",
#             img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/El-%C3%BAltimo-unicornio_mxtekq.jpg",
#             year: "1982",
#             cycle_id: Cycle.all[2].id)
# puts "Movie-8 created"
# Movie.create(title: "La bella y la bestia",
#               runtime: "84'",
#               director: " Gary Trousdale y Kirk Wise",
#               description: "Una joven acepta convertirse en prisionera de un
#               temible monstruo para salvar a su padre. Sin embargo, la
#               convivencia va derribando las barreras entre ambos.",
#               quote: "«Con La bella y la bestia, una película aún más tierna,
#               constante y ambiciosa que La sirenita, Disney ha logra-
#               do algo que nadie había conseguido antes: combinar
#               las últimas técnicas de animación por ordenador con lo
#               mejor de Broadway. Aquí, bajo la apariencia de una fá-
#               bula infantil se esconde el tipo de partitura ingeniosa e
#               inspiradora que ya no existe en los escenarios. La sireni-
#               ta ya era una demostración del talento para componer
#               canciones de Howard Ashman y Alan Menken, pero en
#               este caso la música es incluso más importante. Broad-
#               way tiene aquí tanto peso en la puesta en escena y la
#               construcción de personajes como en las propias can-
#               ciones». (Janet Maslin)",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/La-bella-y-la-bestia_npzo3w.jpg",
#               year: "1991",
#               cycle_id: Cycle.all[2].id)

# puts "Movie-9 created"
# #testing 2 shorts in same session
# Movie.create(title: "Borom sarret + La noire de…",
#               runtime: "20'",
#               director: "Ousmane Sembene",
#               description: "",
#               quote: "",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301245/Filmoteca/Borom-sarret_La_noire_l1yyme.jpg",
#               year: "Varios",
#               shorts: "Borom sarret, La noire de…",
#               cycle_id: Cycle.all[5].id)

# puts "Movie 10 Shorts-1 Non description 2 shorts same session created"
# #testing 2 shorts in same session different description
# Movie.create(title: "Borom sarret",
#               runtime: "10'",
#               director: "Ousmane Sembene",
#               description: "",
#               quote: "",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301245/Filmoteca/Borom-sarret_La_noire_l1yyme.jpg",
#               year: "1963",
#               shorts: "",
#               cycle_id: Cycle.all[5].id)

# puts "Movie 11 Shorts-1  Description 2 shorts same session created"

# Movie.create(title: "La noire de…",
#               runtime: "10'",
#               director: "Ousmane Sembene",
#               description: "",
#               quote: "",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301245/Filmoteca/Borom-sarret_La_noire_l1yyme.jpg",
#               year: "1966",
#               shorts: "",
#               cycle_id: Cycle.all[5].id)

# puts "Movie 12 Shorts-1 Non description 2 shorts same session created"

# Movie.create(title: "Programa 2: Aloha",
#               runtime: "10'",
#               director: "Iván Zulueta",
#               description: "",
#               quote: "",
#               img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/Aloha_fwtpki.jpg",
#               year: "1991",
#               shorts: "Cine Album Kodak 9, Piscina, Sonoro Vicky,
#               Sound Iván Jaime, Nenes Juan Blanco,
#               Boxers Max Ernst,
#               Feria navideña regalos,
#               Nenes piscina,
#               Nenes van a la playa",
#               cycle_id: Cycle.all[4].id)


puts "Movies created"

# Creating Projections
# usedSessions is where we store the sessions that have been used so that we dont repeat them.
usedSesisons = []
# movieFirstSession is where we store the movies that have one session.
movieFirstSession = []
# movieSecondSession is where we store the movies that have 2 sessions.
movieSecondSession = []
# movieThirdSession is where we store the movies that have 3 sessions.
# Stop condition is when each movie has 2 sessions.
while movieFirstSession.length < Movie.all.length || movieSecondSession.length < Movie.all.length/2
  s = Session.all.sample
  m = Movie.all.sample
  if !usedSesisons.include?(s)
    usedSesisons << s
    if movieFirstSession.include?(m)
      # (s.play_time - m.projections[0].session.play_time) is the difference in seconds between the first session and the second session.
      # 86400 is the number of seconds in a day.
      # We want to make sure that the difference between the first session and the second session is at least 6 days.
      if !movieSecondSession.include?(m) && (((s.play_time - m.projections[0].session.play_time)/86400 > 6) || ((m.projections[0].session.play_time - s.play_time)/86400 > 6))
        movieSecondSession << m
        Projection.create(session: s, movie: m)
      end
    else
      movieFirstSession << m
      Projection.create(session: s, movie: m)
    end
  end
end
puts "Projections created successfully"


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
            password: "123456",)
puts "Silviu created"

User.create(email: "alberto@gmail.com",
            password: "123456")
puts "Alberto created"

User.create(email: "laura@gmail.com",
            password: "123456")

User.create(email: "admin@gmail.com",
            password: "123456",
            admin: true)
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

# Creating reservations
