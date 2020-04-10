import mongoose from "mongoose";
import { IProveedor, getProveedor } from "./Proveedor"
import { connectMongoDB } from "./helpers";

export interface IObra extends mongoose.Document{
   Nombre : string;
   Caracteristicas: string;
   FechaDeCreacion: string;
   Creador: string;
   Pais: string;
   Tipo: string;
   Estado: string;
   Proveedor: IProveedor;
}

const ObraSchema = new mongoose.Schema({
    Nombre : {type: String, required: true},
    Caracteristicas : {type: String, required: true},
    FechaDeCreacion : {type: String, required: true},
    Creador : {type: String, required: true},
    Pais : {type: String, required: true},
    Tipo : {type: String, required: true},
    Estado : {type: String, required: true},
    Proveedor : {type: mongoose.Schema.Types.ObjectId, ref: "Proveedor"}
});

export const Obra = mongoose.model<IObra>("Obra", ObraSchema);

export const addObra = async function(
    id: any,
    Nombre : string,
    Caracteristicas: string,
    FechaDeCreacion: string,
    Creador: string,
    Pais: string,
    Tipo: string,
    Estado: string
){
    await connectMongoDB;
    const pro = await getProveedor({_id: id});

    const d = new Obra();

    d.Nombre = Nombre;
    d.Caracteristicas = Caracteristicas;
    d.FechaDeCreacion = FechaDeCreacion;
    d.Creador =  Creador;
    d.Pais = Pais;
    d.Tipo = Tipo;
    d.Estado = Estado;
    d.Proveedor = pro;
    
    d.save((err: any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(d);
        }
    });
}

export function getObra(filter : any): Promise<any>{
    return new Promise<any>(resolve =>{
        Obra.findOne(filter, (err:any, data:any)=>{
            if(err){
                resolve({message: "no encontrado"});
            }else{
                resolve(data);
            }
        });
    });
}

export function deleteObra(filter : any): Promise<any>{
    return new Promise<any>(resolve =>{
        Obra.findOneAndDelete(filter, (err: Error, obra: any)=>{
            if(err){
                resolve({ message: err.message });
            }else{
                resolve(obra);
            };
        });
    });
}

export function updateObra(filter : any, update: any): Promise<any>{
    return new Promise<any>(resolve =>{
        Obra.findOneAndUpdate(filter, update, (err: Error, obra: any)=>{
            if(err){
                resolve( {message: err.message });
            }else{
                resolve(obra);
            };
        });
    });
}