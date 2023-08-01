import * as model from "../model/model";

function getHourly () {
    return model.getHourlyTemperatureAndHumidity();
};

function getPressure (temperature: number){
    return model.getPressureLevelByTemperature(temperature);
};

export { getHourly, getPressure}