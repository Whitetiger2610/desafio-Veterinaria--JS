
const fs = require("fs");

const registrarCita = (nombreAnimal,edad,tipoAnimal,colorAnimal, enfermedadAnimal) =>{
  
    const cita = 
        {nombre:`${nombreAnimal}`,
         edad: `${edad}`,
         animal: `${tipoAnimal}`,
         color:`${colorAnimal}`,
         enfermedad: `${enfermedadAnimal}`  
        }
    
    // fs.writeFileSync("./cita.json", JSON.stringify(cita,null,2))
    const citas = JSON.parse(fs.readFileSync("citas.json",`utf8`))
    citas.push(cita)
    fs.writeFileSync("./citas.json", JSON.stringify(citas,null,2))

    console.log("La cita fue creada")
}

const leerCitas = () => {
    console.log(fs.readFileSync("citas.json",`utf8`))
}

module.exports = {registrarCita, leerCitas} 