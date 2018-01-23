const schema = {
  title: "Formulario Celiacos",
  type: "object",
  required: ["title"],
  properties: {
    title: {title:"Cuestionario 1", type: "object", properties:{ 
        "�Cu�l es su molestia predominante?":
        {type: "string", 
        enum: ["Digestiva", "Osteoarticular (dolor �seo, inflamaci�n articular, osteoporosis ...)","Dermatol�gica", 
        "Neuropsiquiatrica (insomnio, dolor de cabeza, depresi�n, ansiedad ...)", 
        "Metab�lica (cansancio, problemas de peso ...)"]},
        "multipleChoicesList": {"type": "number","title": "Sexo","enum": ["Hombre", "Mujer"]},
        "Fecha de nacimiento":{type:"string"},
        "Lugar de nacimiento":{type:"string"},
        "Origen familiar":{type:"string", enum:["Caucasiano", "�rabe", "Magreb�", "Africano", "Negro americano", "Ind�", "Asi�tico", "Nativo americano"]},
        "�Alg�n familiar cel�aco?":{type:"string", enum:["S�", "No"]},
        "�Alg�n familiar con Diabetes Tipo II?":{type:"string", enum:["S�", "No"]},
        "�Alg�n familiar con problemas digestivos no aclarados?":{type:"string", enum:["S�", "No"]},
        "Color de pelo y piel": {type:"string", enum:["Rubio", "Casta�o","Moreno", "Pelirojo", "Negro"]},
        "Color de sus ojos":{type:"string", enum: ["Azules", "Verdes","Marrones", "Negros", "Grises"]},
        "�C�mo es su salud?":{type:"string", enum:["Enfermizo", "Normal","Muy saludable"]},
        "Estatura":{type:"string"},
        "Peso":{type:"string"},
        "�Alg�n problema cr�nico o recurrente de piel no aclarado? �Se le cae el pelo o tiene u�as d�biles?":{type:"string",  enum:["S�", "No"]},
        "�Se encuentra m�s cansado de lo que deber�a?":{type:"string",  enum:["S�", "No"]},
        "�Es intolerante a la lactosa, fructosa o alg�n hidrato de carbono?":{type:"string",  enum:["S�", "No"]},
        "�Ha sido positivo en alg�n test de intolerancia a alimentos?":{type:"string",  enum:["S�", "No"]},
        "�Tiene dolor de cabeza no aclarado?":{type:"string",  enum:["S�", "No"]},
        "�Tiene usted tendencia al�rgica (asma bronquial, rinitis, conjuntivitis ...)?":{type:"string",  enum:["S�", "No"]},
        "�Es al�rgico a los antibi�ticos?":{type:"string",  enum:["S�", "No"]},
        "�Existe alerg�a a otros medicamentos?":{type:"string",  enum:["S�", "No"]},
        "�Existe alerg�a a alg�n alimento?":{type:"string",  enum:["S�", "No"]},
        "�Alteraciones menstruales?":{type:"string",  enum:["S�", "No"]},
        "�Ha tenido dificultades para concebir hijos?":{type:"string",  enum:["S�", "No"]},
        "�Abortos, problemas en el embarazo o desarrollo del feto?":{type:"string",  enum:["S�", "No"]},
        "�Tiene hijos?":{type:"string",  enum:["S�", "No"]},
        "�Ha tenido dificultades para concebir hijos?":{type:"string",  enum:["S�", "No"]},
        "�Ha padecido frecuentemente algunos s�ntomas de los que se preguntan a continuaci�n?":{type:"string", enum:["Diarrea", "Estre�imiento", "Dolor abdominal no aclarado", "Dolor abdominal que le despierta", "Nauseas/v�mitos despu�s de comer", "Digestiones lentas",
          "inflamaci�n abdominal tras las comidas", "Acidez, s�ntomas de reflujo", "Inflamaci�n de la lengua", "�lceras aftosas recurrentes orales", "Eczema o picor anal no aclarado", "Ganancia de peso no explicada", "P�rdida de peso no explicada"]}
        
			}
		}
	}
};
