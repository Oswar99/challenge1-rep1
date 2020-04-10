import mongoose from "mongoose";
import { IDireccion, getDireccion } from "./Direccion"
import { connectMongoDB } from "./helpers";

export interface IProveedor extends mongoose.Document{
   RTN: string;
   Nombre: String;
   Telefono: number;
   Direccion: IDireccion;
}

const ProveedorSchema = new mongoose.Schema({
    RTN: {type: String, required: true},
    Nombre: {type: String, required: true},
    Telefono: {type: Number, required: true},
    Direccion: {type: mongoose.Schema.Types.ObjectId, ref: "Direccion"}
});

export const Proveedor = mongoose.model<IProveedor>("Proveedor", ProveedorSchema);

export const addProveedor = async function(
    id: any,
    RTN: string,
    Nombre: String,
    Telefono: number,
){
    await connectMongoDB;
    const dir = await getDireccion({_id: id});
    const d = new Proveedor();

    d.RTN = RTN;
    d.Nombre = Nombre;
    d.Telefono = Telefono;
    d.Direccion = dir;

    d.save((err: any)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log(d);
        }
    });
}

export function getProveedor(filter : any): Promise<any>{
    return new Promise<any>(resolve =>{
        Proveedor.findOne(filter, (err:any, data:any)=>{
            if(err){
                resolve({message: "no encontrado"});
            }else{
                resolve(data);
            }
        });
    });
}

export function deleteProveedor(filter : any): Promise<any>{
    return new Promise<any>(resolve =>{
        Proveedor.findOneAndDelete(filter, (err: Error, proveedor: any)=>{
            if(err){
                resolve({ message: err.message });
            }else{
                resolve(proveedor);
            };
        });
    });
}

export function updateProveedor(filter : any, update: any): Promise<any>{
    return new Promise<any>(resolve =>{
        Proveedor.findOneAndUpdate(filter, update, (err: Error, proveedor: any)=>{
            if(err){
                resolve( {message: err.message });
            }else{
                resolve(proveedor);
            };
        });
    });
}