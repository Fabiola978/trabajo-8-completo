import dataBase from "../database/database.json"; //lo trae como Objeto
import * as jsonfile from "jsonfile";
//console.log(__dirname)

//debe retornar un array de objetos (Colletion): {time: '2023-07-21T14:00:00Z', humidity: 86, temperature: 13.26}.
const getHourlyTemperatureAndHumidity = () => {
const result = dataBase.timelines.hourly.map(elment => {  
    return {
    time: elment.time,
    humidity: elment.values.humidity,
    temperature: elment.values.temperature
   };
});
return result;
};

//console.log(getHourlyTemperatureAndHumidity())

//Retorna una collection en la que la propiedad temperature de los objetos sea igual o mayor al valor temperature recibido por parámetro. Los objetos que conformen esta collection tienen que tener la forma {pressureSurfaceLeve: 1009.62, temperature: 21.25}.
const getPressureLevelByTemperature = (temperature:number) => {
 const result = dataBase.timelines.hourly.map(element =>{
    return {
        pressureSurfaceLeve: element.values.pressureSurfaceLevel,       
        temperature: element.values.temperature
    };
 });
 const temp = result.filter(elemet => elemet.temperature >= temperature)
 return temp
};


//console.log(getPressureLevelByTemperature(10))
export { getPressureLevelByTemperature, getHourlyTemperatureAndHumidity };
