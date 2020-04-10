import mongoose from "mongoose";
import { connectMongoDB } from "./helpers";

export interface IDireccion extends mongoose.Document{
    Avenida : string;
    Ciudad : string;
    Departamento : string;
    CodigoPostal : number;
    Pais : String
}

const DireccionSchema = new mongoose.Schema({
    Avenida : {type: String, required: true},
    Ciudad : {type: String, required: true},
    Departamento : {type: String, required: true},
    CodigoPostal : {type: Number, required: true},
    Pais : {type: String, required: true}
});

export const Direccion = mongoose.model<IDireccion>("Direccion", DireccionSchema);

export const addDireccion = async function(
    Avenida : string,
    Ciudad : string,
    Departamento : string,
    CodigoPostal : number,
    Pais : String
){
    await connectMongoDB;

    const d = new Direccion();

    d.Avenida = Avenida;
    d.Ciudad = Ciudad;
    d.Departamento = Departamento;
    d.CodigoPostal = CodigoPostal;
    d.Pais = Pais;

    d.save((err: any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(d);
        }
    });
}

export function getDireccion(filter : any): Promise<any>{
    return new Promise<any>(resolve =>{
        Direccion.findOne(filter, (err:any, data:any)=>{
            if(err){
                resolve({message: "no encontrado"});
            }else{
                resolve(data);
            }
        });
    });
}

export function deleteDireccion(filter : any): Promise<any>{
    return new Promise<any>(resolve =>{
        Direccion.findOneAndDelete(filter, (err: Error, direccion: any)=>{
            if(err){
                resolve({ message: err.message });
            }else{
                resolve(direccion);
            };
        });
    });
}

export function updateDireccion(filter : any, update: any): Promise<any>{
    return new Promise<any>(resolve =>{
        Direccion.findOneAndUpdate(filter, update, (err: Error, direccion: any)=>{
            if(err){
                resolve( {message: err.message });
            }else{
                resolve(direccion);
            };
        });
    });
}