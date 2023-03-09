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
today_date = Date.today
# puts today_date
first_day_month = Date.new(today_date.year, today_date.month, 1)
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
              color: "aqua-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month + 2, 1))

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
              limbo del suspense». (Manu Yáñez)",
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
              supera a Peter Weir en su propio terreno». (Dave Kehr)",
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
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1),
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
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

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

Movie.create(title: "EL SEGUNDO PODER",
              runtime: "119 min",
              year: "1976",
              director: "José María Forqué",
              description: "El hijo de Felipe II, el príncipe Carlos, sufre un accidente
              en el Alcázar de Madrid. Las autoridades eclesiásticas
              investigan el suceso como un posible atentado.
              Adaptación de la novela El hombre de la cruz verde, de
              Segundo Serrano Poncela.",
              quote: "«La reconstrucción de época es de un gran rigor, patente en los más mínimos detalles. La omnipotencia de
              una cámara penetrante que desvela rostros, actitudes,
              ambientes, demuestra una vez más la capacidad visualizadora, la capacidad descriptiva de Forqué y sus sobresalientes condiciones para la creación de atmósferas. A
              este respecto, en esta conjunción de aciertos formales,
              hay que reconocer los singulares méritos de los directores artístico y de fotografía, Rafael Richart y Alejandro
              Ulloa». (Florentino Soria)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "EMBAJADORES EN EL INFIERNO",
              runtime: "103 min",
              year: "1956",
              director: "José María Forqué",
              description: "Cuatro soldados de la División azul son capturados
              en territorio soviético tras la expulsión de las tropas
              alemanas.",
              quote: "«En la salita de proyección del NO-DO, se reunieron para
              visionar la película José Luis Arrese, Ministro Secretario
              General del Movimiento; Muñoz Grande, Ministro del Ejército, y creo que Gabriel Arias Salgado, responsable de la
              censura. Yo me había introducido subrepticiamente en la
              sala y, cuando terminó la proyección, oí este comentario:
              'La cabronada es que la película es buena'. Entonces se
              dieron cuenta de que estaba en la sala y me echaron. Al
              poco rato salió, creo que Arrese, y me dijo que se iba a
              autorizar, pero que teníamos que añadir al principio una
              frase rimbombante en la que se decía que la actuación
              de los voluntarios había sido como una prolongación de
              la guerra de liberación española e introducir unos planos
              en los que algunos prisioneros aparecieran con las flechas
              de la Falange, lo que era un pegote inverosímil. Como ya
              había pronosticado fue un éxito tremendo. Al llegar al final se hizo un gran silencio y la sala se llenó de pañuelos
              porque la gente lloraba. […] Resolvió mi vida profesional».
              (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "LAS QUE TIENEN QUE SERVIR",
              runtime: "78 min",
              year: "1967",
              director: "José María Forqué",
              description: "Un militar estadounidense y su mujer contratan a dos
              jóvenes como empleadas del hogar. La cosa se complica
              cuando resulta que, además de sus respectivos novios,
              ambas tienen pretendientes en la base militar de Torrejón
              de Ardoz",
              quote: "«La versión cinematográfica estuvo producida y escrita
              por José Luis Dibildos que siempre tuvo olfato para detectar los temas de impacto, mediante aquella su 'tercera vía', en la que se aliaban la contundencia comercial
              y cierta dignidad artística. Forqué, cultivador de diversos
              géneros con desigual fortuna siempre sale airoso cuando se mueve en su terreno favorito, la comedia. La obra
              original, que presenta los contrastes de costumbres entre españoles y americanos se aprovecha de los tópicos
              clichés de unos y otros, pero no deja de sacarles partido
              con situaciones divertidas y diálogos ocurrentes. Unas
              'chachas' españolas, sirviendo en el chalet de un típico matrimonio americano y con unos novios al 'ibérico
              modo', pueden dar lugar a momentos bien regocijantes». (Florentino Soria)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "MARIBEL Y LA EXTRAÑA FAMILIA ",
              runtime: "101 min",
              year: "1960",
              director: "José María Forqué",
              description: "Un tímido provinciano le presenta a su madre y a su tía la
              joven con la que se va a casar, sin saber que se dedica a la
              prostitución. Adaptación de la obra de teatro de Miguel
              Mihura.",
              quote: "«Pese al humor que destila, la obra de teatro es una comedia ácida, atrevida y casi subversiva para el momento.
              Y José María Forqué –que había asistido en la terraza del
              Café Gijón a la gestación de la obra de su amigo Miguel
              Mihura junto a “Tono” y Mingote- supo respetar ese espíritu en su adaptación al cine. El director mantiene prácticamente el mismo esquema teatral y respeta unos diálogos casi idénticos a los de la comedia, reforzando con
              las posibilidades de la cámara –que le permite crear las
              secuencias de la pensión de las prostitutas- la división de
              diferentes ambientes donde se desarrollan las dos formas de vida. Ambientes que Forqué construye con exquisito cuidado». (Fernando Lara y Eduardo Rodríguez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "NO ES NADA MAMÁ, SOLO UN JUEGO ",
              runtime: "85 min",
              year: "1974",
              director: "José María Forqué",
              description: "El joven propietario de una hacienda sufre un grave
              trauma hacia las mujeres por culpa de su madre. Pronto
              se enamora de la hija de uno de sus empleados, a la que
              antes maltrataba.",
              quote: "«Es una de mis películas predilectas. Repito en ella, por
              una parte, ese juego de la utilización de un ser humano
              que se resuelve en su rebeldía final. Por otra parte, expongo la decadencia de una raza, de una familia, con ese
              vástago que sustituye unos valores por otros, el dinero
              por unas pasiones enfermizas. Hay un cúmulo de odios y
              perversiones exaltados, llevados al límite. […] Cuando estaba montando la película se me ocurrió que un símbolo
              indicativo, un tanto surrealista, hubiera sido la expresión,
              con ciertas imágenes, de que, así como las plantas más
              bellas crecen en la putrefacción, nacen del humus, la
              muchacha, que había llegado a un servilismo y degradación absolutos, resurge, liberada y distinta, de la misma
              putrefacción». (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "TENGO 17 AÑOS",
              runtime: "90 min",
              year: "1964",
              director: "José María Forqué",
              description: "Una joven, harta de sentirse incomprendida, huye de su
              casa y termina en un pequeño pueblo, donde la acoge un
              grupo de alfareros.",
              quote: "«Nos pidieron una cosa apta para menores, lo que me
              permitió, al fin, hacer una película que pudieran ver mis
              hijos. Fue para nosotros como un juego. […] Roberto Font
              no era ni bueno ni malo, era un genio, un actor imposible
              de clasificar. No creo que su trabajo fuera meditado, estructurado; lo hacía instintivamente, y como él tenía un
              poder de proyección enorme, salían unas cosas maravillosas». (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)

Movie.create(title: "YO HE VISTO A LA MUERTE",
              runtime: "101 min",
              year: "1967",
              director: "José María Forqué",
              description: "Cuatro episodios reales sobre la tauromaquia contados
              por sus protagonistas.",
              quote: "«No se planteó como una película sino como una serie
              de televisión. Quería hacer con Armiñán, que fue realmente el creador de la idea, una gran crónica sobre el
              toro, el toreo y el público, compuesta de trece o catorce
              capítulos. El proyecto no prosperó en TVE pero, como ya
              teníamos escritos cuatro capítulos, me dio pena desaprovecharlos. Creí que sería interesante mostrar el mundo de los toros desde dentro y a los toreros en zapatillas. Jaime de Armiñán conocía muy bien el tema desde
              antiguo pues su padre había sido un prestigioso crítico
              de toros. Nos interesaba reflejar, en forma de docudrama, una realidad, sin las deformaciones habituales».
              (José María Forqué)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[2].id)


Cycle.create(name: "DOUGLAS SIRK LA EMOCIÓN INMEDIATA",
              description: "“El cine es un campo de batalla“, dice Samuel
              Fuller, que una vez escribió un guion para
              Douglas Sirk, en una película de Jean-Luc
              Godard, el cual poco antes de rodar Al final
              de la escapada (1960), escribió un homenaje
              a la película Tiempo de amar, tiempo de morir
              (1958), de Douglas Sirk.
              Da igual quién sea, Godard o Fuller, cualquier otro
              o yo, nadie le llega a la suela del zapato. Sirk dijo
              que el cine es sangre, lágrimas, violencia, odio,
              muerte y amor. Y Sirk hizo películas, películas
              con sangre, con lágrimas, con violencia, con
              odio, películas con muerte y películas con amor.
              Sirk dijo que las películas no pueden hacerse
              sobre algo, que sólo pueden hacerse con algo,
              con personas, con luz, con flores, con espejos,
              con sangre, con todas esas cosas locas que
              valen la pena. Además dijo que la iluminación y el enfoque son la filosofía del director. Y Douglas
              Sirk hizo las películas más tiernas que conozco,
              películas de alguien que ama a las personas y
              no las desprecia como nosotros. Una vez, Darryl
              F. Zanuck le dijo: “La película tiene que gustar,
              sea en Kansas City o en Singapur”. Vaya locura,
              América, ¿no?",
              quote: "Ciclo 4",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "green-cycle",
              start_date: Date.new(today_date.year, 1, 1),
              end_date: Date.new(today_date.year, today_date.month + 2, 1))

Movie.create(title: "¿ALGUIEN HA VISTO A MI CHICA?",
              runtime: "88 min",
              year: "1952",
              director: "Douglas Sirk",
              description: "Un anciano millonario sin herederos decide legar toda su
              fortuna a la familia de su primera novia. Para asegurarse
              de que no está cometiendo un error, finge ser pobre y
              alquila una habitación en su casa.",
              quote: "«Había surgido en la Universal una especie de producción de serie B en contra de la tendencia de la época,
              según yo pensaba, y el tiempo me dio la razón. Ello era en
              parte debido a la falta de estrellas bajo contrato del estudio. Lo único que se podía hacer en estas circunstancias
              era fabricar una estrella, porque el conseguir más dinero
              dependía de tener un nombre en la película. Así que busqué por allá y vi una película en la que actuaba Rock Hudson, con Jeff Chandler de protagonista (Iron Man, Joseph
              Pevney, 1951). Tenía un papel pequeño y era muy inferior
              a Chandler, pero creí ver algo en él. Preparé una reunión
              y, a primera vista, no parecía ser gran cosa, salvo muy
              guapo. Pero la cámara ve con su propio ojo. Ve cosas que
              el ojo humano no detecta. Y al fin aprendes a confiar en
              tu cámara». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "ATILA, REY DE LOS HUNOS",
              runtime: "92 min",
              year: "1954",
              director: "Douglas Sirk",
              description: "Atila, el huno, aúna a los pueblos bárbaros ante el divido
              Imperio Romano.",
              quote: "«Yo necesitaba a alguien para interpretar el papel de Atila y la película corría prisa. La firme actitud de Chandler
              era que él tenía que ser el chico bueno, un galán de la
              pantalla, y que sería malo para su carrera interpretar lo
              que él llamaba “un villano”. Creo que a él le gustaba la
              idea de andar por ahí con toga y todo eso. Mi postura
              era que lo único interesante de la historia era la furia de
              Atila… este hombre que da vueltas en torno a sí mismo y a
              su objetivo imposible, la captura de la ciudadela de la religión, Roma, a la que cerca como un animal. Atila es uno
              de esos personajes que dan vueltas en torno a sí mismos
              que tanto me gustan. Encaja en mi galería, solo que es
              una variante violenta de este personaje habitualmente
              tranquilo, a lo Hamlet. Le dije honradamente a Chandler
              que en mi película el centro de atención sería Atila. Pero
              no quería saber nada de ello. […] Había por allá un actor
              menos conocido, Jack Palance. Era famoso, pero no un
              protagonista. […] Le dije a Chandler: “Piénsalo, porque el
              personaje del huno va a dominar la película”. Pero él solo
              decía “Nunca me ha oscurecido un villano”. Y, como sabes, la película es de Palance». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "DOUGLAS SIRK - HOPE AS IN DESPAIR",
              runtime: "75 min",
              year: "2022",
              director: "Roman Hüben",
              description: "Documental de investigación que recorre la vida de
              Douglas Sirk a través de testimonios de aquellos que
              le conocieron y de las páginas del diario de su segunda
              mujer",
              quote: "Antes de la proyección tendrá lugar una mesa redonda
              con Roberto Turigliatto, cocomisario del ciclo; Paula
              Arantzazu Ruiz, crítica de cine; y el director, Roman
              Hüben. Tras la mesa redonda habrá un pequeño descanso de diez minutos y acto seguido se proyectará la
              película. Duración aproximada de la mesa redonda: 60’
              (Total sesión: 140’).",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "ESCÁNDALO EN PARÍS",
              runtime: "100 min",
              year: "1946",
              director: "Douglas Sirk",
              description: "Nacido en la cárcel, un ladrón profesional del siglo XVIII
              se convierte hacia el final de su vida en el jefe de la policía
              parisina.",
              quote: "«En esta película traté de ir más allá del realismo en la
              forma de presentar la historia. Resultaba casi surrealista. A la manera de los surrealistas americanos, no de los
              franceses. La película no tuvo mucho éxito. Esto se debió
              presuntamente a que yo adopté una actitud que hacía
              surgir la ironía y esto no funcionaba nada bien con el público americano. […] Pero, por supuesto, sólo mostraba
              una pequeña parte de la vida de Vidocq en la película. Se
              podría haber hecho toda una serie de películas a partir
              de su vida, lo mismo que con Cagliostro. Pero la parte
              que utilicé es el periodo más interesante, el que se presta
              mejor a la ironía; hay mucha en su oscilación entre policía y ladrón. Y esto proporciona al personaje de Sanders
              mejor margen para actuar». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "LA PRIMERA LEGIÓN",
              runtime: "86 min",
              year: "1951",
              director: "Douglas Sirk",
              description: "Un jesuita se prepara para abandonar el seminario
              cuando una serie de milagros hacen que se replantee su
              decisión.",
              quote: "«Lo que intenté fue llevarla decididamente hacia la comedia. Hay un milagro que no es un milagro, pero a causa
              del cual le suceden un montón de cosas a ese pequeño
              monasterio, y entonces Dios dice: “Ahora les mandaré un
              milagro de verdad”. Es como si Dios se presentara y dijese: “Parece que ha habido por aquí un falso milagro, cosa
              a que nadie puede hacerle muy feliz, pero por Dios que
              habrá uno de verdad. Ahora veréis”, y empieza a arremangarse». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "ORGULLO DE RAZA",
              runtime: "92 min",
              year: "1955",
              director: "Douglas Sirk",
              description: "En el siglo XIX, un hombre se une al capitán Thunderbolt
              para luchar por la independencia de Irlanda.",
              quote: "«El turbulento drama histórico de Douglas Sirk, ambientado en
              la Irlanda de 1815, es un wéstern disfrazado. A pesar del colorido
              de la aventura romántica, Sirk está menos interesado en la lucha
              de espadachines que en la estrategia: observa el alzamiento de
              forma analítica, señalando las amargas ironías de los astutos comandantes, obligados a contener a los audaces guerreros por el
              bien de la lucha a largo plazo. Describe a los colaboradores locales de las autoridades británicas, evoca la paranoica circunspección de los muy organizados luchadores por la libertad, que
              temen la infiltración y la delación, y evoca las amenazas de cárcel
              y tortura utilizadas para doblegar la voluntad de los conspiradores detenidos. Sirk —un emigrante alemán— ofrece también una
              visión velada de la resistencia a la ocupación nazi en la Europa de
              la Segunda Guerra Mundial». (Richard Brody)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "PACTO TENEBROSO",
              runtime: "97 min",
              year: "1948",
              director: "Douglas Sirk",
              description: "Una mujer se despierta en un tren en marcha, incapaz de
              recordar cómo ha llegado allí.",
              quote: "«Incluso con el problema de casting que es Claudette
              Colbert, la película es, como decía James Harvey en “Film
              Comment”, una maravilla. Además, todo el metraje está
              surcado por un tema muy propio de los años 40 y que
              Sirk amplificó, el de una mujer que descubre su propia
              identidad bajo todas las mentiras que ha estado aceptando durante años. “Eso no es propio de mi chica”, le
              dice el antagonista a su cómplice, a lo que esta responde: “Tu chica es muchas chicas”. Las damas perversas
              siempre saben mucho de la vida; son las bondadosas las
              que tienen que romper con la hipnosis». (Farran Smith
              Nehme)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "RAZA DE VIOLENCIA",
              runtime: "79 min",
              year: "1954",
              director: "Douglas Sirk",
              description: "Tras la muerte de un jefe apache, la tribu debe elegir
              entre sus dos hijos un nuevo líder que sepa cómo lidiar
              con la amenaza del hombre blanco: uno es un pacifista,
              el otro aboga por la lucha.",
              quote: "«Quería hacer un wéstern. Y Rock Hudson quería volver a trabajar conmigo, así que hicimos esta película en
              la que interpretaba a un indio. Al estudio no le gustaba
              que interpretase de nuevo a un indio porque acababa de
              hacerlo y pensaban que podía estropear su imagen. […]
              Me interesaban mucho los indios y traté de incluir mucho sobre sus costumbres en la película. Se rodó por
              entero en Utah, en su mayor parte cerca de Moab, y un
              poco más arriba, en la parte del río Colorado. Se rodó
              completamente en exteriores y de forma improvisada.
              Hay algunos decorados, pero fueron construidos todos
              allí, en el lugar, y también por los indios. Y los indios eran
              auténticos, no habían sido viciados por Ford. Había una
              gran batalla en la película, en la que empezaron a pelear
              de verdad como demonios. Ninguno de ellos hablaba inglés y teníamos un par de intérpretes para las dos tribus
              apaches, ninguna de las cuales hablaba tampoco la otra
              lengua. La batalla fue una de las cosas más apasionantes
              que he hecho nunca». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "SLIGHTLY FRENCH",
              runtime: "81 min",
              year: "1949",
              director: "Douglas Sirk",
              description: "Tras despedir a una estrella de cine francesa, un
              director de Hollywood contrata a una joven cantante
              estadounidense para sustituirla.",
              quote: "«Slightly French es como un juego de espejos en el que lo
              que es real y lo que es artificio se vuelven indistinguibles,
              hasta el punto de ser inseparables. […] Es como si la trama
              de Slightly French se moviera en una dirección, mientras
              que Sirk la guía escépticamente en otra, completamente
              en desacuerdo con el espíritu de la comedia romántica
              de Hollywood. El enfoque estratégicamente subversivo
              del cineasta no solo es evidente en la forma en que la
              película rechaza favorecer la empatía con los protagonistas, sino también en la representación intransigente
              del Hollywood que iba a ser el lugar de trabajo de Sirk
              durante una década más. Además, e igual de importante,
              está la forma en que el habitual diseño de iluminación del
              género, que evita cualquier presencia de la oscuridad,
              es ignorado en favor de una fotografía altamente contrastada y escenarios cargados de sombras que resultan
              más desconcertantes que tranquilizadores». (Tom Ryan)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "TEMPESTAD EN LA CUMBRE",
              runtime: "84 min",
              year: "1951",
              director: "Douglas Sirk",
              description: "Convencida de que una mujer acusada de asesinato es
              inocente, una monja trata de encontrar al culpable",
              quote: "«La Universal me ofreció un contrato. [...] Me dijeron: “Tenemos que firmar un contrato de siete años”. Yo dije: “De
              acuerdo, firmaré, a condición de que me garanticéis una
              película de serie A”, y esta iba a ser Tempestad en la cumbre. […] Las condiciones no eran perfectas, pero cuando
              me quejaba de una historia me decían: “Si consigues una
              estrella, magnífico; puedes tener más dinero y elegir una
              historia mejor”. Pero al menos se me permitía trabajar sobre el material, por lo que reestructuré en cierta medida
              algunos de los casi imposibles guiones de las películas
              que tuve que dirigir. Por supuesto, tenía que seguir las
              reglas, evitar experimentos, atenerme a los gustos familiares, poner “finales felices” y todo eso». (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Movie.create(title: "THE LADY PAYS OFF",
              runtime: "80 min",
              year: "1951",
              director: "Douglas Sirk",
              description: "Como premio por ser elegida profesora del año por la
              revista “Time”, una joven realiza un viaje a Las Vegas,
              donde termina perdiendo todo su dinero. Para pagar su
              deuda, acepta cuidar de la hija del mánager del casino.",
              quote: "«Los roles de género son el elemento principal de esta
              inquietante comedia romántica sobre una maestra de
              escuela que quiere ser percibida como una mujer en lugar de simplemente como una persona cuyas habilidades han acabado por definir como “una segunda madre”.
              […] Como es habitual en muchas de las películas de Sirk
              con protagonistas femeninos, su identidad está significativamente conectada con las circunstancias sociales
              que define qué es ser una mujer. Es una profesional respetada, pero sus habilidades se consideran inseparables
              de las necesidades del hogar. Se la alaba porque es la
              madre que tienen los niños cuando sus verdaderas madres no están cerca». (Tom Ryan)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[3].id)

Cycle.create(name: "HOMENAJE A EUGENIO MARTÍN",
              description: "El pasado enero recibimos con tristeza
              la noticia del fallecimiento de Eugenio
              Martín, nombre clave del cine de género
              en España. A modo de recuerdo, este
              mes recuperamos cuatro de sus trabajos,
              incluyendo dos títulos de culto como
              Pánico en el Transiberiano (1972) y Una
              vela para el diablo (1973). Tras debutar en
              el largometraje en 1957 con Despedida de
              soltero, que se saldó con un importante
              fracaso, Martín participó en numerosas coproducciones internacionales como
              ayudante de dirección, colaborando con
              directores como Terence Young o Nicholas
              Ray, hasta que en 1961 pudo regresar a la
              dirección con Los corsarios del Caribe. A
              partir de ese momento, Martín se convertiría
              en uno de los artesanos más polifacéticos
              de la industria española, firmando wésterns
              con Lee Van Cleef, relatos de terror con
              Christopher Lee, comedias con Lola Flores
              o dramas con Marisol.",
              quote: "Ciclo 5",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "yellow-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "EL PRECIO DE UN HOMBRE ",
              runtime: "95 min",
              year: "1966",
              director: "Eugenio Martín",
              description: "Perseguido por un cazarrecompensas, un forajido
              mexicano se refugia en su pueblo natal. Los vecinos de
              la localidad colaboran en su encubrimiento hasta que se
              dan cuenta de lo mucho que ha cambiado.",
              quote: "«En El precio de un hombre predomina la tradición americana. Por lo menos, eso fue lo que intenté yo. Porque
              una cosa es que el wéstern tenga dureza, que eso lo tenían todos los americanos, porque América es un pueblo
              duro, y otra cosa es que tenga cinismo, que eso lo introdujo Italia, que es un pueblo cínico». (Eugenio Martín)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[4].id)

Movie.create(title: "HIPNOSIS",
              runtime: "92 min",
              year: "1962",
              director: "Eugenio Martín",
              description: "Cuando un hipnotista aparece asesinado en su camerino,
              un boxeador y un chico de los recados se convierten en
              los sospechosos principales. ",
              quote: "«Remite a Fritz Lang, en las imágenes, y a Alfred Hitchcock, en la trama, así como, por supuesto, al más célebre episodio de Al morir la noche […] La belleza estética
              y los aciertos plásticos, con un magnífico uso expresivo
              de la fotografía en blanco y negro, redondean un gratísimo tono particular, a la vez típico y atípico, que basta y sobra para reivindicar, una vez más y por si todavía
              hiciera falta, el magnífico cine de género en coproducción propuesto por Europa durante los años 50/60».
              (Carlos Aguilar y Anita Haas)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[4].id)

Movie.create(title: "PÁNICO EN EL TRANSIBERIANO",
              runtime: "88 min",
              year: "1972",
              director: "Eugenio Martín",
              description: "Un antropólogo inglés descubre en Manchuria una
              criatura prehistórica congelada que decide llevar a
              Inglaterra a bordo del Transiberiano. El despertar del fósil
              convierte el viaje un auténtico pasaje del terror.",
              quote: "«[El terror] puede ser burdo, como en el caso del gore,
              que me parece detestable y encima aburrido, pero también puede ser apasionante cuando introduces elementos no cartesianos en situaciones realistas. Este tipo de
              cine fantástico recoge todos los mundos posibles que la
              mente humana puede poner en pie, y puede hacerlo con
              la suficiente coherencia para que lleguen a impresionarnos y a emocionarnos». (Eugenio Martín)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[4].id)

Movie.create(title: "UNA VELA PARA EL DIABLO",
              runtime: "83 min",
              year: "1973",
              director: "Eugenio Martín",
              description: "Dos hermanas que regentan un pequeño hotel rural se
              dedican a matar a todos los huéspedes que no cumplen
              con sus estándares morales y religiosos.",
              quote: "«Concebí Una vela para el diablo no como una película de
              terror, sino como un drama de cierta ambición, que denunciara el fanatismo y sus secuelas. Porque todo fanático es un asesino en potencia, que asesina con tranquilidad debido a que su conciencia está libre, está limpia. […]
              Los españoles podemos ofrecer aspectos terroríficos,
              pero no en las brumas del atardecer, como los ingleses
              y alemanes, sino en las plazas abiertas, cuando nuestro
              fanatismo religioso ha torturado y quemado a sus víctimas, o cuando el fanatismo político las ha humillado y
              fusilado. ¿Cuántas historias de horror, de auténtico horror, permanecen ocultas en el marco de nuestra guerra
              civil? No hay que enfocarlas sólo como historias dramáticas estrictas, con ellas se pueden entrar también en el
              mundo de la fantasía negra irracional». (Eugenio Martín)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[4].id)

Cycle.create(name: "LOS MIL Y UN EMBRUJOS DE LOLA FLORES",
              description: "",
              quote: "Ciclo 5",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "brown-cycle",
              start_date: Date.new(today_date.year, 1, 1),
              end_date: Date.new(today_date.year, 12, 1))

Movie.create(title: "EL BALCÓN DE LA LUNA",
              runtime: "99 min",
              year: "1962",
              director: "Luis Saslavsky",
              description: "Los romances, aventuras y desventuras de tres artistas
              que trabajan en un local de variedades.",
              quote: "«Una de las películas en las que más creadores queer
              participaron de todo el franquismo, un ejemplo paradigmático para evidenciar la existencia de colaboraciones creativas queer en el cine de la dictadura. […] Todos ellos compartían su predilección por la expresión
              creativa a través de la feminidad. En las narrativas de
              sus creaciones, los hombres ocupan mayoritariamente la posición de objetos de deseo […] Frente a la tradición patriarcal, aquí las mujeres son protagonistas y
              obtienen el poder, y los hombres son intercambiables».
              (Santiago Lomas Martínez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[5].id)


Cycle.create(name: "FLORES EN LA SOMBRA",
              description: "",
              quote: "Ciclo 6",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "black text-white",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "CORTOMETRAJES DE ADELA MEDRANO",
              runtime: "120 min",
              year: "",
              director: "",
              description: "Esta sesión acoge dos cortometrajes de la periodista y
              cineasta Adela Medrano, recientemente recuperados
              gracias al trabajo de investigación llevado a cabo por las
              investigadoras María del Pilar García Herrador y Amaia
              Zufiaur Ruiz de Eguino. Se trata de dos piezas de cine
              industrial en torno a la Euskadiko Kutxa (Las calidades de
              la vida) y el Concurso Internacional de Esculturas para la
              Autopista del Mediterráneo (Esculturas para un paisaje).",
              shorts: "Las calidades de la vida (Adela Medrano, 1974). España.
              DCP. Color. 28’
              • Esculturas para un paisaje (Adela Medrano, 1975).
              España. DCP. Color. 25’",
              quote: "",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[6].id)


Cycle.create(name: "FILMOTECA JUNIOR",
              description: "",
              quote: "Ciclo 7",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              color: "blue-cycle text-pink-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "CORTOMETRAJES DE FLEISCHER STUDIOS",
              runtime: "120 min",
              year: "1921-1941",
              director: "Dave Fleischer",
              description: "Los animadores Max y Dave Fleischer fundaron el estudio
              Out of the Inkwell en 1921. Empezando en un sótano de
              Nueva York, el estudio fue creciendo hasta convertirse
              en una fuerza pionera de la animación, alcanzando fama
              mundial gracias a sus trabajos con personajes como
              Betty Boop, Popeye, KoKo y Superman. En 1929 el estudio
              cambió su nombre a Fleischer Studios",
              shorts: "Out of the Inkwell: Modeling (Dave Fleischer, 1921).
              EEUU. B-R. B/N. 7’
              • Advertisement Films: In My Merry Oldsmobile (Dave
              Fleischer, 1931). EEUU. B-R. VOSE*. B/N. 6’
              • Betty Boop: Is My Palm Read (Dave Fleischer, 1933).
              EEUU. B-R. VOSE*. B/N. 7’
              • A Color Classic: The Little Dutch Mill (Dave Fleischer,
              1934). EEUU. B-R. VOSE*. Color. 9’
              • Popeye: The Paneless Window Washer (Dave Fleischer,
              1937). EEUU. B-R. VOSE*. B/N. 6’
              • Betty Boop: Ding Dong Doggie (Dave Fleischer, 1937).
              EEUU. B-R. VOSE*. B/N. 7’
              • Gabby: Two for the Zoo (Dave Fleischer, 1941). EEUU.
              B-R. VOSE*. Color. 7’
              • Gabby: Swing Cleaning (Dave Fleischer, 1941). EEUU.
              B-R. VOSE*. Color. 7’",
              quote: "",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[7].id)

Movie.create(title: "LA VACA Y EL PRISIONERO",
              runtime: "119 min",
              year: "1959",
              director: "Henri Verneuil",
              description: "Durante la Segunda Guerra Mundial, un prisionero de
              guerra francés huye de Alemania acompañado de una
              vaca, que utiliza para hacerse pasar por ganadero.",
              quote: "«Desde La table aux crevés, el director Henri Verneuil y el
              actor Fernandel habían colaborado juntos en varias producciones. Esta fue quizás la guinda del pastel, ya que,
              aunque no era el mejor papel de Fernandel en la pantalla, estaba muy en consonancia con los estándares de la
              época por su tema ligeramente francés. Además, saber
              que un artista como Fernandel compartía el papel principal con una vaca, Marguerite, no dejaba de despertar
              la curiosidad de los espectadores, que se reían a carcajadas... ¿y por qué no? Es cierto que asistimos más a
              una comedia de situación en la que destaca Fernandel
              que a una comedia filosófica, porque si nos deleitamos
              siguiendo este 'paseo' no es ciertamente gracias a los
              diálogos, que de hecho son muy pobres. Esta obra pertenece a una época en la que íbamos al cine a ver actuar
              a un actor y, desde este punto de vista, no nos decepciona. La prueba: la receta sigue funcionando y todavía nos
              complace degustar esta producción de Henri Verneuil».
              (Gérard Rocher)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[7].id)

Movie.create(title: "THE WHITE SNAKE ENCHANTRESS ",
              runtime: "79 min",
              year: "1958",
              director: "Taiji Yabushita",
              description: "Adaptación de un cuento tradicional chino que sigue
              las aventuras de un joven enamorado de un espíritu. El
              primer largometraje de animación japonés en color y
              uno de los primeros en estrenarse fuera de las fronteras
              niponas, fue una importante proeza técnica y artística
              para la casa Toei, probablemente el estudio de animación
              más importante de la historia de Japón.",
              quote: "",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[7].id)


Cycle.create(name: "OTRAS SESIONES",
              color: "blue-cycle",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "CHANTAJE EN BROADWAY",
              runtime: "96 min",
              year: "1957",
              director: "Alexander Mackendrick",
              description: "Un ambicioso agente de prensa, dispuesto a lo que sea
              para ascender en el mundo de la prensa, acepta participar
              en los oscuros tejemanejes de un poderoso columnista.",
              quote: "«El público de 1957 no iba a ver una película de Tony Curtis o Burt Lancaster para descubrir a personajes
               empapados en un desprecio que también contaminaba venerables lugares comunes de la vida estadounidense, del
              amor fraternal a la ambición perseverante, por no hablar
              de los columnistas de periódico, las chicas que venden
              cigarrillos, los senadores, la policía y todo aquello que
              brilla e ilumina el Gran Camino Blanco. Por eso no fueron
              a ver Chantaje en Broadway. Aquel era el año de Vidas
              borrascosas y Sayonara: grandes y coloridas producciones con héroes y valores esópicos. Lo que ellos se perdieron, nosotros lo ganamos. Chantaje en Broadway es
              un absoluto clásico». (Gary Giddins)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[8].id)

Movie.create(title: "CRÍA CUERVOS",
              runtime: "105 min",
              year: "1976",
              director: "Carlos Saura",
              description: "Retrato de una familia española de clase alta en 1975,
              vista a través de los ojos de una niña de 8 años.",
              quote: "«La mirada de Ana nos va descubriendo, gracias además
              a una sugerente y hábil estructura en flashbacks alternos
              (que saltan de 1995 a 1975 en sucesivas ocasiones), distintos momentos de su historia familiar. Un microcosmos
              donde dominan la mentira y la hipocresía, tanto moral
              como amorosa, de unos personajes frustrados e infelices, incapaces de escapar a un contexto que los mantiene atrapados. Un padre militar autoritario y conservador
              y una madre frágil atrapada en un matrimonio sin amor
              que además le impide desarrollar su carrera como pianista dibujan un universo descompuesto, corrompido y
              angustioso que funciona como perfecta metonimia no
              solo de buena parte de los valores y principios de la sociedad española de entonces, sino también de lo que el
              régimen franquista representaba». (Jara Yáñez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[8].id)

Movie.create(title: "MUJERES ENAMORADAS",
              runtime: "131 min",
              year: "1969",
              director: "Ken Russell",
              description: "Adaptación de la novela homónima de D.H. Lawrence que
              relata las relaciones entre dos hermanas y dos amigos,
              los cuatro marcados por un intenso deseo. ",
              quote: "«Russell presenta esta fascinante historia como una procesión de personajes ingeniosos, absurdos y vanguardistas que se enfrentan a grandes preguntas y aún más
              grandes pasiones […] Si la historia del cine se escribe en
              parte a través de hitos en los que lo previamente imposible de representar se torna visible, Mujeres enamoradas
              es uno de esos hitos. Se trata de la primera aparición, en
              una película de gran presupuesto y sin ningún tipo de recato, de los genitales masculinos, en una escena de amor
              gay velada que apareció solo dos años después de que
              Reino Unido legalizase la sodomía entre hombres mayores de 21 años». (Linda Ruth Williams)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[8].id)

Movie.create(title: "PASIÓN",
              runtime: "88 min",
              year: "1982",
              director: "Jean-Luc Godard",
              description: "Un director de cine que está rodando una película en la
              que reconstruye cuadros célebres conoce a una joven
              que acaba de quedarse sin empleo y ambos se enamoran.",
              quote: "«La constante recreación de pinturas famosas –con un
              detallismo tan extremo como irreverente- expone cómo
              el mundo del arte ha reducido el impacto del artista como
              trabajador. Con demasiada frecuencia consideramos la
              obra de arte como un objeto surgido de la inspiración divina, minusvalorando el esfuerzo del artista y anulando
              cualquier posible compromiso con ella. Como si dijera
              que, en el mundo contemporáneo, cualquier arte que aspire al realismo puede ser incluso más artificial que un
              sonido mal sincronizado, Godard deja al descubierto las
              mentiras que nos contamos, poco a poco, sobre la forma
              en que funciona el mundo del arte». (Justine Peres Smith)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[8].id)

Movie.create(title: "«SALA:B» Y EL SAINETE FALLERO",
              runtime: "210 min",
              year: "",
              director: "",
              description: "",
              quote: "«Programa doble fallero con las películas que Vicente
              Escrivá y Antonio Fos dedicaron al sainete valenciano de
              Baldoví, una de las raíces del humor y el costumbrismo
              español.
              Desde nuestra primera sesión, reflexionar sobre los cimientos del cine popular español ha sido una de las misiones de «Sala:B». Este programa doble presenta El virgo
              de Visanteta con la intención de situar en ese contexto la
              obra de Josep Bernat i Baldoví, escritor de mediados del
              XIX que combinó la sátira, las costumbres religiosas y el
              erotismo con un controvertido uso del lenguaje valenciano, a favor del pueblo y en contra de dogmas oficialistas.
              La trama combina dos historias de carácter sexual, la de Visanteta (Maria Rosario Omaggio, La lozana andaluza),
              cuya virginidad parece protegida por poderes divinos, y
              la del Tío Collons (Antonio Ferrandis), aficionado a la sodomía para disgusto de su esposa. La película de Escrivá y su guionista Antonio Fos mantuvo el tono y el verso
              valenciano, pero se vio entonces como una alternativa
              menos transgresora que la de Carles Mira y La portentosa vida del Padre Vicente, del mismo año 1978. Si bien
              la película resulta más moralizante que la obra teatral, se
              trata de un rasgo tan típico del sainete clásico como del
              cine del destape, y lo que trasciende del film hoy en día
              es el descaro esperpéntico y las situaciones católico-surrealistas, que prefiguran particularmente nuestra serie
              B. Mención aparte merece el reparto, con una selección
              de actrices y actores de carácter como Josele Román,
              Pepe Sancho, Luis Barbero o Joan Monleón y artistas de
              varietés autóctonas como Queta Claver o Rosita Amores.
              El éxito comercial, sobre todo en el Levante, motivó a Escrivá y Fos a continuar la saga inmediatamente con Visanteta, esta-te queta, con el mismo reparto y basada
              en los personajes de Baldoví, pero ahora con una trama
              original. Un concurso de pedos es aquí la escena más
              memorable, demostrando una vez más que escatología
              y comedia van unidas a nuestra tradición. Este díptico
              “erótico-vernáculo”, en palabras del investigador Pablo Adiego, son de los últimos trabajos de Antonio Fos,
              “un prolífico guionista, plenamente integrado en la industria de productos con tirón popular y con extrañas
              y apasionantes obras como Volveré a nacer, El transexual, La semana del asesino o Una vela para el diablo.”».
              (Álex Mendíbil)",
              shorts: "El virgo de Visanteta (Vicente Escrivá, 1979). Int.: Maria
              Rosaria Omaggio, Antonio Ferrandis, José Sancho, Josele
              Román. España. 35 mm. VOSE*. Color. 95’
              • Visanteta, esta-te queta (Vicente Escrivá, 1979). Int.:
              Maria Rosaria Omaggio, José Sancho, Josele Román,
              Josep Maria Angelat. España. 35 mm. VOSE*. Color. 91’
              ",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[8].id)

Movie.create(title: "YO CONFIESO",
              runtime: "95 min",
              year: "1953",
              director: "Alfred Hitchcock",
              description: "Convertido en sospechoso de asesinato, un sacerdote
              se debate entre romper el secreto de confesión o ser
              acusado de un crimen que no ha cometido.",
              quote: "«El tema del film es la transferencia de la culpabilidad,
              pero renovado aquí por la religión y por una idea absoluta
              de la confesión. A partir del instante en que Montgomery
              Clift recibe en confesión la declaración del crimen cometido por Otto Hasse es el sacerdote quien se convierte
              realmente en culpable y así es como lo entiende el asesino». (François Truffaut)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301244/Filmoteca/April-April_rrjzli.jpg",
              cycle_id: Cycle.all[8].id)



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
movies = Movie.all
while movieFirstSession.length < Movie.all.length
  s = Session.all.sample
  m = Movie.all.sample
  if !usedSesisons.include?(s)
    if movieFirstSession.include?(m)
      # (s.play_time - m.projections[0].session.play_time) is the difference in seconds between the first session and the second session.
      # 86400 is the number of seconds in a day.
      # We want to make sure that the difference between the first session and the second session is at least 6 days.
      if !movieSecondSession.include?(m) && (((s.play_time - m.projections[0].session.play_time)/86400 > 6) || ((m.projections[0].session.play_time - s.play_time)/86400 > 6))
        movieSecondSession << m
        usedSesisons << s
        Projection.create(session: s, movie: m)
      end
    else
      movieFirstSession << m
      usedSesisons << s
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
