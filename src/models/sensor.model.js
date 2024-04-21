import { Schema, model } from "mongoose";

const sensorSchema= new Schema({
    distancia: Number,
    temperatura: Number,
    humedad: Number, 
    ledStatus: Number
},{
    versionKey: false,
    timestamps: true
});

export default model('sensor',sensorSchema);
