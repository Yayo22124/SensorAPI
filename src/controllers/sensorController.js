import { io } from "../app.js";
import sensorDao from "../dao/sensor.dao.js";

export const getAll = (req, res) => {
    sensorDao.getAll()
        .then(sensors => res.json(sensors))
        .catch(err => res.json({
            status: "Server unavaliable"
        }));
};
export const getOne = (req, res) => {
    sensorDao.getOne(req.params.id)
        .then(sensor => {
            !sensor ? res.status(404).json({
                message: "sensor not found"
            }) : res.json(sensor);
        })
        .catch(err => res.json({
            status: "Server unavaliable"
        }));
}
export const insertOne = (req, res) => {
    console.log(req.body);
    sensorDao.insertOne(req.body)
        .then(result => {
            res.json(result);
            // Emitir evento de socket cuando se inserta un nuevo sensor
            io.emit('sensor_insertado', { message: 'Se insertó un nuevo sensor' });
        })
        .catch(err => res.json({ status: "Server unavaliable " }));
}