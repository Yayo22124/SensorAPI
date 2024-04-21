import mongoose from "mongoose";
mongoose.connect(process.env.CONECCTION_STRING_DB)
.then(db => console.log('Conexion Exitosa'))
.catch(err => console.log(err));
export default mongoose;