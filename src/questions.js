import img78 from "./static/images/78.jpg";

let questions = [
  {
    questionText:
      "En condiciones de tránsito comunes, un vehículo podrá ser conducido marcha atrás sólo:",
    answerOptions: [
      { answerText: "50 mts.", isCorrect: false },
      { answerText: "35 mts.", isCorrect: false },
      { answerText: "En caso de necesidad para estacionar.", isCorrect: true },
      {
        answerText: "Ninguna de las anteriores es correcta.",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Ante la proximidad de vehículos de emergencia:",
    answerOptions: [
      { answerText: "Debe detener su vehículo.", isCorrect: false },
      {
        answerText:
          "Debe despejar rápidamente la calle, deteniendo su vehículo donde no moleste.",
        isCorrect: true,
      },
      {
        answerText: "Debe avisar con las luces al vehículo que le antecede. ",
        isCorrect: false,
      },
      { answerText: "Debe aumentar la velocidad.", isCorrect: false },
    ],
  },
  {
    questionText:
      "Los inspectores de la IMM y/o policía de tránsito están facultados al retiro de la documentación del conductor y/o vehículo.",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: true },
      { answerText: "Falso", isCorrect: false },
    ],
  },
  {
    questionText:
      "Antes de empezar a pasar al vehículo que va adelante, Ud. deberá:",
    answerOptions: [
      { answerText: "Ninguna de las opciones es correcta", isCorrect: false },
      { answerText: "Todas las opciones son correctas", isCorrect: false },
      { answerText: "Hacer cambio de luces", isCorrect: false },
      { answerText: "Tocar la bocina", isCorrect: false },
      {
        answerText: "Mirar espejo retrovisor y prender el señalero",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Si Ud. esta cruzando una calle, la luz amarilla de un semáforo indica:",
    answerOptions: [
      { answerText: "Despacio, escuela", isCorrect: false },
      { answerText: "Detenerse", isCorrect: false },
      { answerText: "Derecho de paso", isCorrect: false },
      {
        answerText: "Atención, obligación a despejar el cruce",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "En un repecho se puede adelantar a otro vehículo:",
    answerOptions: [
      { answerText: "Si, siempre que haga cambio de luces", isCorrect: false },
      { answerText: "Si, si el vehículo cede el paso", isCorrect: false },
      { answerText: "Si", isCorrect: false },
      { answerText: "No", isCorrect: true },
    ],
  },
  {
    questionText:
      "Solo se puede adelantar a otro vehículo por la derecha si éste esta girando o se dispone a girar a la izquierda:",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Los funcionarios del cuerpo de inspectores de tránsito, están facultados para modificar las preferencias establecidas cuando las circunstancias lo requieran:",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Cuando los neumáticos tienen poca presión de aire, se ahora combustible:",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "El uso del cinturón de seguridad es tan importante en la ciudad como en la carretera:",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Es necesario duplicar la distancia entre su vehículo y el que lo antecede en:",
    answerOptions: [
      { answerText: "Amanecer", isCorrect: false },
      { answerText: "Atardecer", isCorrect: false },
      { answerText: "Pavimento resbaloso", isCorrect: false },
      { answerText: "Todas son correctas", isCorrect: true },
    ],
  },
  {
    questionText: "Para señalizar con el brazo un giro a la derecha; el brazo:",
    answerOptions: [
      { answerText: "Extendido horizontalmente", isCorrect: false },
      { answerText: "Hacia abajo", isCorrect: false },
      {
        answerText: "Ninguna es correcta",
        isCorrect: false,
      },
      { answerText: "En ángulo hacia arriba", isCorrect: true },
    ],
  },
  {
    questionText:
      "En los días de lluvia se debe disminuir la velocidad aunque las condiciones del vehículo sean óptimas",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: true },
      { answerText: "Falso", isCorrect: false },
    ],
  },
  {
    questionText: "Un disgusto (alteraciones, discusiones, depresión) afecta:",
    answerOptions: [
      { answerText: "La visión lateral", isCorrect: false },
      { answerText: "La audición", isCorrect: false },
      { answerText: "El tiempo de reacción", isCorrect: true },
      { answerText: "Ninguna es correcta", isCorrect: false },
    ],
  },
  {
    questionText:
      "En una bajada pronunciada para mayor seguridad, poner el vehículo en punto muerto:",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "La calle es el tramo de la vía pública destinado preferentemente a:",
    answerOptions: [
      {
        answerText: "Solamente a la circulación de vehículos livianos",
        isCorrect: false,
      },
      { answerText: "Solamente la circulación de peatones", isCorrect: false },
      {
        answerText: "La circulación de cualquier tipo de vehículos automotores",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Con el coche cargado las distancias para detenerse serán menores",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "Cuando se maneja por períodos de más de cuatro horas se deberá descansar por lo menos:",
    answerOptions: [
      { answerText: "10 minutos", isCorrect: false },
      { answerText: "50 minutos", isCorrect: false },
      { answerText: "60 minutos", isCorrect: false },
      { answerText: "20 minutos", isCorrect: true },
    ],
  },
  {
    questionText:
      "La distancia prudencial entre dos vehículos que circulan en la misma dirección, es aquellla que permite al conductor ver las ruedas traseras del vehículo que va delante:",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText: "El tiempo de reacción del conductor se ve afectado por:",
    answerOptions: [
      { answerText: "El estado de la ruta", isCorrect: false },
      { answerText: "La velocidad a la cual conduce", isCorrect: false },
      { answerText: "Los defectos mecánicos del vehículo", isCorrect: false },
      { answerText: "El cansancio", isCorrect: true },
    ],
  },
  {
    questionText:
      "Los objetos duros y con puntas depositados en los estantes delanteros y traseros, se pueden convertir en royectiles peligrosos en una frenada brusca",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Aun tomando descansos, no se deberá conducir por más de 9 horas contínuas",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "A partir de los 35 y 40 años de edad se va perdiendo la rapidez para reaccionar.",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "La velocidad adecuada de circulación de un vehículo en caso de aglomeración de personas es:",
    answerOptions: [
      { answerText: "15 km/h", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "25 km/h", isCorrect: false },
      { answerText: "A paso de peatón", isCorrect: true },
    ],
  },
  {
    questionText:
      "Qué debe hacer un conductor al iniciar un giro a la izquierda desde una calle de doble mano.",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      {
        answerText: "Acercarse lo más a la derecha posible",
        isCorrect: false,
      },
      {
        answerText: "Ubicarse sobre el lado izquierdo del eje de la calzada",
        isCorrect: false,
      },
      {
        answerText:
          "Aproximarse a la linea central o eje de la calle, señalizando con suficiente anticipación.",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Los peatones que circulan por la vereda tienen preferencia de paso ante un vehículo que la atraviesa para entrar o salir de un garaje.",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Los vehículos que tengan sus neumáticos con bandas de rodamiento gastadas",
    answerOptions: [
      { answerText: "Podrán circular solo de noche", isCorrect: false },
      { answerText: "Podrán circular solo de día", isCorrect: false },
      { answerText: "No podrán circular", isCorrect: true },
    ],
  },
  {
    questionText: "Si es encandilado por otro vehículo Ud. deberá",
    answerOptions: [
      { answerText: "a) Hacer cambio de luces", isCorrect: false },
      { answerText: "b) Colocar sus luces cortas", isCorrect: false },
      {
        answerText: "c) Tirarse a la banquina si el choque es inevitable",
        isCorrect: false,
      },
      { answerText: "d) Solo a y c son correctas", isCorrect: true },
    ],
  },
  {
    questionText: "Para quien es obligatorio el uso del cinturón de seguridad?",
    answerOptions: [
      {
        answerText:
          "Sólo para los ocupantes de los asientos traseros de los vehículos automotores",
        isCorrect: false,
      },
      {
        answerText:
          "Sólo para los ocupantes de los asientos delanteros de los vehículos automotores",
        isCorrect: false,
      },
      { answerText: "Ninguna de las anteriores", isCorrect: false },
      {
        answerText: "Para todos los ocupantes del vehículo.",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Derecho preferente de paso es:",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      {
        answerText:
          "La facultad del conductor de un vehículo para cambiar de dirección careciendo de preferencia",
        isCorrect: false,
      },
      {
        answerText:
          "La facultad del conductor de un vehículo para no detener la marcha al ingresar a una calle de preferencia",
        isCorrect: false,
      },
      {
        answerText:
          "La facultad de un peatón o conductor de un vehículo para proseguir la marcha",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "En un cruce no regulado ¿Que vehículo deberá ceder el derecho preferente de paso?",
    answerOptions: [
      { answerText: "El que llega primero al cruce1", isCorrect: false },
      { answerText: "El que aparece por la derecha", isCorrect: false },
      { answerText: "El que aparece por la izquierda", isCorrect: true },
      { answerText: "El que llega último al cruce", isCorrect: false },
    ],
  },
  {
    questionText:
      "El conductor de un vehículo puede sobrepasar a otro por la derecha cuando:",
    answerOptions: [
      {
        answerText: "El vehículo de adelante va a doblar a la derecha",
        isCorrect: false,
      },
      {
        answerText: "El vehículo de adelante da paso a otros",
        isCorrect: false,
      },
      { answerText: "Nunca", isCorrect: false },
      {
        answerText: "El vehículo de adelante va a doblar a la izquierda",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "En caso de quedarse sin frenos, cuando el pedal ofrece algo de resistencia lo primero a intentar es bombearlo varias veces",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Las bebidas alcohólicas tomadas junto con algunos antialérgicos disminuyen la capacidad de conducir",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText: "Con mucha carga en la valija del automóvil se afectará",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Ud. puede circular sin espejo retrovisor cuando circula a baja velocidad?",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText: "Cuando llueve:",
    answerOptions: [
      {
        answerText: "Debe circular en el centro de la calzada",
        isCorrect: false,
      },
      {
        answerText: "Debe circular a la derecha del centro de la calzada",
        isCorrect: false,
      },
      { answerText: "Ninguna es correcta", isCorrect: true },
    ],
  },
  {
    questionText:
      "Si observa que encienden las luces blancas del vehículo, ello significa:",
    answerOptions: [
      { answerText: "Que va a girar a la derecha", isCorrect: false },
      { answerText: "Que va a frenar", isCorrect: false },
      { answerText: "Que se dispone a pasar a otro", isCorrect: false },
      { answerText: "Que da marcha atrás", isCorrect: true },
    ],
  },
  {
    questionText:
      "Hasta los 70 años de edad no se altera la rapidez para reaccionar",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "El ruido que produce el silenciador en mal estado no aumenta la fatiga del conductor",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "La IMM está facultada para retirar de la vía pública los vehículos mal estacionados o estacionados en lugar prohibido",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText: "Cruce peatonal es:",
    answerOptions: [
      {
        answerText: "Ninguna es correcta",
        isCorrect: false,
      },
      {
        answerText:
          "Parte de la vereda donde se debe esperar hasta poder cruzar",
        isCorrect: false,
      },
      {
        answerText:
          "La senda de seguridad formada por la prolongación (imaginaria o demarcada) del eje de la calzada",
        isCorrect: false,
      },
      {
        answerText:
          "Parte de la calle habilitada para ser atravesada por los peatones",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Por norma general Ud. debe circular por la izquierda de la calzada",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "Las rutas nacionales son la única via de circulación de preferencia aun cuando las transversales no tengan el signo de PARE",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Ante destellantes amarillos instalados en las cercanías de las escuelas, a que velocidad debe circular:",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
  {
    questionText:
      "Antes de empezar a pasar al vehículo que va adelante, Ud. deberá:",
    answerOptions: [
      { answerText: "A 15 km/h", isCorrect: false },
      { answerText: "A 25 km/h", isCorrect: false },
      { answerText: "A 30 km/h", isCorrect: false },
      { answerText: "A paso de peatón", isCorrect: true },
    ],
  },
  {
    questionText:
      "Antes de empezar a pasar al vehículo que va adelante, Ud. deberá:",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
  {
    questionText:
      "Nunca debe adelantarse a un vehículo que esta doblando a la derecha",
    answerOptions: [
      {
        answerText: "Verdadero",
        isCorrect: false,
      },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText: "Que debe hacer ud. si es adelantado por otro vehículo?",
    answerOptions: [
      { answerText: "Aumentar la velocidad", isCorrect: false },
      { answerText: "Frenar bruscamente", isCorrect: false },
      { answerText: "Encender las luces", isCorrect: false },
      { answerText: "Mantener la velocidad o disminuirla", isCorrect: true },
    ],
  },
  {
    questionText: "Adelantamiento correcto es una maniobra efectuada:",
    answerOptions: [
      { answerText: "Nunca se debe adelantar", isCorrect: false },
      { answerText: "Por la banquina si hubiere", isCorrect: false },
      {
        answerText: "Por el costado derecho del vehículo que se va a adelantar",
        isCorrect: false,
      },
      {
        answerText:
          "Por el costado izquierdo del vehículo que se va a adelantar",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Para conducir adecuadamente es importante observar la luz del semáforo que esta de frente a Ud.",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Que tramo de la calle se debe utilizar exclusivamente para manejar un vehículo?",
    answerOptions: [
      { answerText: "La banquina", isCorrect: false },
      { answerText: "La acera", isCorrect: false },
      {
        answerText: "Ninguna es correcta",
        isCorrect: false,
      },
      { answerText: "La calzada", isCorrect: true },
    ],
  },
  {
    questionText:
      "Tienen preferencia de paso cuando hagan las señales correspondientes",
    answerOptions: [
      { answerText: "Las ambulancias", isCorrect: false },
      { answerText: "Patrulleros y bomberos", isCorrect: false },
      {
        answerText: "Los vehículos del departamento de transito",
        isCorrect: false,
      },
      { answerText: "Todas son correctas", isCorrect: true },
    ],
  },
  {
    questionText:
      "Al encontrarse la calle mojada por la lluvia ¿Que debe hacer ud?",
    answerOptions: [
      { answerText: "a) Disminuir la velocidad", isCorrect: false },
      { answerText: "b) Aumentar la velocidad", isCorrect: false },
      { answerText: "c) Estar atento a frenar", isCorrect: false },
      { answerText: "d) Solo a y c son correctas", isCorrect: true },
    ],
  },
  {
    questionText:
      "La velocidad máxima a la que se debe conducir en la zona urbana, salvo expresas excepciones, es:",
    answerOptions: [
      { answerText: "20 km/h", isCorrect: false },
      { answerText: "60 km/h", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "45 km/h", isCorrect: true },
    ],
  },
  {
    questionText:
      "Para señalar con el brazo la disminución de la velocidad o detención del vehículo, se deberá colocar:",
    answerOptions: [
      { answerText: "Extendido horizontalmente", isCorrect: false },
      { answerText: "En angulo recto hacia abajo", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Extendido hacia abajo", isCorrect: true },
    ],
  },
  {
    questionText:
      "Las luces largas deberán sustituirse por las de alcance medio cuando haya riesgo de encandilarse",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Cuando un automóvil al salir del garaje cruza la vereda, obtiene la preferencia sobre los peatones que circulan en ella",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText: "La visión se reduce:",
    answerOptions: [
      { answerText: "En horas de la noche", isCorrect: false },
      { answerText: "Con el encandilamiento", isCorrect: false },
      { answerText: "Cuando mayor velocidad se desarrolla", isCorrect: false },
      { answerText: "Todas son correctas", isCorrect: true },
    ],
  },
  {
    questionText:
      "El color de las luces que proyectan hacia delante los vehículos pueden ser:",
    answerOptions: [
      { answerText: "Rojas o blancas", isCorrect: false },
      { answerText: "Verdes o blancas", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Amarillas o blancas", isCorrect: true },
    ],
  },
  {
    questionText:
      "Durante la carga de combustible se puede dejar el motor encendido",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "Ante la proximidad de vehículos de emergencia, despejar rápidamente la calzada permaneciendo donde no moleste",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "En las calles de doble sentido los vehículos que circulen en sentido opuesto al cruzarse:",
    answerOptions: [
      { answerText: "Deberán encender las luces bajas", isCorrect: false },
      {
        answerText:
          "Deberán circular por el eje de la calzada demarcada o imaginaria",
        isCorrect: false,
      },
      { answerText: "hacer un destello de luces", isCorrect: false },
      {
        answerText: "No pasarán el eje de la calzada demarcada o imaginaria",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Por norma general Ud debe circular por la mitad derecha de la calzada",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      'Un conductor al enfrentar una señal de "Ceda el Paso" deberá:',
    answerOptions: [
      { answerText: "Detenerse siempre", isCorrect: false },
      { answerText: "Seguir la marcha a la misma velocidad", isCorrect: false },
      { answerText: "Acelerar", isCorrect: false },
      {
        answerText: "Reducir la velocidad y detenerse siempre si es necesario",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Nunca debe adelantarse aun vehículo que esta dando paso a peatones",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "La vereda es el tramo de vía publica preferentemente destinado a:",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Otros usos", isCorrect: false },
      { answerText: "El uso de los vehículos automotores", isCorrect: false },
      { answerText: "El uso de peatones", isCorrect: true },
    ],
  },
  {
    questionText:
      "En el cruce cuyos semáforos se encuentran apagados o descompuestos la preferencia será de:",
    answerOptions: [
      {
        answerText: "Los vehículos que aparecen por la izquierda",
        isCorrect: false,
      },
      { answerText: "Los que llegan primero al ", isCorrect: false },
      { answerText: "Los que circulan por una avenida", isCorrect: false },
      {
        answerText: "Los vehículos que aparecen por la derecha",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "Siempre se debe prestar atención a la luz del semáforo que está frente a uno:",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText: "Al conducir en carretera su fatiga aumentará si.",
    answerOptions: [
      { answerText: "a) Escucha música", isCorrect: false },
      {
        answerText: "b) Si fuma con las ventanas cerradas",
        isCorrect: false,
      },
      { answerText: "c) Si el paisaje es monótono", isCorrect: false },
      { answerText: "d) Solo b y c son correctas", isCorrect: true },
    ],
  },
  {
    questionText:
      "Cuando se trata de evitar un choque de frente en carretera Ud deberá:",
    answerOptions: [
      { answerText: "Frenar", isCorrect: false },
      { answerText: "Encender las luces largas", isCorrect: false },
      { answerText: "Rebajar los cambios", isCorrect: false },
      { answerText: "Desviarse hacia la banquina", isCorrect: true },
    ],
  },
  {
    questionText:
      "Debe prestar atención de no encandilar a los que vienen en sentido contrario usando las luces cortas",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Usted puede circular sin espejo retrovisor cuando el vehículo sea de transporte de carga",
    answerOptions: [
      { answerText: "Verdadero", isCorrect: false },
      { answerText: "Falso", isCorrect: true },
    ],
  },
  {
    questionText:
      "En pavimento mojado nunca se debe circular el vehículo en punto muerto",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
  {
    questionText:
      "Que debe hacer un conductor al indicar el giro a la derecha?",
    answerOptions: [
      {
        answerText:
          "Acercarse a la izquierda lo mas posible y prender el señalero",
        isCorrect: false,
      },
      { answerText: "Ninguna es correcta", isCorrect: false },
      {
        answerText: "Mantenerse en el eje de la calzada y prender el señalero",
        isCorrect: false,
      },
      {
        answerText:
          "Acercarse lo más a la derecha posible y prender el señalero",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      "La velocidad adecuada de circulación frente a escuelas en horarios de entrada o salida",
    answerOptions: [
      { answerText: "15 km/h", isCorrect: false },
      { answerText: "25 km/h", isCorrect: false },
      { answerText: "30 km/h", isCorrect: false },
      { answerText: "A paso de peaton", isCorrect: true },
    ],
  },
  {
    questionText: "Si mientras va circulando revienta un neumático ",
    answerOptions: [
      { answerText: "Frena bruscamente", isCorrect: false },
      {
        answerText:
          "Quita el pie del acelerador y gira por el lado que revento el neumatico",
        isCorrect: false,
      },
      { answerText: "Apaga el motor", isCorrect: false },
      {
        answerText:
          "Frena suavemente, arrimando el auto derecho hasta detenerse",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Si Ud. debe estacionar en bajada",
    answerOptions: [
      {
        answerText:
          "Aplica el freno de mano y gira las ruedas contrario al cordón de la vereda",
        isCorrect: false,
      },
      {
        answerText: "Deja derecho el auto y le pone cambio",
        isCorrect: false,
      },
      {
        answerText: "Deja derecho el auto y aplica freno de mano",
        isCorrect: false,
      },
      {
        answerText:
          "Aplica el freno de mano y gira las ruedas hacia el cordón de la vereda.",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Cuando Ud. se enfrenta a la siguiente silueta, ella Indica",
    img: "/src/static/images/78.jpg",
    answerOptions: [
      { answerText: "Pare", isCorrect: false },
      { answerText: "No estacionar ni detenerse", isCorrect: false },
      { answerText: "Cruce Ferroviario", isCorrect: false },
      { answerText: "Ceda el Paso", isCorrect: true },
    ],
  },
  {
    questionText:
      "Como se porta ud, cuando se enfrenta a un agente o inspector de tránsito en la siguiente posición",
    img: "/src/static/images/79.jpg",
    answerOptions: [
      { answerText: "Prosigue la marcha", isCorrect: false },
      {
        answerText: "Sabe que solo puede girar a la derecha",
        isCorrect: false,
      },
      {
        answerText: "Sabe que solo puede girar a la izquierda",
        isCorrect: false,
      },
      { answerText: "Detiene totalmente la marcha", isCorrect: true },
    ],
  },
  {
    questionText: "Ante la siguiente señal. ¿Como se comporta ud?",
    img: "/src/static/images/80.jpg",
    answerOptions: [
      { answerText: "a) Nunca toca la bocina", isCorrect: false },
      {
        answerText: "b) Solo tocará la bocina para evitar un accidente",
        isCorrect: false,
      },
      {
        answerText:
          "c) Solo tocará ante una emergencia (por ej. si hay un herido)",
        isCorrect: false,
      },
      { answerText: "d) Solo b y c son correctas", isCorrect: true },
    ],
  },
  {
    questionText: "La siguiente señal advierte:",
    img: "/src/static/images/81.jpg",
    answerOptions: [
      { answerText: "Camino sinuoso", isCorrect: false },
      { answerText: "Pavimento resbaladizo", isCorrect: true },
      { answerText: "Prohibido conducir en zig-zag", isCorrect: false },
      { answerText: "Prohibido conducir en estado etilico", isCorrect: false },
    ],
  },
  {
    questionText: "Cuando ud. enfrenta la siguiente silueta ella le indica:",
    img: "/src/static/images/82.jpg",
    answerOptions: [
      { answerText: "Ceda el Paso", isCorrect: false },
      { answerText: "Cruce Ferroviario", isCorrect: false },
      { answerText: "No estacionar", isCorrect: false },
      { answerText: "Pare", isCorrect: true },
    ],
  },
  {
    questionText:
      "Cuando Ud. se enfrenta a la siguiente señal de transito Ud. sabe que:",
    img: "/src/static/images/83.jpg",
    answerOptions: [
      { answerText: "Puede girar a la izquierda", isCorrect: false },
      { answerText: "No puede girar a la izquierda", isCorrect: false },
      {
        answerText: "No puede girar en la mitad de la cuadra",
        isCorrect: false,
      },
      { answerText: "No puede girar en U", isCorrect: true },
    ],
  },
  {
    questionText: "Ante la siguiente señal de transito Ud. puede circular a:",
    img: "/src/static/images/84.jpg",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "45 km/h máximo", isCorrect: false },
      { answerText: "60 km/h o más", isCorrect: false },
      { answerText: "75 km/h máximo", isCorrect: true },
    ],
  },
  {
    questionText: "La siguiente señal advierte:",
    img: "/src/static/images/85.jpg",
    answerOptions: [
      { answerText: "Próximamente dunas", isCorrect: false },
      { answerText: "Baches", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Próximamente despertadores", isCorrect: true },
    ],
  },
  {
    questionText: "Como actua ud. ante esta señal?",
    img: "/src/static/images/86.jpg",
    answerOptions: [
      { answerText: "Estacionamiento zona azul", isCorrect: false },
      {
        answerText: "Estacionamiento reservado para vehículos oficiales",
        isCorrect: false,
      },
      { answerText: "No estacionar", isCorrect: false },
      { answerText: "No estacionar ni detenerse", isCorrect: true },
    ],
  },
  {
    questionText: "Ante éseta señal de transito ud. puede circular",
    img: "/src/static/images/87.jpg",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "30 km/h máximo", isCorrect: false },
      { answerText: "45 km/h o más", isCorrect: false },
      { answerText: "45 km/h maximo", isCorrect: true },
    ],
  },
  {
    questionText: "Que le indica a Ud. esta señal?",
    img: "/src/static/images/88.jpg",
    answerOptions: [
      { answerText: "Todas son correctas", isCorrect: false },
      { answerText: "Próximamente curva a la izquierda", isCorrect: false },
      {
        answerText: "Proximamente aparecerá tránsito sobre la izquierda",
        isCorrect: false,
      },
      { answerText: "Próximamente curva a la derecha", isCorrect: true },
    ],
  },
  {
    questionText: "Esta señal de transito advierte:",
    img: "/src/static/images/89.jpg",
    answerOptions: [
      { answerText: "Atención gente en obra", isCorrect: false },
      { answerText: "Próximamente plaza de deportes", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Despacio escuela", isCorrect: true },
    ],
  },
  {
    questionText: "Como se comporta ante esta señal?",
    img: "/src/static/images/90.jpg",
    answerOptions: [
      { answerText: "No se puede girar a la izquierda", isCorrect: false },
      {
        answerText: "Ud. sabe que nadie puede aparecer por la izquierda",
        isCorrect: false,
      },
      {
        answerText: "Ud. sabe que próximamente se encontrará con calle cerrada",
        isCorrect: false,
      },
      {
        answerText: "Ud. sabe que no puede girar a la derecha",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Que indica la siguiente señal?",
    img: "/src/static/images/91.jpg",
    answerOptions: [
      { answerText: "Atención una sola mano de circulación", isCorrect: false },
      { answerText: "Atención tránsito en contra", isCorrect: false },
      { answerText: "No estacionar en doble fila", isCorrect: false },
      { answerText: "No adelantar", isCorrect: true },
    ],
  },
  {
    questionText: "Que indica esta señal?",
    img: "/src/static/images/92.jpg",
    answerOptions: [
      { answerText: "Pavimento resbaladizo", isCorrect: false },
      { answerText: "Próximamente pavimente resbaladizo", isCorrect: false },
      { answerText: "Fin de camino sinuoso", isCorrect: false },
      { answerText: "Camino sinuoso", isCorrect: true },
    ],
  },
  {
    questionText: "La siguiente señal de tránsito advierte:",
    img: "/src/static/images/93.jpg",
    answerOptions: [
      { answerText: "Cuidado niños jugando", isCorrect: false },
      { answerText: "Atención gente en obra", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Próximamente cruce peatonal", isCorrect: true },
    ],
  },
  {
    questionText: "Que le indica esta señal?",
    img: "/src/static/images/94.jpg",
    answerOptions: [
      { answerText: "Calle cerrada", isCorrect: false },
      { answerText: "Próximamente cebra", isCorrect: false },
      { answerText: "No estacionar", isCorrect: false },
      { answerText: "Contramano", isCorrect: true },
    ],
  },
  {
    questionText:
      "Que indica el agente o inspector de tránsito en la siguiente posición?",
    img: "/src/static/images/95.jpg",
    answerOptions: [
      {
        answerText:
          "Solo continúan la marcha los vehículos que vienen de su derecha",
        isCorrect: false,
      },
      {
        answerText:
          "Solo continúan la marcha los vehículos que vienen de su izquierda",
        isCorrect: false,
      },
      { answerText: "Proseguir la marcha", isCorrect: false },
      {
        answerText: "Detiene el transito en todos los sentidos",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Ante la siguiente señal? Como se comporta ud?",
    img: "/src/static/images/96.jpg",
    answerOptions: [
      {
        answerText: "Solo toca bocina frente a los hospitales",
        isCorrect: false,
      },
      { answerText: "Solo toca la bocina", isCorrect: false },
      { answerText: "Nunca toca la bocina", isCorrect: false },
      { answerText: "Ninguna es correcta", isCorrect: true },
    ],
  },
  {
    questionText: "Que le advierte a ud. la siguiente señal de transito?",
    img: "/src/static/images/97.jpg",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Rampa", isCorrect: false },
      { answerText: "Próximamente bajada", isCorrect: false },
      { answerText: "Próximamente repecho", isCorrect: true },
    ],
  },
  {
    questionText: "Que debe hacer ud. ante la siguiente señal?",
    img: "/src/static/images/98.jpg",
    answerOptions: [
      {
        answerText: "Estacionamiento reservado para vehiculos oficiales",
        isCorrect: false,
      },
      { answerText: "No estacionar ni detenerse", isCorrect: false },
      { answerText: "Estacionamiento zona azul", isCorrect: false },
      { answerText: "No estacionar", isCorrect: true },
    ],
  },
  {
    questionText: "Ante la siguiente señal de transito Ud. puede circular a:",
    img: "/src/static/images/99.jpg",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "85 km/h o más", isCorrect: false },
      { answerText: "45 km/h o más", isCorrect: false },
      { answerText: "80 km/h máximo", isCorrect: true },
    ],
  },
  {
    questionText: "Que le advierte a ud. esta señal?",
    img: "/src/static/images/100.jpg",
    answerOptions: [
      { answerText: "Próximamente curva a la izquierda", isCorrect: false },
      {
        answerText: "Próximamente aparecerá transito por la izquierda",
        isCorrect: false,
      },
      { answerText: "Ninguna es correcta", isCorrect: false },
      {
        answerText: "Proximamente prohibido doblar a la izquierda",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Que le advierte a ud. esta señal?",
    img: "/src/static/images/106.jpg",
    answerOptions: [
      { answerText: "Despacio escuela", isCorrect: false },
      { answerText: "Peatonal", isCorrect: false },
      { answerText: "Obras", isCorrect: true },
    ],
  },
  {
    questionText: "Que le advierte a ud. esta señal?",
    img: "/src/static/images/107.jpg",
    answerOptions: [
      { answerText: "Cruce", isCorrect: false },
      { answerText: "Bifurcacion en T", isCorrect: false },
      { answerText: "Bifurcacion en Y", isCorrect: true },
    ],
  },
  {
    questionText: "Que le advierte a ud. esta señal?",
    img: "/src/static/images/108.jpg",
    answerOptions: [
      { answerText: "Puente angosto", isCorrect: false },
      { answerText: "Estrechamiento de calzada", isCorrect: false },
      {
        answerText: "Calzada irregular o próximamente despertadores",
        isCorrect: true,
      },
    ],
  },
  {
    questionText: "Que le advierte a ud. esta señal?",
    img: "/src/static/images/109.jpg",
    answerOptions: [
      { answerText: "Tramo sinuoso", isCorrect: false },
      { answerText: "Curva", isCorrect: false },
      { answerText: "Curva pronunciada", isCorrect: true },
    ],
  },
  {
    questionText: "Que le advierte a ud. esta señal?",
    img: "/src/static/images/110.jpg",
    answerOptions: [
      { answerText: "Bifurcacion en Y", isCorrect: false },
      { answerText: "Camino resbaladizo", isCorrect: false },
      { answerText: "Vía lateral", isCorrect: true },
    ],
  },
  {
    questionText: "Que le advierte a ud. esta señal?",
    img: "/src/static/images/111.jpg",
    answerOptions: [
      { answerText: "Animales sueltos", isCorrect: false },
      { answerText: "Estancia", isCorrect: false },
      { answerText: "Paso de animales", isCorrect: true },
    ],
  },
  {
    questionText: "Como se comporta usted ante la siguiente señal?",
    img: "/src/static/images/131.jpg",
    answerOptions: [
      {
        answerText: "Usted solo puede girar a la izquierda.",
        isCorrect: false,
      },
      {
        answerText:
          "Disminuye la velocidad pues próximamente se encontrará con una calle cerrada",
        isCorrect: false,
      },
      {
        answerText:
          "No le da importancia pues sabe que nadie puede aparecer por la derecha",
        isCorrect: false,
      },
      { answerText: "No puede girar a la izquierda", isCorrect: true },
    ],
  },
  {
    questionText: "Que le indica la siguiente señal de transito?",
    img: "/src/static/images/132.jpg",
    answerOptions: [
      { answerText: "Solo puede circular por la izquierda", isCorrect: false },
      { answerText: "Debe circular por la banquina", isCorrect: false },
      { answerText: "Solo puede circular por la derecha", isCorrect: true },
    ],
  },
  {
    questionText: "Que indica esta señal?",
    img: "/src/static/images/133.jpg",
    answerOptions: [
      { answerText: "Ninguna es correcta", isCorrect: false },
      { answerText: "Próximamente caserío", isCorrect: false },
      { answerText: "Calle cerrada", isCorrect: false },
      { answerText: "Intersección", isCorrect: true },
    ],
  },
  {
    questionText: "Ante la siguiente señal, a que velocidad puede circular?",
    img: "/src/static/images/134.jpg",
    answerOptions: [
      { answerText: "a 75 km/h máximo", isCorrect: false },
      { answerText: "a 45 km/h máximo", isCorrect: false },
      { answerText: "a 60 km/h máximo", isCorrect: true },
    ],
  },
  {
    questionText: "Que significa la siguiente señal?",
    img: "/src/static/images/135.jpg",
    answerOptions: [
      { answerText: "Prohibido estacionar", isCorrect: false },
      { answerText: "Prohibido adelantar", isCorrect: false },
      { answerText: "No existe", isCorrect: true },
    ],
  },
  {
    questionText: "Un vehículo que circula a 65 km/h necesita para detenerse",
    answerOptions: [
      { answerText: "10 metros", isCorrect: false },
      { answerText: "25 metros", isCorrect: false },
      { answerText: "2 cuadras", isCorrect: false },
      { answerText: "Media cuadra", isCorrect: true },
    ],
  },
  {
    questionText: "En carretera se debe aminorar la marcha en:",
    answerOptions: [
      { answerText: "Zonas urbanas y caserios", isCorrect: false },
      { answerText: "Curvas y cruces", isCorrect: false },
      { answerText: "Pasos a nivel y puentes", isCorrect: false },
      { answerText: "Todas son corractas", isCorrect: true },
    ],
  },
  {
    questionText:
      "Cuando un vehículo sufre un desperfecto en la carretera se debe  colocar la baliza o triangulo por lo menos a 50 metros",
    answerOptions: [
      { answerText: "Falso", isCorrect: false },
      { answerText: "Verdadero", isCorrect: true },
    ],
  },
];

export default questions;