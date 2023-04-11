//EJERCICIO 1
function esPar(n) {
    let leerNumero = n
    let arr = []
    if(n%2===0) {
      return "even"
    } else {
      return "odd"
    }
  }
    
console.log(esPar(9))
console.log(esPar(8))

//EJERCICIO 2

function personas(sexo,edad) {
    let adultos = 0
    let menores = 0
    let hombres = 0
    let mujeres = 0
    let mayoresDeEdad = (100 * adultos) / edad.length
    let cantidadMujeres = (100 * mujeres) / sexo.length
    // cuenta cuantos son mayores de edad
    for(let i = 0; i < edad.length; i++) {
      if(edad[i] >= 18) {
        adultos ++
      } else {
        menores ++
      }
    }
    for(let j = 0; j < sexo.length; j++) {
      if(sexo[j] === "hombre") {
        hombres ++
      } else {
        mujeres ++
      }
    }
    
  return `Hay ${adultos} adultos, y ${menores} menores. ${hombres} son hombres mayores de edad, y ${mujeres} son mujeres menores de edad. Un ${mayoresDeEdad}% son mayores de edad, y un ${cantidadMujeres}% son mujeres.`
  }
  
const sexo = ["hombre", "hombre", "hombre", "mujer", "mujer", "hombre", "mujer", "mujer", "hombre", "mujer"]
const edad = [15,30,42,7,80,64,20,27,3,10]
console.log(personas(sexo,edad))

//EJERCICIO 3
function salario(horasTrabajadas, tarifa) {
    let horas = horasTrabajadas
    let sueldo = tarifa
    let total = horas * sueldo
      if(horas > 40) {
        let horasExtra = horas - 40
        let incremento = sueldo/2
        total = (horas-horasExtra) * sueldo + (horasExtra*incremento)
      }
    return total
  }
  
console.log(salario(30,15))
console.log(salario(45,15))
