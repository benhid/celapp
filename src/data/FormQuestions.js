module.exports = {
  title: "Formulario Celiacos",
  type: "object",
  required: ["title"],
  properties: {
    title: {title:"Cuestionario 1", type: "object", properties:{
        "¿Cuál es su molestia predominante?":
        {type: "string",
        enum: ["Digestiva", "Osteoarticular (dolor óseo, inflamación articular, osteoporosis ...)","Dermatológica",
        "Neuropsiquiatrica (insomnio, dolor de cabeza, depresión, ansiedad ...)",
        "Metabólica (cansancio, problemas de peso ...)"]},
        "multipleChoicesList": {"type": "number","title": "Sexo","enum": ["Hombre", "Mujer"]},
        "Fecha de nacimiento":{type:"string"},
        "Lugar de nacimiento":{type:"string"},
        "Origen familiar":{type:"string", enum:["Caucasiano", "Árabe", "Magrebí", "Africano", "Negro americano", "Indú", "Asiático", "Nativo americano"]},
        "¿Algún familiar celíaco?":{type:"string", enum:["Sí", "No"]},
        "¿Algún familiar con Diabetes Tipo II?":{type:"string", enum:["Sí", "No"]},
        "¿Algún familiar con problemas digestivos no aclarados?":{type:"string", enum:["Sí", "No"]},
        "Color de pelo y piel": {type:"string", enum:["Rubio", "Castaño","Moreno", "Pelirojo", "Negro"]},
        "Color de sus ojos":{type:"string", enum: ["Azules", "Verdes","Marrones", "Negros", "Grises"]},
        "¿Cómo es su salud?":{type:"string", enum:["Enfermizo", "Normal","Muy saludable"]},
        "Estatura":{type:"string"},
        "Peso":{type:"string"},
        "¿Algún problema crónico o recurrente de piel no aclarado? ¿Se le cae el pelo o tiene uñas débiles?":{type:"string",  enum:["Sí", "No"]},
        "¿Se encuentra más cansado de lo que debería?":{type:"string",  enum:["Sí", "No"]},
        "¿Es intolerante a la lactosa, fructosa o algún hidrato de carbono?":{type:"string",  enum:["Sí", "No"]},
        "¿Ha sido positivo en algún test de intolerancia a alimentos?":{type:"string",  enum:["Sí", "No"]},
        "¿Tiene dolor de cabeza no aclarado?":{type:"string",  enum:["Sí", "No"]},
        "¿Tiene usted tendencia alérgica (asma bronquial, rinitis, conjuntivitis ...)?":{type:"string",  enum:["Sí", "No"]},
        "¿Es alérgico a los antibióticos?":{type:"string",  enum:["Sí", "No"]},
        "¿Existe alergía a otros medicamentos?":{type:"string",  enum:["Sí", "No"]},
        "¿Existe alergía a algún alimento?":{type:"string",  enum:["Sí", "No"]},
        "¿Alteraciones menstruales?":{type:"string",  enum:["Sí", "No"]},
        "¿Ha tenido dificultades para concebir hijos?":{type:"string",  enum:["Sí", "No"]},
        "¿Abortos, problemas en el embarazo o desarrollo del feto?":{type:"string",  enum:["Sí", "No"]},
        "¿Tiene hijos?":{type:"string",  enum:["Sí", "No"]},
        "¿Ha tenido dificultades para concebir hijos?":{type:"string",  enum:["Sí", "No"]},
        "¿Ha padecido frecuentemente algunos síntomas de los que se preguntan a continuación?":{type:"string", enum:["Diarrea", "Estreñimiento", "Dolor abdominal no aclarado", "Dolor abdominal que le despierta", "Nauseas/vómitos después de comer", "Digestiones lentas",
          "inflamación abdominal tras las comidas", "Acidez, síntomas de reflujo", "Inflamación de la lengua", "Úlceras aftosas recurrentes orales", "Eczema o picor anal no aclarado", "Ganancia de peso no explicada", "Pérdida de peso no explicada"]}

			}
		}
  }
};
