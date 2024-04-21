import Sensor from "../models/sensor.model.js";
const sensorDao={};
sensorDao.getAll=async()=>{
    const sensors = await Sensor.find();
    return sensors;
};
sensorDao.getOne=async(id)=>{
    const sensor = await Sensor.findOne({id: id});
    return sensor;
};
sensorDao.insertOne=async(sensor)=>{
    return await Sensor.create(sensor);
};
export default sensorDao;