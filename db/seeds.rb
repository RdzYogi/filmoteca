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
      Seat.create(row: row, column: column, hall_id: Hall.all[0].id, available: true)
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

Cycle.create(name: "JERZY SKOLIMOWSKI IDENTIDADES M??LTIPLES",
              description: "Jerzy Skolimowski jam??s se ha dejado engullir
              completamente por el cine. M??s bien es ??l
              quien se apodera de la c??mara utiliz??ndola
              cu??ndo, c??mo y d??nde quiere. ??Un debut en
              el largometraje compuesto de cortometrajes
              rodados en la Escuela de Cine de ????d??? ??Por
              qu?? no? As?? naci?? la pel??cula Identification
              Marks: None (1964), crucial para el cine polaco.
              Su primera pel??cula extranjera, La partida,
              galardonada en 1967 con el Oso de Oro en
              Berl??n, fue protagonizada por Jean-Pierre
              L??aud, el joven m??s famoso de la Nouvelle
              Vague. Durante la emigraci??n forzosa a Londres
              naci?? Deep end (1970), probablemente la mejor,
              y siempre poco conocida, pel??cula de toda su
              carrera: un relato agridulce sobre la iniciaci??n
              sexual que, de una manera magistral, atrapaba
              el ambiente de finales de los a??os 60. Por
              entonces le comparaban con los mejores del
              cine europeo, con Jean-Luc Godard y Fran??ois
              Truffaut a la cabeza.",
              quote: "Ciclo 1",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Ferdydurke_rxyrin.jpg",
              color: "aqua-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month + 2, 1))

Movie.create(title: "11 MINUTES",
             runtime: "81 min",
              year: "2015",
              director: "Jerzy Skolimowski",
              description: "El impacto de un suceso extraordinario, la aparici??n de
              un extra??o objeto en el cielo, visto a trav??s de la vida de
              diferentes habitantes de Varsovia.",
              quote: "??En su poco ortodoxa respuesta al cine de acci??n de Hollywood, Jerzy Skolimowski ha hecho una pel??cula que es
              m??s de lo que parece (o quiz?? es exactamente eso). En
              t??rminos narrativos, tenemos la lucha (inconsciente) por
              la supervivencia de un grupo de gente que se enfrenta a
              su destino entre las 17:00 y las 17:11 de un d??a cualquiera. Lo extraordinario aqu?? es que, dentro de la concisa
              geometr??a del guion, Skolimowski se libera de la carga
              psicol??gica del cine. Hay alg??n que otro rasgo psicol??gico aqu?? y all?? (los celos de un esposo, una ruptura sentimental), pero la mayor??a de las historias entrelazadas se
              desarrollan sin exponer de forma clara las motivaciones
              de los personajes, que permanecen suspendidos en el
              limbo del suspense??. (Manu Y????ez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/11-Minutes_k58bkg.jpg",
              cycle_id: Cycle.order(:id)[0].id)

Movie.create(title: "DEEP END",
              runtime: "92 min",
              year: "1970",
              director: "Jerzy Skolimowski",
              description: "Un adolescente que trabaja en una casa de ba??os se
              obsesiona, de forma progresivamente m??s enfermiza,
              con una de sus compa??eras de trabajo.",
              quote: "??Parece que no hay l??mite para el n??mero de comedias
              que explotan el oscuro periodo de la adolescencia en
              busca del humor de la verg??enza, la ansiedad y el eterno
              drama inherente a la b??squeda de lo que uno quiere, en
              este caso, acostarse con una chica guapa. Incluso se podr??a decir que estas historias se escriben solas. Cuando
              el polaco Jerzy Skolimowski rod?? Deep End, el ??xito de
              taquilla de El graduado estaba todav??a en la mente de
              todos, pero el segundo largometraje en ingl??s de Skolimowski no pod??a estar m??s alejado en tono, estilo o incluso en lo que el protagonista de 15 a??os parece querer,
              en comparaci??n con las aventuras amorosas de Benjamin Braddock. Precediendo a Verano del 42, de Robert
              Mulligan, y a Taxi Driver, de Martin Scorsese, en uno y
              seis a??os, respectivamente, la alucinante, disonante pero
              convincente historia de confusi??n hormonal de Skolimowski parece anticiparse a ambas??. (Jaime N. Christley)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/Deep-end_vmk6ko.jpg",
              cycle_id: Cycle.order(:id)[0].id)

Movie.create(title: "EL CUCHILLO EN EL AGUA",
              runtime: "94 min",
              year: "1962",
              director: "Roman Polanski",
              description: "Un matrimonio en crisis recoge a un autoestopista y le
              invitan a pasar el d??a con ellos en su yate. Seg??n pasan
              las horas, la tensi??n entre el marido y el autoestopista
              va creciendo. El primer largometraje de Roman Polanski,
              que cont?? con la colaboraci??n de Jerzy Skolimowski en
              el guion.",
              quote: "??Polanski y sus coguionistas Jerzy Skolimowski y Kuba
              Goldberg trabajaron en el guion durante tres semanas
              antes de presentar un borrador al Ministerio de Cultura. Skolimowski, otro graduado de la Escuela de Cine de
              Lodz, anim?? a Polanski a reducir el periodo de la historia a una extensi??n ajustada de 24 horas, lo que ayud?? a
              exagerar la intensidad de las emociones y a aumentar las
              tensiones de una escena a otra. Esta historia contada a lo
              largo de varios d??as podr??a haber resultado melodram??tica, pero al limitar el tiempo que los personajes pasan
              juntos, se convierte en un relato que se embellece con un
              prop??sito tan espec??fico como digno de la deliberaci??n
              del p??blico. Polanski declar?? m??s tarde a ???The New York
              Times???, en una entrevista de 1971: ???Lo que me gusta son
              las situaciones realistas en la que las cosas no encajan
              del todo?????. (Brian Eggert)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/El-cuchillo-en-el-agua_ufku9k.jpg",
              cycle_id: Cycle.order(:id)[0].id)

Movie.create(title: "EL GRITO",
              runtime: "86 min",
              year: "1978",
              director: "Jerzy Skolimowski",
              description: "Un hombre que asegura tener el poder de matar gritando
              se introduce en la casa de un matrimonio y comienza a
              dominarles con sus extra??os poderes.",
              quote: "??Una et??rea alegor??a (a partir de un relato de Robert
              Graves) llevada a tierra gracias a una pasi??n sexual mordaz. Alan Bates es el loco errante que tiene cautivos a
              un compositor y a su esposa. La sexualidad triunfa sobre
              la civilizaci??n a trav??s de una serie de peque??as traiciones, cada una de ellas registrada con espantosa y milim??trica precisi??n por la c??mara de Jerzy Skolimowski.
              Aunque Skolimowski parec??a haber retrocedido un poco
              en sus ambiciones formales (anta??o parec??a un rival real
              de Godard), este largometraje de 1978 es pura astucia e
              imaginaci??n cinematogr??ficas, un thriller en trance que
              supera a Peter Weir en su propio terreno??. (Dave Kehr)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438457/Filmoteca/El-grito_gcifs5.jpg",
              cycle_id: Cycle.order(:id)[0].id)

Movie.create(title: "ESSENTIAL KILLING",
              runtime: "83 min",
              year: "2010",
              director: "Jerzy Skolimowski",
              description: "Un afgano vinculado a los talibanes es capturado por
              el ej??rcito estadounidense tras atacar a un grupo de
              soldados y llevado a un centro de detenci??n clandestino
              en Europa. Cuando logra escapar de sus captores, se
              inicia una ag??nica lucha por la supervivencia.",
              quote: "??Sab??a de los aviones de la CIA que aterrizaban en un aeropuerto militar cercano por la prensa, y que supuestamente se llevaban prisioneros de Oriente Pr??ximo a esta
              base secreta no muy lejos de mi casa. Instintivamente,
              me negu?? a pensar en ello como tema de mi pr??xima pel??cula por su contexto pol??tico, ya que no me considero
              un activista pol??tico. [???] No importa si es esta o aquella
              guerra, si tiene lugar en Afganist??n o Irak o en la frontera
              de Pakist??n. [???] Lo que me interesa es que este tipo se ve
              atrapado en estas dram??ticas circunstancias y es llevado
              a este paisaje nevado que est?? lo m??s lejos posible de
              todo lo que ha conocido. Por un extra??o giro de la suerte, o m??s bien de la desgracia, como pronto descubrir??,
              consigue escapar. La pel??cula trata de su lucha por sobrevivir??. (Jerzy Skolimowski)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Essential-Killing_ubqafz.jpg",
              cycle_id: Cycle.order(:id)[0].id)

Movie.create(title: "FERDYDURKE",
              runtime: "90 min",
              year: "1991",
              director: "Jerzy Skolimowski",
              description: "En 1939, un escritor polaco afronta la Segunda Guerra
              Mundial rememorando su infancia. Adaptaci??n de la
              novela hom??nima de Witold Gombrowicz.",
              quote: "??Poco vista, Ferdydurke es la pel??cula que provoc?? el silencio de diecisiete a??os de Jerzy Skolimowski como director -un Skolimowski decepcionado se retir?? a su casa
              de Malib?? y se dedic?? a pintar y a alg??n que otro papel
              como actor- [???] El regreso cinematogr??fico de Skolimowski a su patria, adaptaci??n de un cl??sico moderno
              querido y admirado y, al mismo tiempo, su primera pel??cula rodada en Polonia desde los a??os sesenta, parece
              haber sido para ??l una forma de conectar con Polonia y
              los polacos, de los que hab??a vivido tanto tiempo exiliado.
              Es una afirmaci??n de su propia identidad polaca, pero es
              una afirmaci??n que, en el estilo caracter??stico de Skolimowski y Gombrowicz, ironiza, se burla y cuestiona??.
              (Ian Johnston)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Ferdydurke_rxyrin.jpg",
              cycle_id: Cycle.order(:id)[0].id)

Movie.create(title: "LAS AVENTURAS DE GERARD",
              runtime: "92 min",
              year: "1970",
              director: "Jerzy Skolimowski",
              description: "Napole??n designa como mensajero a un brigadier que
              cree ser el mejor soldado y amante del mundo, haza??as
              que intenta poner a prueba ante una condesa, un bandido
              y un oficial brit??nico.",
              quote: "??Aunque la pel??cula amenaza a veces con convertirse en
              una serie de trucos de magia, Las aventuras de Gerard se
              redime en parte por su tono de fantas??a barroca, al estilo
              del bar??n Munchausen, lleno de toques surrealistas, y en
              parte porque Gerard es un h??roe cien por cien propio de
              Skolimowski, estrafalario y resuelto en su b??squeda de la
              realizaci??n personal, convirti??ndose en la contraposici??n
              napole??nica del Marc de La partida. A pesar de su apariencia ca??tica, Gerard tiene una personalidad inconfundible??. (Nigel Andrews)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Las-aventuras-de-Gerard_km9pu8.jpg",
              cycle_id: Cycle.order(:id)[0].id)

Movie.create(title: "MOONLIGHTING",
              runtime: "97 min",
              year: "1982",
              director: "Jerzy Skolimowski",
              description: "Cuatro obreros polacos llegan a Londres para acometer
              un trabajo. A las dificultades propias de trabajar sin ning??n
              tipo de permiso se suma la declaraci??n en Polonia de la
              ley marcial.",
              quote: "??Skolimowski (que ha vivido y trabajado principalmente
              en Inglaterra durante la ??ltima d??cada) concibi?? Trabajo
              clandestino pocos d??as despu??s del golpe militar de diciembre del 81, escribi?? el guion en una semana y media,
              consigui?? la financiaci??n (2 millones de d??lares) durante
              un partido de tenis, rod?? la pel??cula y la present?? en el
              Festival de Cannes en la primavera de 1982. [???] Es el tipo
              de pel??cula que me hace maravillarme de c??mo alguien
              puede tener una idea tan genial y llevarla a cabo de forma tan redonda, con medios casi c??micamente modestos??. (Richard T. Jameson)",
              img_url: "",
              cycle_id: Cycle.order(:id)[0].id)


Cycle.create(name: "MARGARITA ALEXANDRE VISCERALMENTE LIBRE",
              description: "Se cumplen ???se cumplir??n el 23 de julio de
              2023??? cien a??os del nacimiento de Margarita
              Alexandre, directora, productora, guionista y
              actriz cinematogr??fica, cineasta integral que
              hizo del cine un medio con y desde el que vivir
              la vida como un arte, alguien para quien hacer la
              revoluci??n en el cine era tan importante como
              lograr la revoluci??n en la vida. Para Alexandre,
              la vida solo pod??a ser plenamente vivida en
              libertad y con esa idea de libertad ???que quiso
              tanto para ella como para los dem??s??? vivi??
              comprometida. Lleg?? al cine por casualidad,
              cuando estudiaba en la Alianza Francesa y el
              equipo de Eusebio Fern??ndez Ardav??n lleg??
              buscando a una joven que pudiera dar vida a
              la Inmaculada Concepci??n de Murillo, que se
              encarnaba en el sue??o de la protagonista de
              Tierra y cielo (1941). A partir de ese momento queda fascinada por el mundo que hay detr??s de
              la c??mara, un espacio que convoca a sonidistas,
              electricistas, foquistas, etc. para obrar
              colectivamente el milagro del cine. Bajo aquel
              encantamiento, Alexandre comenz?? a aceptar
              peque??os papeles como actriz secundaria o
              de reparto (en los que sol??a acreditarse como
              Margarita Sandra) con directores como Edgar
              Neville, Julien Duvivier o Ladislao Vajda. Al
              tiempo que encarnaba a un modelo de mujer
              sofisticada de aire aristocr??tico, aprend??a los
              secretos de la producci??n y de la direcci??n
              cinematogr??fica. Tras realizar su ??nica pel??cula
              como actriz protagonista ???Barco sin rumbo
              (Jos?? Mar??a Elorrieta, 1951)???, el trabajo que
              realiz?? como script para Antonio del Amo en
              Puebla de las mujeres (1952) le sirvi?? para dar el
              salto definitivo al otro lado de la c??mara.",
              quote: "Ciclo 2",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/Cristo_vj5nbw.jpg",
              color: "purple-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1),
              )

Movie.create(title: "CRISTO",
              runtime: "73 min",
              year: "1954",
              director: "Margarita Alexandre y Rafael Mar??a Torrecilla",
              description: "Adaptaci??n del libro Vida de Cristo, de Fray Justo P??rez
              de Urbel, construida a partir de grandes ejemplos de la
              pintura religiosa.",
              quote: "??Hemos cre??do que en esta pel??cula, como en todas, el
              logro principal es la unidad. Y, en todo lo posible, esa unidad la hemos querido conseguir utilizando en cada una
              de las definidas secuencias de nuestra pel??cula las obras
              de un mismo maestro, o, al menos, con las de un mismo estilo, escuela o ??poca. [???] Nuestra pel??cula comienza
              por tener, por su propio y solemne tema, una intemporalidad que le pone a salvo de gustos y modas. Sirve al
              m??s alto empe??o ???la fe- que el cine puede abordar y, al
              mismo tiempo, supone un desfile pict??rico, que se ordena por primera vez en el cine: un tesoro pl??stico que el
              cine va a vulgarizar con su enorme poder de extensi??n??.
              (Margarita Alexandre)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/Cristo_vj5nbw.jpg",
              cycle_id: Cycle.order(:id)[1].id)

Movie.create(title: "LA CIUDAD PERDIDA",
              runtime: "67 min",
              year: "1955",
              director: "Margarita Alexandre y Rafael Mar??a Torrecilla",
              description: "Durante la dictadura franquista, un republicano regresa a
              Espa??a con la intenci??n de llevar a cabo un acto terrorista
              contra el r??gimen. Sin embargo, la misi??n es un fracaso y
              se ve obligado a tomar a una mujer como reh??n para huir.",
              quote: "??Una ins??lita propuesta de Alexandre y Torrecilla, en un
              contexto marcado por la emergencia de nuevos discursos sobre la Guerra Civil, alejados del cine de cruzada, y
              de planteamientos visuales que conectan con tendencias
              internacionales como el neorrealismo italiano o el cine
              negro, estadounidense o europeo. [???] La ciudad perdida
              constituye una suerte de mutaci??n en virtud de la cual la
              trama policial sirve como pretexto para llevar hasta los
              l??mites de la permisividad la figuraci??n del vencido ???para
              emplear la terminolog??a oficial de la ??poca??? y la representaci??n del pasado??. (Sonia Garc??a L??pez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/La-ciudad-perdida_njl9nv.jpg",
              cycle_id: Cycle.order(:id)[1].id)

Movie.create(title: "LA GATA",
              runtime: "94 min",
              year: "1956",
              director: "Margarita Alexandre y Rafael Mar??a Torrecilla",
              description: "La hija del mayoral de un cortijo andaluz es pretendida
              por varios hombres del pueblo. Sin embargo, ella est??
              enamorada de un apuesto trabajador que sue??a con ser
              torero.",
              quote: "??La primera pel??cula espa??ola que utiliza el
              CinemaScope y el sonido estereof??nico, que en 1955
              son sistemas de impactante actualidad. [???] Junto a su
              imaginativo sentido del encuadre, tanto en la captaci??n
              del paisaje andaluz (la marisma, los cercados, los montes) como en las escenas dram??ticas, destaca tambi??n
              el valor hist??rico de esta pionera aportaci??n espa??ola a
              los formatos anam??rficos. [???] aborda, en pleno franquismo folclorista, una historia de la Espa??a racial sin t??picos, huyendo del estereotipo y fij??ndose en la representaci??n naturalista de la Andaluc??a rural, la de la marisma
              de Huelva, para la mejor adecuaci??n con el sentido primitivo e instintivo de las pasiones de los protagonistas??.
              (Fernando Gabriel Mart??n)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/La-gata_mdorou.jpg",
              cycle_id: Cycle.order(:id)[1].id)

Movie.create(title: "LA MUERTE DE UN BUR??CRATA",
              runtime: "85 min",
              year: "1966",
              director: "Tom??s Guti??rrez Alea",
              description: "Cuando su t??o es enterrado con su carn?? de trabajador,
              un joven vive toda clase de peripecias tratando de
              recuperar el documento, fundamental para que la viuda
              pueda cobrar su pensi??n.",
              quote: "??Esta comedia absurda y sat??rica sobre la burocracia
              es probablemente la primera pel??cula cubana que tuvo
              un impacto internacional, ganando el Premio Especial
              del Jurado en el Festival de Karlovy Vary. A pesar de que
              La muerte de un bur??crata se re??a de algunos aspectos
              del comunismo, era un notable ejemplo de las sensibilidades creativas de Tom??s Guit??rrez Alea, un cineasta
              rompedor capaz de criticar aspectos de su gobierno y al
              mismo tiempo permanecer leal a la revoluci??n cubana??.
              (Alejandro Veciana)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/La-muerte-de-un-bur%C3%B3crata_n36nhm.jpg",
              cycle_id: Cycle.order(:id)[1].id)

Cycle.create(name: "EL SIGLO DE JOS?? MAR??A FORQU??",
              description: "Aragon??s, inserto, por tanto, en la insigne
              estirpe de grandes cineastas espa??oles
              procedentes de esas tierras (Segundo de
              Chom??n, Flori??n Rey, Luis Bu??uel, Carlos
              Saura, Jos?? Luis Borau???), Jos?? Mar??a Forqu??
              Galindo, naci?? en Zaragoza el 8 de marzo
              de 1923. De familia humilde, hizo con beca
              sus primeros estudios y el bachillerato y
              muy pronto empez?? a participar, con otros
              estudiantes, en el Teatro Universitario de
              Zaragoza. En 1943 consigue un trabajo de
              dibujante de arquitecto en Madrid, donde
              logra ingresar en la Escuela de Arquitectura;
              saca adelante alg??n curso pero termina
              por abandonar la carrera al no ver claro su
              futuro en ese camino. Conoce a gentes
              del teatro y cine y, sin dejar su trabajo de
              dibujante, tiene sus primeras experiencias
              cinematogr??ficas en documentales de
              car??cter oficial y, con ??nimo de aprendizaje,
              asiste al rodaje de alguna pel??cula. En 1948,
              se casa con la actriz y escritora Carmen
              V??zquez Vigo, de la que tuvo dos hijos,
              ??lvaro, tambi??n director de cine, y Ver??nica,
              una de las actrices de mayor prestigio en la
              actualidad.",
              quote: "Ciclo 1",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Atraco-a-las-tres_bzfais.jpg",
              color: "red-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "091: POLIC??A AL HABLA",
              runtime: "91 min",
              year: "1960",
              director: "Jos?? Mar??a Forqu??",
              description: "Un polic??a vive obsesionado con capturar al coche que se
              dio a la fuga tras el atropello de su hija.",
              quote: "??El que un polic??a diese una bofetada a un detenido no
              era de ning??n modo admisible. Y expliqu?? a Arias Navarro,
              que entonces era Director General de Seguridad, que si
              el tema no se trataba dram??ticamente, con cierta dureza,
              seg??n el contexto de las situaciones, resultar??a superfalso; la Polic??a iba a parecerse a los Coros y Danzas de la
              Secci??n Femenina. Me dio la raz??n y, en la misma tesitura, defendi?? el mantenimiento de algunas situaciones a
              las que hab??a puesto reparos el propio representante, en
              la Censura, del Ministerio de la Gobernaci??n. [???] Fue otro
              gran ??xito. Me sirvi?? profesionalmente para poder seguir
              trabajando pero, en otro orden de cosas, hizo que me
              pusieran la etiqueta de director muy comercial. Para m??
              aquello era muy halagador, pues pienso que si una pel??cula no es comercial, no es nada, pero, a partir de entonces, la cr??tica no fue demasiado generosa conmigo, en
              muchas ocasiones??. (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/091-Polic%C3%ADa-al-habla_yyjycs.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "AMANECER EN PUERTA OSCURA",
              runtime: "85 min",
              year: "1957",
              director: "Jos?? Mar??a Forqu??",
              description: "En la Andaluc??a del siglo XIX, tres forajidos se enfrentan a
              una despiadada compa????a minera.",
              quote: "??Al presentar el guion en Censura, el representante del
              Ministerio de Gobernaci??n nos puso una serie de reparos. Uno de ellos, que la Guardia Civil no pod??a disparar
              sin dar en el blanco, y otro que el tratamiento que d??bamos a la situaci??n en las minas pod??a molestar a los
              americanos. Lo que resultaba sorprendente, primero,
              porque la acci??n se desarrollaba en el siglo pasado y, segundo, porque en las minas no intervinieron nunca los
              americanos sino los ingleses. Lo que s?? exist??a, como en
              Embajadores en el infierno, era un enfrentamiento entre
              espa??oles y extranjeros, unos los oprimidos y otros los
              opresores. Yo esta cuesti??n la sent??a como propia, y la
              sigo sintiendo??. (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Amanecer-en-Puerta-Oscura_sipmus.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "ATRACO A LAS TRES",
              runtime: "92 min",
              year: "1962",
              director: "Jos?? Mar??a Forqu??",
              description: "Un hombre que trabaja como cajero en un banco convence
              a sus compa??eros para atracar su propia sucursal.",
              quote: "??Lo cierto es que pocas veces se ha visto en el cine espa??ol un entrelazamiento tan pertinente de las situaciones repetitivas que constituyen el relato par??dico y sobre
              todo el gran acierto de la oposici??n de los estereotipos
              creados por cada personaje. Como en las mejores y m??s
              can??nicas comedias, el espectador intuye cu??les ser??n
              las reacciones de los oficinistas ante las situaciones diarias o frente a las cuitas del atraco; el resultado es que
              el espectador disfruta sin parar del dise??o de los personajes, de los conflictos entre ellos y de las expectativas
              planteadas [???] Atraco a las tres es algo m??s que el resultado del saber hacer en el montaje o la puesta en escena
              de un director artesano??. (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Atraco-a-las-tres_bzfais.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "CASI UN CABALLERO",
              runtime: "98 min",
              year: "1964",
              director: "Jos?? Mar??a Forqu??",
              description: "Una ladrona inexperta y sus dos compinches conocen a
              un elegante ladr??n de guante blanco.",
              quote: "??En Casi un caballero experiment?? efectos, que ya hab??a apuntado en Atraco a las tres, en el juego del humor.
              Se nos ocurri?? poner juntos a L??pez V??zquez y Alfredo
              Landa, formando esa pareja de payaso y 'clown', de listo
              y tonto, que siempre funciona de maravilla y que, en el
              cine, enmascarada de una forma u otra, tanto se ha prodigado. Inventamos tambi??n una nueva Concha Velasco, en un personaje m??s sofisticado, cuando ella, hasta
              entonces, hac??a s??lo papeles de sainete. Se adapt?? muy
              bien porque tiene un gran talento intuitivo, aparte de su
              enorme encanto personal. Creamos muchos 'gags' y
              nos divertimos mucho en el rodaje??. (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678444227/Filmoteca/Casi-un-caballero_gq9gpg.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "??DAME UN POCO DE AMOOOR???!",
              runtime: "87 min",
              year: "1968",
              director: "Jos?? Mar??a Forqu??",
              description: "Un seguidor de las doctrinas de Fu Manch??, en su af??n por
              dominar el mundo con una f??rmula qu??mica, secuestra al
              cantante de Los Bravos.",
              quote: "??Forqu?? vuelve al g??nero musical con una pel??cula muy
              personal, sembrada de hallazgos ins??litos. En un grupo
              joven, Los Bravos, muy popular en los a??os 60, se centraba, no s??lo la actuaci??n musical, sino una trama inspirada
              en los c??mics de la ??poca. Hab??a una estilizaci??n de trucos visuales, de mucha semejanza con la t??cnica de los
              videoclips, tan en boga hoy. Aquello supon??a entonces
              una curiosa novedad??. (Florentino Soria)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/Dame-un-poco-de-amooor_pjjnqw.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "DE ESPALDAS A LA PUERTA",
              runtime: "88 min",
              year: "1959",
              director: "Jos?? Mar??a Forqu??",
              description: "Una bailarina de un local es brutalmente agredida. La
              polic??a investiga el caso haciendo creer a los sospechosos
              que la v??ctima vio el rostro del agresor.",
              quote: "??Todo transcurre en muy pocas horas, con feliz conversi??n del tiempo real al tiempo cinematogr??fico, y en un
              solo ambiente, que es el formado por las distintas dependencias -apenas media docena de decorados- de la
              ???boite???. Hay pues, unidad de acci??n, de lugar y de tiempo, y el director Jos?? Mar??a Forqu?? ha resuelto con verdadera elegancia e inteligente seguridad los problemas
              que su resoluci??n le planteaba. Servido con espl??ndida
              calidad por la admirable fotograf??a de Enrique Guerner,
              maestro siempre en ambici??n y refinamiento, luce Forqu??
              su flexible dominio de los recursos cinematogr??ficos??.
              (Carlos Fern??ndez Cuenca)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/De-espaldas-a-la-puerta_iqp6tq.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "EL SEGUNDO PODER",
              runtime: "119 min",
              year: "1976",
              director: "Jos?? Mar??a Forqu??",
              description: "El hijo de Felipe II, el pr??ncipe Carlos, sufre un accidente
              en el Alc??zar de Madrid. Las autoridades eclesi??sticas
              investigan el suceso como un posible atentado.
              Adaptaci??n de la novela El hombre de la cruz verde, de
              Segundo Serrano Poncela.",
              quote: "??La reconstrucci??n de ??poca es de un gran rigor, patente en los m??s m??nimos detalles. La omnipotencia de
              una c??mara penetrante que desvela rostros, actitudes,
              ambientes, demuestra una vez m??s la capacidad visualizadora, la capacidad descriptiva de Forqu?? y sus sobresalientes condiciones para la creaci??n de atm??sferas. A
              este respecto, en esta conjunci??n de aciertos formales,
              hay que reconocer los singulares m??ritos de los directores art??stico y de fotograf??a, Rafael Richart y Alejandro
              Ulloa??. (Florentino Soria)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/El-segundo-poder_jnonuq.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "EMBAJADORES EN EL INFIERNO",
              runtime: "103 min",
              year: "1956",
              director: "Jos?? Mar??a Forqu??",
              description: "Cuatro soldados de la Divisi??n azul son capturados
              en territorio sovi??tico tras la expulsi??n de las tropas
              alemanas.",
              quote: "??En la salita de proyecci??n del NO-DO, se reunieron para
              visionar la pel??cula Jos?? Luis Arrese, Ministro Secretario
              General del Movimiento; Mu??oz Grande, Ministro del Ej??rcito, y creo que Gabriel Arias Salgado, responsable de la
              censura. Yo me hab??a introducido subrepticiamente en la
              sala y, cuando termin?? la proyecci??n, o?? este comentario:
              'La cabronada es que la pel??cula es buena'. Entonces se
              dieron cuenta de que estaba en la sala y me echaron. Al
              poco rato sali??, creo que Arrese, y me dijo que se iba a
              autorizar, pero que ten??amos que a??adir al principio una
              frase rimbombante en la que se dec??a que la actuaci??n
              de los voluntarios hab??a sido como una prolongaci??n de
              la guerra de liberaci??n espa??ola e introducir unos planos
              en los que algunos prisioneros aparecieran con las flechas
              de la Falange, lo que era un pegote inveros??mil. Como ya
              hab??a pronosticado fue un ??xito tremendo. Al llegar al final se hizo un gran silencio y la sala se llen?? de pa??uelos
              porque la gente lloraba. [???] Resolvi?? mi vida profesional??.
              (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Embajadores-en-el-infierno_cawdde.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "LAS QUE TIENEN QUE SERVIR",
              runtime: "78 min",
              year: "1967",
              director: "Jos?? Mar??a Forqu??",
              description: "Un militar estadounidense y su mujer contratan a dos
              j??venes como empleadas del hogar. La cosa se complica
              cuando resulta que, adem??s de sus respectivos novios,
              ambas tienen pretendientes en la base militar de Torrej??n
              de Ardoz",
              quote: "??La versi??n cinematogr??fica estuvo producida y escrita
              por Jos?? Luis Dibildos que siempre tuvo olfato para detectar los temas de impacto, mediante aquella su 'tercera v??a', en la que se aliaban la contundencia comercial
              y cierta dignidad art??stica. Forqu??, cultivador de diversos
              g??neros con desigual fortuna siempre sale airoso cuando se mueve en su terreno favorito, la comedia. La obra
              original, que presenta los contrastes de costumbres entre espa??oles y americanos se aprovecha de los t??picos
              clich??s de unos y otros, pero no deja de sacarles partido
              con situaciones divertidas y di??logos ocurrentes. Unas
              'chachas' espa??olas, sirviendo en el chalet de un t??pico matrimonio americano y con unos novios al 'ib??rico
              modo', pueden dar lugar a momentos bien regocijantes??. (Florentino Soria)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Las-que-tienen-que-servir_wgqo45.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "MARIBEL Y LA EXTRA??A FAMILIA ",
              runtime: "101 min",
              year: "1960",
              director: "Jos?? Mar??a Forqu??",
              description: "Un t??mido provinciano le presenta a su madre y a su t??a la
              joven con la que se va a casar, sin saber que se dedica a la
              prostituci??n. Adaptaci??n de la obra de teatro de Miguel
              Mihura.",
              quote: "??Pese al humor que destila, la obra de teatro es una comedia ??cida, atrevida y casi subversiva para el momento.
              Y Jos?? Mar??a Forqu?? ???que hab??a asistido en la terraza del
              Caf?? Gij??n a la gestaci??n de la obra de su amigo Miguel
              Mihura junto a ???Tono??? y Mingote- supo respetar ese esp??ritu en su adaptaci??n al cine. El director mantiene pr??cticamente el mismo esquema teatral y respeta unos di??logos casi id??nticos a los de la comedia, reforzando con
              las posibilidades de la c??mara ???que le permite crear las
              secuencias de la pensi??n de las prostitutas- la divisi??n de
              diferentes ambientes donde se desarrollan las dos formas de vida. Ambientes que Forqu?? construye con exquisito cuidado??. (Fernando Lara y Eduardo Rodr??guez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Maribel-y-la-extra%C3%B1a-familia_sa1rnu.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "NO ES NADA MAM??, SOLO UN JUEGO ",
              runtime: "85 min",
              year: "1974",
              director: "Jos?? Mar??a Forqu??",
              description: "El joven propietario de una hacienda sufre un grave
              trauma hacia las mujeres por culpa de su madre. Pronto
              se enamora de la hija de uno de sus empleados, a la que
              antes maltrataba.",
              quote: "??Es una de mis pel??culas predilectas. Repito en ella, por
              una parte, ese juego de la utilizaci??n de un ser humano
              que se resuelve en su rebeld??a final. Por otra parte, expongo la decadencia de una raza, de una familia, con ese
              v??stago que sustituye unos valores por otros, el dinero
              por unas pasiones enfermizas. Hay un c??mulo de odios y
              perversiones exaltados, llevados al l??mite. [???] Cuando estaba montando la pel??cula se me ocurri?? que un s??mbolo
              indicativo, un tanto surrealista, hubiera sido la expresi??n,
              con ciertas im??genes, de que, as?? como las plantas m??s
              bellas crecen en la putrefacci??n, nacen del humus, la
              muchacha, que hab??a llegado a un servilismo y degradaci??n absolutos, resurge, liberada y distinta, de la misma
              putrefacci??n??. (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/No-es-nada-mam%C3%A1_-s%C3%B3lo-un-juego_xq8rve.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "TENGO 17 A??OS",
              runtime: "90 min",
              year: "1964",
              director: "Jos?? Mar??a Forqu??",
              description: "Una joven, harta de sentirse incomprendida, huye de su
              casa y termina en un peque??o pueblo, donde la acoge un
              grupo de alfareros.",
              quote: "??Nos pidieron una cosa apta para menores, lo que me
              permiti??, al fin, hacer una pel??cula que pudieran ver mis
              hijos. Fue para nosotros como un juego. [???] Roberto Font
              no era ni bueno ni malo, era un genio, un actor imposible
              de clasificar. No creo que su trabajo fuera meditado, estructurado; lo hac??a instintivamente, y como ??l ten??a un
              poder de proyecci??n enorme, sal??an unas cosas maravillosas??. (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Tengo-17-a%C3%B1os_hqoc11.jpg",
              cycle_id: Cycle.order(:id)[2].id)

Movie.create(title: "YO HE VISTO A LA MUERTE",
              runtime: "101 min",
              year: "1967",
              director: "Jos?? Mar??a Forqu??",
              description: "Cuatro episodios reales sobre la tauromaquia contados
              por sus protagonistas.",
              quote: "??No se plante?? como una pel??cula sino como una serie
              de televisi??n. Quer??a hacer con Armi????n, que fue realmente el creador de la idea, una gran cr??nica sobre el
              toro, el toreo y el p??blico, compuesta de trece o catorce
              cap??tulos. El proyecto no prosper?? en TVE pero, como ya
              ten??amos escritos cuatro cap??tulos, me dio pena desaprovecharlos. Cre?? que ser??a interesante mostrar el mundo de los toros desde dentro y a los toreros en zapatillas. Jaime de Armi????n conoc??a muy bien el tema desde
              antiguo pues su padre hab??a sido un prestigioso cr??tico
              de toros. Nos interesaba reflejar, en forma de docudrama, una realidad, sin las deformaciones habituales??.
              (Jos?? Mar??a Forqu??)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Yo-he-visto-a-la-muerte_yobfi2.jpg",
              cycle_id: Cycle.order(:id)[2].id)


Cycle.create(name: "DOUGLAS SIRK LA EMOCI??N INMEDIATA",
              description: "???El cine es un campo de batalla???, dice Samuel
              Fuller, que una vez escribi?? un guion para
              Douglas Sirk, en una pel??cula de Jean-Luc
              Godard, el cual poco antes de rodar Al final
              de la escapada (1960), escribi?? un homenaje
              a la pel??cula Tiempo de amar, tiempo de morir
              (1958), de Douglas Sirk.
              Da igual qui??n sea, Godard o Fuller, cualquier otro
              o yo, nadie le llega a la suela del zapato. Sirk dijo
              que el cine es sangre, l??grimas, violencia, odio,
              muerte y amor. Y Sirk hizo pel??culas, pel??culas
              con sangre, con l??grimas, con violencia, con
              odio, pel??culas con muerte y pel??culas con amor.
              Sirk dijo que las pel??culas no pueden hacerse
              sobre algo, que s??lo pueden hacerse con algo,
              con personas, con luz, con flores, con espejos,
              con sangre, con todas esas cosas locas que
              valen la pena. Adem??s dijo que la iluminaci??n y el enfoque son la filosof??a del director. Y Douglas
              Sirk hizo las pel??culas m??s tiernas que conozco,
              pel??culas de alguien que ama a las personas y
              no las desprecia como nosotros. Una vez, Darryl
              F. Zanuck le dijo: ???La pel??cula tiene que gustar,
              sea en Kansas City o en Singapur???. Vaya locura,
              Am??rica, ??no?",
              quote: "Ciclo 4",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Esc%C3%A1ndalo-en-Paris_x7kc97.jpg",
              color: "green-cycle",
              start_date: Date.new(today_date.year, 1, 1),
              end_date: Date.new(today_date.year, today_date.month + 2, 1))

Movie.create(title: "??ALGUIEN HA VISTO A MI CHICA?",
              runtime: "88 min",
              year: "1952",
              director: "Douglas Sirk",
              description: "Un anciano millonario sin herederos decide legar toda su
              fortuna a la familia de su primera novia. Para asegurarse
              de que no est?? cometiendo un error, finge ser pobre y
              alquila una habitaci??n en su casa.",
              quote: "??Hab??a surgido en la Universal una especie de producci??n de serie B en contra de la tendencia de la ??poca,
              seg??n yo pensaba, y el tiempo me dio la raz??n. Ello era en
              parte debido a la falta de estrellas bajo contrato del estudio. Lo ??nico que se pod??a hacer en estas circunstancias
              era fabricar una estrella, porque el conseguir m??s dinero
              depend??a de tener un nombre en la pel??cula. As?? que busqu?? por all?? y vi una pel??cula en la que actuaba Rock Hudson, con Jeff Chandler de protagonista (Iron Man, Joseph
              Pevney, 1951). Ten??a un papel peque??o y era muy inferior
              a Chandler, pero cre?? ver algo en ??l. Prepar?? una reuni??n
              y, a primera vista, no parec??a ser gran cosa, salvo muy
              guapo. Pero la c??mara ve con su propio ojo. Ve cosas que
              el ojo humano no detecta. Y al fin aprendes a confiar en
              tu c??mara??. (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Alguien-ha-visto-a-mi-chica_bsqrn1.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "ATILA, REY DE LOS HUNOS",
              runtime: "92 min",
              year: "1954",
              director: "Douglas Sirk",
              description: "Atila, el huno, a??na a los pueblos b??rbaros ante el divido
              Imperio Romano.",
              quote: "??Yo necesitaba a alguien para interpretar el papel de Atila y la pel??cula corr??a prisa. La firme actitud de Chandler
              era que ??l ten??a que ser el chico bueno, un gal??n de la
              pantalla, y que ser??a malo para su carrera interpretar lo
              que ??l llamaba ???un villano???. Creo que a ??l le gustaba la
              idea de andar por ah?? con toga y todo eso. Mi postura
              era que lo ??nico interesante de la historia era la furia de
              Atila??? este hombre que da vueltas en torno a s?? mismo y a
              su objetivo imposible, la captura de la ciudadela de la religi??n, Roma, a la que cerca como un animal. Atila es uno
              de esos personajes que dan vueltas en torno a s?? mismos
              que tanto me gustan. Encaja en mi galer??a, solo que es
              una variante violenta de este personaje habitualmente
              tranquilo, a lo Hamlet. Le dije honradamente a Chandler
              que en mi pel??cula el centro de atenci??n ser??a Atila. Pero
              no quer??a saber nada de ello. [???] Hab??a por all?? un actor
              menos conocido, Jack Palance. Era famoso, pero no un
              protagonista. [???] Le dije a Chandler: ???Pi??nsalo, porque el
              personaje del huno va a dominar la pel??cula???. Pero ??l solo
              dec??a ???Nunca me ha oscurecido un villano???. Y, como sabes, la pel??cula es de Palance??. (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Atila-rey-de-los-hunos_f5dgeo.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "DOUGLAS SIRK - HOPE AS IN DESPAIR",
              runtime: "75 min",
              year: "2022",
              director: "Roman H??ben",
              description: "Documental de investigaci??n que recorre la vida de
              Douglas Sirk a trav??s de testimonios de aquellos que
              le conocieron y de las p??ginas del diario de su segunda
              mujer",
              quote: "Antes de la proyecci??n tendr?? lugar una mesa redonda
              con Roberto Turigliatto, cocomisario del ciclo; Paula
              Arantzazu Ruiz, cr??tica de cine; y el director, Roman
              H??ben. Tras la mesa redonda habr?? un peque??o descanso de diez minutos y acto seguido se proyectar?? la
              pel??cula. Duraci??n aproximada de la mesa redonda: 60???
              (Total sesi??n: 140???).",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/Douglas-SirkHope-as-in-Despair_evelu1.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "ESC??NDALO EN PAR??S",
              runtime: "100 min",
              year: "1946",
              director: "Douglas Sirk",
              description: "Nacido en la c??rcel, un ladr??n profesional del siglo XVIII
              se convierte hacia el final de su vida en el jefe de la polic??a
              parisina.",
              quote: "??En esta pel??cula trat?? de ir m??s all?? del realismo en la
              forma de presentar la historia. Resultaba casi surrealista. A la manera de los surrealistas americanos, no de los
              franceses. La pel??cula no tuvo mucho ??xito. Esto se debi??
              presuntamente a que yo adopt?? una actitud que hac??a
              surgir la iron??a y esto no funcionaba nada bien con el p??blico americano. [???] Pero, por supuesto, s??lo mostraba
              una peque??a parte de la vida de Vidocq en la pel??cula. Se
              podr??a haber hecho toda una serie de pel??culas a partir
              de su vida, lo mismo que con Cagliostro. Pero la parte
              que utilic?? es el periodo m??s interesante, el que se presta
              mejor a la iron??a; hay mucha en su oscilaci??n entre polic??a y ladr??n. Y esto proporciona al personaje de Sanders
              mejor margen para actuar??. (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Esc%C3%A1ndalo-en-Paris_x7kc97.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "LA PRIMERA LEGI??N",
              runtime: "86 min",
              year: "1951",
              director: "Douglas Sirk",
              description: "Un jesuita se prepara para abandonar el seminario
              cuando una serie de milagros hacen que se replantee su
              decisi??n.",
              quote: "??Lo que intent?? fue llevarla decididamente hacia la comedia. Hay un milagro que no es un milagro, pero a causa
              del cual le suceden un mont??n de cosas a ese peque??o
              monasterio, y entonces Dios dice: ???Ahora les mandar?? un
              milagro de verdad???. Es como si Dios se presentara y dijese: ???Parece que ha habido por aqu?? un falso milagro, cosa
              a que nadie puede hacerle muy feliz, pero por Dios que
              habr?? uno de verdad. Ahora ver??is???, y empieza a arremangarse??. (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678443539/Filmoteca/La-primera-legion_mfqnho.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "ORGULLO DE RAZA",
              runtime: "92 min",
              year: "1955",
              director: "Douglas Sirk",
              description: "En el siglo XIX, un hombre se une al capit??n Thunderbolt
              para luchar por la independencia de Irlanda.",
              quote: "??El turbulento drama hist??rico de Douglas Sirk, ambientado en
              la Irlanda de 1815, es un w??stern disfrazado. A pesar del colorido
              de la aventura rom??ntica, Sirk est?? menos interesado en la lucha
              de espadachines que en la estrategia: observa el alzamiento de
              forma anal??tica, se??alando las amargas iron??as de los astutos comandantes, obligados a contener a los audaces guerreros por el
              bien de la lucha a largo plazo. Describe a los colaboradores locales de las autoridades brit??nicas, evoca la paranoica circunspecci??n de los muy organizados luchadores por la libertad, que
              temen la infiltraci??n y la delaci??n, y evoca las amenazas de c??rcel
              y tortura utilizadas para doblegar la voluntad de los conspiradores detenidos. Sirk ???un emigrante alem??n??? ofrece tambi??n una
              visi??n velada de la resistencia a la ocupaci??n nazi en la Europa de
              la Segunda Guerra Mundial??. (Richard Brody)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Orgullo-de-raza_cvjxdf.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "PACTO TENEBROSO",
              runtime: "97 min",
              year: "1948",
              director: "Douglas Sirk",
              description: "Una mujer se despierta en un tren en marcha, incapaz de
              recordar c??mo ha llegado all??.",
              quote: "??Incluso con el problema de casting que es Claudette
              Colbert, la pel??cula es, como dec??a James Harvey en ???Film
              Comment???, una maravilla. Adem??s, todo el metraje est??
              surcado por un tema muy propio de los a??os 40 y que
              Sirk amplific??, el de una mujer que descubre su propia
              identidad bajo todas las mentiras que ha estado aceptando durante a??os. ???Eso no es propio de mi chica???, le
              dice el antagonista a su c??mplice, a lo que esta responde: ???Tu chica es muchas chicas???. Las damas perversas
              siempre saben mucho de la vida; son las bondadosas las
              que tienen que romper con la hipnosis??. (Farran Smith
              Nehme)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Pacto_tenebroso_fftm9y.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "RAZA DE VIOLENCIA",
              runtime: "79 min",
              year: "1954",
              director: "Douglas Sirk",
              description: "Tras la muerte de un jefe apache, la tribu debe elegir
              entre sus dos hijos un nuevo l??der que sepa c??mo lidiar
              con la amenaza del hombre blanco: uno es un pacifista,
              el otro aboga por la lucha.",
              quote: "??Quer??a hacer un w??stern. Y Rock Hudson quer??a volver a trabajar conmigo, as?? que hicimos esta pel??cula en
              la que interpretaba a un indio. Al estudio no le gustaba
              que interpretase de nuevo a un indio porque acababa de
              hacerlo y pensaban que pod??a estropear su imagen. [???]
              Me interesaban mucho los indios y trat?? de incluir mucho sobre sus costumbres en la pel??cula. Se rod?? por
              entero en Utah, en su mayor parte cerca de Moab, y un
              poco m??s arriba, en la parte del r??o Colorado. Se rod??
              completamente en exteriores y de forma improvisada.
              Hay algunos decorados, pero fueron construidos todos
              all??, en el lugar, y tambi??n por los indios. Y los indios eran
              aut??nticos, no hab??an sido viciados por Ford. Hab??a una
              gran batalla en la pel??cula, en la que empezaron a pelear
              de verdad como demonios. Ninguno de ellos hablaba ingl??s y ten??amos un par de int??rpretes para las dos tribus
              apaches, ninguna de las cuales hablaba tampoco la otra
              lengua. La batalla fue una de las cosas m??s apasionantes
              que he hecho nunca??. (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Raza-de-violencia_cgep93.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "SLIGHTLY FRENCH",
              runtime: "81 min",
              year: "1949",
              director: "Douglas Sirk",
              description: "Tras despedir a una estrella de cine francesa, un
              director de Hollywood contrata a una joven cantante
              estadounidense para sustituirla.",
              quote: "??Slightly French es como un juego de espejos en el que lo
              que es real y lo que es artificio se vuelven indistinguibles,
              hasta el punto de ser inseparables. [???] Es como si la trama
              de Slightly French se moviera en una direcci??n, mientras
              que Sirk la gu??a esc??pticamente en otra, completamente
              en desacuerdo con el esp??ritu de la comedia rom??ntica
              de Hollywood. El enfoque estrat??gicamente subversivo
              del cineasta no solo es evidente en la forma en que la
              pel??cula rechaza favorecer la empat??a con los protagonistas, sino tambi??n en la representaci??n intransigente
              del Hollywood que iba a ser el lugar de trabajo de Sirk
              durante una d??cada m??s. Adem??s, e igual de importante,
              est?? la forma en que el habitual dise??o de iluminaci??n del
              g??nero, que evita cualquier presencia de la oscuridad,
              es ignorado en favor de una fotograf??a altamente contrastada y escenarios cargados de sombras que resultan
              m??s desconcertantes que tranquilizadores??. (Tom Ryan)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Slightly-French_qrror5.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "TEMPESTAD EN LA CUMBRE",
              runtime: "84 min",
              year: "1951",
              director: "Douglas Sirk",
              description: "Convencida de que una mujer acusada de asesinato es
              inocente, una monja trata de encontrar al culpable",
              quote: "??La Universal me ofreci?? un contrato. [...] Me dijeron: ???Tenemos que firmar un contrato de siete a??os???. Yo dije: ???De
              acuerdo, firmar??, a condici??n de que me garantic??is una
              pel??cula de serie A???, y esta iba a ser Tempestad en la cumbre. [???] Las condiciones no eran perfectas, pero cuando
              me quejaba de una historia me dec??an: ???Si consigues una
              estrella, magn??fico; puedes tener m??s dinero y elegir una
              historia mejor???. Pero al menos se me permit??a trabajar sobre el material, por lo que reestructur?? en cierta medida
              algunos de los casi imposibles guiones de las pel??culas
              que tuve que dirigir. Por supuesto, ten??a que seguir las
              reglas, evitar experimentos, atenerme a los gustos familiares, poner ???finales felices??? y todo eso??. (Douglas Sirk)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Tempestad-en-la-cumbre_o0jnzc.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Movie.create(title: "THE LADY PAYS OFF",
              runtime: "80 min",
              year: "1951",
              director: "Douglas Sirk",
              description: "Como premio por ser elegida profesora del a??o por la
              revista ???Time???, una joven realiza un viaje a Las Vegas,
              donde termina perdiendo todo su dinero. Para pagar su
              deuda, acepta cuidar de la hija del m??nager del casino.",
              quote: "??Los roles de g??nero son el elemento principal de esta
              inquietante comedia rom??ntica sobre una maestra de
              escuela que quiere ser percibida como una mujer en lugar de simplemente como una persona cuyas habilidades han acabado por definir como ???una segunda madre???.
              [???] Como es habitual en muchas de las pel??culas de Sirk
              con protagonistas femeninos, su identidad est?? significativamente conectada con las circunstancias sociales
              que define qu?? es ser una mujer. Es una profesional respetada, pero sus habilidades se consideran inseparables
              de las necesidades del hogar. Se la alaba porque es la
              madre que tienen los ni??os cuando sus verdaderas madres no est??n cerca??. (Tom Ryan)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/The-Lady-Pays-Off_ueibmh.jpg",
              cycle_id: Cycle.order(:id)[3].id)

Cycle.create(name: "HOMENAJE A EUGENIO MART??N",
              description: "El pasado enero recibimos con tristeza
              la noticia del fallecimiento de Eugenio
              Mart??n, nombre clave del cine de g??nero
              en Espa??a. A modo de recuerdo, este
              mes recuperamos cuatro de sus trabajos,
              incluyendo dos t??tulos de culto como
              P??nico en el Transiberiano (1972) y Una
              vela para el diablo (1973). Tras debutar en
              el largometraje en 1957 con Despedida de
              soltero, que se sald?? con un importante
              fracaso, Mart??n particip?? en numerosas coproducciones internacionales como
              ayudante de direcci??n, colaborando con
              directores como Terence Young o Nicholas
              Ray, hasta que en 1961 pudo regresar a la
              direcci??n con Los corsarios del Caribe. A
              partir de ese momento, Mart??n se convertir??a
              en uno de los artesanos m??s polifac??ticos
              de la industria espa??ola, firmando w??sterns
              con Lee Van Cleef, relatos de terror con
              Christopher Lee, comedias con Lola Flores
              o dramas con Marisol.",
              quote: "Ciclo 5",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/El-precio-de-un-hombre_lausgl.jpg",
              color: "yellow-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "EL PRECIO DE UN HOMBRE ",
              runtime: "95 min",
              year: "1966",
              director: "Eugenio Mart??n",
              description: "Perseguido por un cazarrecompensas, un forajido
              mexicano se refugia en su pueblo natal. Los vecinos de
              la localidad colaboran en su encubrimiento hasta que se
              dan cuenta de lo mucho que ha cambiado.",
              quote: "??En El precio de un hombre predomina la tradici??n americana. Por lo menos, eso fue lo que intent?? yo. Porque
              una cosa es que el w??stern tenga dureza, que eso lo ten??an todos los americanos, porque Am??rica es un pueblo
              duro, y otra cosa es que tenga cinismo, que eso lo introdujo Italia, que es un pueblo c??nico??. (Eugenio Mart??n)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/El-precio-de-un-hombre_lausgl.jpg",
              cycle_id: Cycle.order(:id)[4].id)

Movie.create(title: "HIPNOSIS",
              runtime: "92 min",
              year: "1962",
              director: "Eugenio Mart??n",
              description: "Cuando un hipnotista aparece asesinado en su camerino,
              un boxeador y un chico de los recados se convierten en
              los sospechosos principales. ",
              quote: "??Remite a Fritz Lang, en las im??genes, y a Alfred Hitchcock, en la trama, as?? como, por supuesto, al m??s c??lebre episodio de Al morir la noche [???] La belleza est??tica
              y los aciertos pl??sticos, con un magn??fico uso expresivo
              de la fotograf??a en blanco y negro, redondean un grat??simo tono particular, a la vez t??pico y at??pico, que basta y sobra para reivindicar, una vez m??s y por si todav??a
              hiciera falta, el magn??fico cine de g??nero en coproducci??n propuesto por Europa durante los a??os 50/60??.
              (Carlos Aguilar y Anita Haas)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438459/Filmoteca/Hipnosis_atwqla.jpg",
              cycle_id: Cycle.order(:id)[4].id)

Movie.create(title: "P??NICO EN EL TRANSIBERIANO",
              runtime: "88 min",
              year: "1972",
              director: "Eugenio Mart??n",
              description: "Un antrop??logo ingl??s descubre en Manchuria una
              criatura prehist??rica congelada que decide llevar a
              Inglaterra a bordo del Transiberiano. El despertar del f??sil
              convierte el viaje un aut??ntico pasaje del terror.",
              quote: "??[El terror] puede ser burdo, como en el caso del gore,
              que me parece detestable y encima aburrido, pero tambi??n puede ser apasionante cuando introduces elementos no cartesianos en situaciones realistas. Este tipo de
              cine fant??stico recoge todos los mundos posibles que la
              mente humana puede poner en pie, y puede hacerlo con
              la suficiente coherencia para que lleguen a impresionarnos y a emocionarnos??. (Eugenio Mart??n)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678444087/Filmoteca/Panico-en-el-Transiberian_zkwpfz.jpg",
              cycle_id: Cycle.order(:id)[4].id)

Movie.create(title: "UNA VELA PARA EL DIABLO",
              runtime: "83 min",
              year: "1973",
              director: "Eugenio Mart??n",
              description: "Dos hermanas que regentan un peque??o hotel rural se
              dedican a matar a todos los hu??spedes que no cumplen
              con sus est??ndares morales y religiosos.",
              quote: "??Conceb?? Una vela para el diablo no como una pel??cula de
              terror, sino como un drama de cierta ambici??n, que denunciara el fanatismo y sus secuelas. Porque todo fan??tico es un asesino en potencia, que asesina con tranquilidad debido a que su conciencia est?? libre, est?? limpia. [???]
              Los espa??oles podemos ofrecer aspectos terror??ficos,
              pero no en las brumas del atardecer, como los ingleses
              y alemanes, sino en las plazas abiertas, cuando nuestro
              fanatismo religioso ha torturado y quemado a sus v??ctimas, o cuando el fanatismo pol??tico las ha humillado y
              fusilado. ??Cu??ntas historias de horror, de aut??ntico horror, permanecen ocultas en el marco de nuestra guerra
              civil? No hay que enfocarlas s??lo como historias dram??ticas estrictas, con ellas se pueden entrar tambi??n en el
              mundo de la fantas??a negra irracional??. (Eugenio Mart??n)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/Una-vela-para-el-diablo_enpjhg.jpg",
              cycle_id: Cycle.order(:id)[4].id)

Cycle.create(name: "LOS MIL Y UN EMBRUJOS DE LOLA FLORES",
              description: "",
              quote: "Ciclo 5",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/El-balcon-de-la-luna_gobpgj.jpg",
              color: "brown-cycle",
              start_date: Date.new(today_date.year, 1, 1),
              end_date: Date.new(today_date.year, 12, 1))

Movie.create(title: "EL BALC??N DE LA LUNA",
              runtime: "99 min",
              year: "1962",
              director: "Luis Saslavsky",
              description: "Los romances, aventuras y desventuras de tres artistas
              que trabajan en un local de variedades.",
              quote: "??Una de las pel??culas en las que m??s creadores queer
              participaron de todo el franquismo, un ejemplo paradigm??tico para evidenciar la existencia de colaboraciones creativas queer en el cine de la dictadura. [???] Todos ellos compart??an su predilecci??n por la expresi??n
              creativa a trav??s de la feminidad. En las narrativas de
              sus creaciones, los hombres ocupan mayoritariamente la posici??n de objetos de deseo [???] Frente a la tradici??n patriarcal, aqu?? las mujeres son protagonistas y
              obtienen el poder, y los hombres son intercambiables??.
              (Santiago Lomas Mart??nez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/El-balcon-de-la-luna_gobpgj.jpg",
              cycle_id: Cycle.order(:id)[5].id)


Cycle.create(name: "FLORES EN LA SOMBRA",
              description: "",
              quote: "Ciclo 6",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438462/Filmoteca/Cortometrajes-Adela-Medrano_ygyium.jpg",
              color: "black text-white",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "CORTOMETRAJES DE ADELA MEDRANO",
              runtime: "120 min",
              year: "",
              director: "",
              description: "Esta sesi??n acoge dos cortometrajes de la periodista y
              cineasta Adela Medrano, recientemente recuperados
              gracias al trabajo de investigaci??n llevado a cabo por las
              investigadoras Mar??a del Pilar Garc??a Herrador y Amaia
              Zufiaur Ruiz de Eguino. Se trata de dos piezas de cine
              industrial en torno a la Euskadiko Kutxa (Las calidades de
              la vida) y el Concurso Internacional de Esculturas para la
              Autopista del Mediterr??neo (Esculturas para un paisaje).",
              shorts: "Las calidades de la vida (Adela Medrano, 1974). Espa??a.
              DCP. Color. 28???
              ??? Esculturas para un paisaje (Adela Medrano, 1975).
              Espa??a. DCP. Color. 25???",
              quote: "",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438462/Filmoteca/Cortometrajes-Adela-Medrano_ygyium.jpg",
              cycle_id: Cycle.order(:id)[6].id)


Cycle.create(name: "FILMOTECA JUNIOR",
              description: "",
              quote: "Ciclo 7",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/The-White-Snake-Enchantress_qxmgkb.jpg",
              color: "blue-cycle text-pink-cycle",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "CORTOMETRAJES DE FLEISCHER STUDIOS",
              runtime: "120 min",
              year: "1921-1941",
              director: "Dave Fleischer",
              description: "Los animadores Max y Dave Fleischer fundaron el estudio
              Out of the Inkwell en 1921. Empezando en un s??tano de
              Nueva York, el estudio fue creciendo hasta convertirse
              en una fuerza pionera de la animaci??n, alcanzando fama
              mundial gracias a sus trabajos con personajes como
              Betty Boop, Popeye, KoKo y Superman. En 1929 el estudio
              cambi?? su nombre a Fleischer Studios",
              shorts: "Out of the Inkwell: Modeling (Dave Fleischer, 1921).
              EEUU. B-R. B/N. 7???
              ??? Advertisement Films: In My Merry Oldsmobile (Dave
              Fleischer, 1931). EEUU. B-R. VOSE*. B/N. 6???
              ??? Betty Boop: Is My Palm Read (Dave Fleischer, 1933).
              EEUU. B-R. VOSE*. B/N. 7???
              ??? A Color Classic: The Little Dutch Mill (Dave Fleischer,
              1934). EEUU. B-R. VOSE*. Color. 9???
              ??? Popeye: The Paneless Window Washer (Dave Fleischer,
              1937). EEUU. B-R. VOSE*. B/N. 6???
              ??? Betty Boop: Ding Dong Doggie (Dave Fleischer, 1937).
              EEUU. B-R. VOSE*. B/N. 7???
              ??? Gabby: Two for the Zoo (Dave Fleischer, 1941). EEUU.
              B-R. VOSE*. Color. 7???
              ??? Gabby: Swing Cleaning (Dave Fleischer, 1941). EEUU.
              B-R. VOSE*. Color. 7???",
              quote: "",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438457/Filmoteca/Cortometrajes-Fleischer-Studios_vzahlg.jpg",
              cycle_id: Cycle.order(:id)[7].id)

Movie.create(title: "LA VACA Y EL PRISIONERO",
              runtime: "119 min",
              year: "1959",
              director: "Henri Verneuil",
              description: "Durante la Segunda Guerra Mundial, un prisionero de
              guerra franc??s huye de Alemania acompa??ado de una
              vaca, que utiliza para hacerse pasar por ganadero.",
              quote: "??Desde La table aux crev??s, el director Henri Verneuil y el
              actor Fernandel hab??an colaborado juntos en varias producciones. Esta fue quiz??s la guinda del pastel, ya que,
              aunque no era el mejor papel de Fernandel en la pantalla, estaba muy en consonancia con los est??ndares de la
              ??poca por su tema ligeramente franc??s. Adem??s, saber
              que un artista como Fernandel compart??a el papel principal con una vaca, Marguerite, no dejaba de despertar
              la curiosidad de los espectadores, que se re??an a carcajadas... ??y por qu?? no? Es cierto que asistimos m??s a
              una comedia de situaci??n en la que destaca Fernandel
              que a una comedia filos??fica, porque si nos deleitamos
              siguiendo este 'paseo' no es ciertamente gracias a los
              di??logos, que de hecho son muy pobres. Esta obra pertenece a una ??poca en la que ??bamos al cine a ver actuar
              a un actor y, desde este punto de vista, no nos decepciona. La prueba: la receta sigue funcionando y todav??a nos
              complace degustar esta producci??n de Henri Verneuil??.
              (G??rard Rocher)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678443735/Filmoteca/La-vaca-y-el-prisionero_xoz5am.jpg",
              cycle_id: Cycle.order(:id)[7].id)

Movie.create(title: "THE WHITE SNAKE ENCHANTRESS ",
              runtime: "79 min",
              year: "1958",
              director: "Taiji Yabushita",
              description: "Adaptaci??n de un cuento tradicional chino que sigue
              las aventuras de un joven enamorado de un esp??ritu. El
              primer largometraje de animaci??n japon??s en color y
              uno de los primeros en estrenarse fuera de las fronteras
              niponas, fue una importante proeza t??cnica y art??stica
              para la casa Toei, probablemente el estudio de animaci??n
              m??s importante de la historia de Jap??n.",
              quote: "",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438461/Filmoteca/The-White-Snake-Enchantress_qxmgkb.jpg",
              cycle_id: Cycle.order(:id)[7].id)


Cycle.create(name: "OTRAS SESIONES",
              color: "blue-cycle",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438462/Filmoteca/Chantaje-en-Broadway_pyng2a.jpg",
              start_date: Date.new(today_date.year, today_date.month, 1),
              end_date: Date.new(today_date.year, today_date.month, 1))

Movie.create(title: "CHANTAJE EN BROADWAY",
              runtime: "96 min",
              year: "1957",
              director: "Alexander Mackendrick",
              description: "Un ambicioso agente de prensa, dispuesto a lo que sea
              para ascender en el mundo de la prensa, acepta participar
              en los oscuros tejemanejes de un poderoso columnista.",
              quote: "??El p??blico de 1957 no iba a ver una pel??cula de Tony Curtis o Burt Lancaster para descubrir a personajes
               empapados en un desprecio que tambi??n contaminaba venerables lugares comunes de la vida estadounidense, del
              amor fraternal a la ambici??n perseverante, por no hablar
              de los columnistas de peri??dico, las chicas que venden
              cigarrillos, los senadores, la polic??a y todo aquello que
              brilla e ilumina el Gran Camino Blanco. Por eso no fueron
              a ver Chantaje en Broadway. Aquel era el a??o de Vidas
              borrascosas y Sayonara: grandes y coloridas producciones con h??roes y valores es??picos. Lo que ellos se perdieron, nosotros lo ganamos. Chantaje en Broadway es
              un absoluto cl??sico??. (Gary Giddins)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438462/Filmoteca/Chantaje-en-Broadway_pyng2a.jpg",
              cycle_id: Cycle.order(:id)[8].id)

Movie.create(title: "CR??A CUERVOS",
              runtime: "105 min",
              year: "1976",
              director: "Carlos Saura",
              description: "Retrato de una familia espa??ola de clase alta en 1975,
              vista a trav??s de los ojos de una ni??a de 8 a??os.",
              quote: "??La mirada de Ana nos va descubriendo, gracias adem??s
              a una sugerente y h??bil estructura en flashbacks alternos
              (que saltan de 1995 a 1975 en sucesivas ocasiones), distintos momentos de su historia familiar. Un microcosmos
              donde dominan la mentira y la hipocres??a, tanto moral
              como amorosa, de unos personajes frustrados e infelices, incapaces de escapar a un contexto que los mantiene atrapados. Un padre militar autoritario y conservador
              y una madre fr??gil atrapada en un matrimonio sin amor
              que adem??s le impide desarrollar su carrera como pianista dibujan un universo descompuesto, corrompido y
              angustioso que funciona como perfecta metonimia no
              solo de buena parte de los valores y principios de la sociedad espa??ola de entonces, sino tambi??n de lo que el
              r??gimen franquista representaba??. (Jara Y????ez)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/Cr%C3%ADa-cuervos_ohwwxm.jpg",
              cycle_id: Cycle.order(:id)[8].id)

Movie.create(title: "MUJERES ENAMORADAS",
              runtime: "131 min",
              year: "1969",
              director: "Ken Russell",
              description: "Adaptaci??n de la novela hom??nima de D.H. Lawrence que
              relata las relaciones entre dos hermanas y dos amigos,
              los cuatro marcados por un intenso deseo. ",
              quote: "??Russell presenta esta fascinante historia como una procesi??n de personajes ingeniosos, absurdos y vanguardistas que se enfrentan a grandes preguntas y a??n m??s
              grandes pasiones [???] Si la historia del cine se escribe en
              parte a trav??s de hitos en los que lo previamente imposible de representar se torna visible, Mujeres enamoradas
              es uno de esos hitos. Se trata de la primera aparici??n, en
              una pel??cula de gran presupuesto y sin ning??n tipo de recato, de los genitales masculinos, en una escena de amor
              gay velada que apareci?? solo dos a??os despu??s de que
              Reino Unido legalizase la sodom??a entre hombres mayores de 21 a??os??. (Linda Ruth Williams)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Mujeres-enamoradas_hsr3d9.jpg",
              cycle_id: Cycle.order(:id)[8].id)

Movie.create(title: "PASI??N",
              runtime: "88 min",
              year: "1982",
              director: "Jean-Luc Godard",
              description: "Un director de cine que est?? rodando una pel??cula en la
              que reconstruye cuadros c??lebres conoce a una joven
              que acaba de quedarse sin empleo y ambos se enamoran.",
              quote: "??La constante recreaci??n de pinturas famosas ???con un
              detallismo tan extremo como irreverente- expone c??mo
              el mundo del arte ha reducido el impacto del artista como
              trabajador. Con demasiada frecuencia consideramos la
              obra de arte como un objeto surgido de la inspiraci??n divina, minusvalorando el esfuerzo del artista y anulando
              cualquier posible compromiso con ella. Como si dijera
              que, en el mundo contempor??neo, cualquier arte que aspire al realismo puede ser incluso m??s artificial que un
              sonido mal sincronizado, Godard deja al descubierto las
              mentiras que nos contamos, poco a poco, sobre la forma
              en que funciona el mundo del arte??. (Justine Peres Smith)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438460/Filmoteca/Pasi%C3%B3n_me9cpa.jpg",
              cycle_id: Cycle.order(:id)[8].id)

Movie.create(title: "??SALA:B?? Y EL SAINETE FALLERO",
              runtime: "210 min",
              year: "",
              director: "",
              description: "",
              quote: "??Programa doble fallero con las pel??culas que Vicente
              Escriv?? y Antonio Fos dedicaron al sainete valenciano de
              Baldov??, una de las ra??ces del humor y el costumbrismo
              espa??ol.
              Desde nuestra primera sesi??n, reflexionar sobre los cimientos del cine popular espa??ol ha sido una de las misiones de ??Sala:B??. Este programa doble presenta El virgo
              de Visanteta con la intenci??n de situar en ese contexto la
              obra de Josep Bernat i Baldov??, escritor de mediados del
              XIX que combin?? la s??tira, las costumbres religiosas y el
              erotismo con un controvertido uso del lenguaje valenciano, a favor del pueblo y en contra de dogmas oficialistas.
              La trama combina dos historias de car??cter sexual, la de Visanteta (Maria Rosario Omaggio, La lozana andaluza),
              cuya virginidad parece protegida por poderes divinos, y
              la del T??o Collons (Antonio Ferrandis), aficionado a la sodom??a para disgusto de su esposa. La pel??cula de Escriv?? y su guionista Antonio Fos mantuvo el tono y el verso
              valenciano, pero se vio entonces como una alternativa
              menos transgresora que la de Carles Mira y La portentosa vida del Padre Vicente, del mismo a??o 1978. Si bien
              la pel??cula resulta m??s moralizante que la obra teatral, se
              trata de un rasgo tan t??pico del sainete cl??sico como del
              cine del destape, y lo que trasciende del film hoy en d??a
              es el descaro esperp??ntico y las situaciones cat??lico-surrealistas, que prefiguran particularmente nuestra serie
              B. Menci??n aparte merece el reparto, con una selecci??n
              de actrices y actores de car??cter como Josele Rom??n,
              Pepe Sancho, Luis Barbero o Joan Monle??n y artistas de
              variet??s aut??ctonas como Queta Claver o Rosita Amores.
              El ??xito comercial, sobre todo en el Levante, motiv?? a Escriv?? y Fos a continuar la saga inmediatamente con Visanteta, esta-te queta, con el mismo reparto y basada
              en los personajes de Baldov??, pero ahora con una trama
              original. Un concurso de pedos es aqu?? la escena m??s
              memorable, demostrando una vez m??s que escatolog??a
              y comedia van unidas a nuestra tradici??n. Este d??ptico
              ???er??tico-vern??culo???, en palabras del investigador Pablo Adiego, son de los ??ltimos trabajos de Antonio Fos,
              ???un prol??fico guionista, plenamente integrado en la industria de productos con tir??n popular y con extra??as
              y apasionantes obras como Volver?? a nacer, El transexual, La semana del asesino o Una vela para el diablo.?????.
              (??lex Mend??bil)",
              shorts: "El virgo de Visanteta (Vicente Escriv??, 1979). Int.: Maria
              Rosaria Omaggio, Antonio Ferrandis, Jos?? Sancho, Josele
              Rom??n. Espa??a. 35 mm. VOSE*. Color. 95???
              ??? Visanteta, esta-te queta (Vicente Escriv??, 1979). Int.:
              Maria Rosaria Omaggio, Jos?? Sancho, Josele Rom??n,
              Josep Maria Angelat. Espa??a. 35 mm. VOSE*. Color. 91???
              ",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678438458/Filmoteca/El-virgo-de-Visanteta_n9kmne.jpg",
              cycle_id: Cycle.order(:id)[8].id)

Movie.create(title: "YO CONFIESO",
              runtime: "95 min",
              year: "1953",
              director: "Alfred Hitchcock",
              description: "Convertido en sospechoso de asesinato, un sacerdote
              se debate entre romper el secreto de confesi??n o ser
              acusado de un crimen que no ha cometido.",
              quote: "??El tema del film es la transferencia de la culpabilidad,
              pero renovado aqu?? por la religi??n y por una idea absoluta
              de la confesi??n. A partir del instante en que Montgomery
              Clift recibe en confesi??n la declaraci??n del crimen cometido por Otto Hasse es el sacerdote quien se convierte
              realmente en culpable y as?? es como lo entiende el asesino??. (Fran??ois Truffaut)",
              img_url: "https://res.cloudinary.com/drz3yyvjm/image/upload/v1678443888/Filmoteca/Yo-confieso_gisblv.jpg",
              cycle_id: Cycle.order(:id)[8].id)



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
