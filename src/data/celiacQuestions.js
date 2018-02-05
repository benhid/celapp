module.exports = {SetQuestion: [
    {headQuestions: "Cuestionario1",
      preguntas:[{pregunta:"¿Cuál es su molestia predominante?",
      type:"desplegable",
      enum: ["Digestiva", "Osteoarticular (dolor óseo, inflamación articular, osteoporosis ...)","Dermatológica",
        "Neuropsiquiatrica (insomnio, dolor de cabeza, depresión, ansiedad ...)",
        "Metabólica (cansancio, problemas de peso ...)"]}]},
    {headQuestions: "¿Quién eres?",
      preguntas:[

      {pregunta:"Sexo",
      type: "radio",
      enum: ["Hombre", "Mujer"]},

      {pregunta:"Fecha de nacimiento",
      type: "date"},

      {pregunta:"Lugar de nacimiento",
      type: "libre"},

      {pregunta:"Origen familiar",
      type: "desplegable",
      enum:["Caucasiano", "Árabe", "Magrebí", "Africano", "Negro americano", "Indú", "Asiático", "Nativo americano"]}
    ]},

    {headQuestions: "Como es su familia",
      preguntas:[

        {pregunta:"¿Algún familiar celíaco?",
        type: "radio",
        enum: ["Si ","No "]},

        {pregunta:"¿Algún familiar con Diabetes Tipo II?",
        type: "radio",
        enum: ["Si ","No "]},

        {pregunta:"¿Algún familiar con problemas digestivos no aclarados?",
        type: "radio",
        enum: ["Si ","No "]}
    ]},

    {headQuestions: "Algo más sobre usted",
      preguntas:[

        {pregunta:"Color de pelo y piel",
    type: "desplegable",
    enum:["Rubio", "Castaño","Moreno", "Pelirojo", "Negro"]},

    {pregunta:"Color de sus ojos",
    type: "desplegable",
    enum: ["Azules", "Verdes","Marrones", "Negros", "Grises"]},

    {pregunta:"¿Cómo es su salud?",
    type: "desplegable",
    enum: ["Enfermizo", "Normal","Muy saludable"]},

    {pregunta:"Estatura",
    type: "libre"},

    {pregunta:"Peso",
    type: "libre"},

    {pregunta: "¿Algún problema crónico o recurrente de piel no aclarado? ¿Se le cae el pelo o tiene uñas débiles?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta: "¿Se encuentra más cansado de lo que debería?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta: "¿Es intolerante a la lactosa, fructosa o algún hidrato de carbono?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta: "¿Ha sido positivo en algún test de intolerancia a alimentos?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Tiene dolor de cabeza no aclarado?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Tiene usted tendencia alérgica (asma bronquial, rinitis, conjuntivitis ...)?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Es alérgico a los antibióticos?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Existe alergía a otros medicamentos?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Existe alergía a algún alimento?",
    type: "radio",
    enum: ["Si ","No "]}
    ]},

    {headQuestions: "Usted y su fertilidad: Mujeres",
      preguntas:[

        {pregunta:"¿Alteraciones menstruales?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Ha tenido dificultades para concebir hijos?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Abortos, problemas en el embarazo o desarrollo del feto?",
    type: "radio",
    enum: ["Si ","No "]}
    ]},

    {headQuestions: "Usted y su fertilidad: Hombres",
      preguntas:[

        {pregunta:"¿Tiene hijos?",
    type: "radio",
    enum: ["Si ","No "]},

    {pregunta:"¿Ha tenido dificultades para concebir hijos?",
    type: "radio",
    enum: ["Si ","No "]}
    ]},

    {headQuestions: "Síntomas digestivos:",
      preguntas:[
    {pregunta:"¿Ha padecido frecuentemente algunos síntomas de los que se preguntan a continuación?",
      type: "checkbox",
      enum:["Diarrea", "Estreñimiento", "Dolor abdominal no aclarado", "Dolor abdominal que le despierta", "Nauseas/vómitos después de comer", "Digestiones lentas",
      "inflamación abdominal tras las comidas", "Acidez, síntomas de reflujo", "Inflamación de la lengua", "Úlceras aftosas recurrentes orales", "Eczema o picor anal no aclarado", "Ganancia de peso no explicada", "Pérdida de peso no explicada"]}
    ]},

    
    

    



          
  
]};
