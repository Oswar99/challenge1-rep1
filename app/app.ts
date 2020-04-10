//import { addDireccion, getDireccion, updateDireccion, deleteDireccion } from "./Direccion"
import { addProveedor, getProveedor, updateProveedor, deleteProveedor } from "./Proveedor"

//addDireccion("avemnida1", "Tegucigalpa","FM",504,"Honduras");
//addDireccion("avemnida2", "Tegucigalpa","FM",504,"Honduras");
//addDireccion("avemnida3", "Tegucigalpa","FM",504,"Honduras");
//addDireccion("avemnida4", "Tegucigalpa","FM",504,"Honduras");
//addDireccion("avemnida5", "Tegucigalpa","FM",504,"Honduras");

//const getdir= async function(){console.log(await getDireccion({Avenida: "avemnida2"}));};getdir();
//const updir= async function(){console.log(await updateDireccion({Avenida: "avemnida1"},{Ciudad: "SanPedroSula"}));};updir();
//const deldir= async function(){console.log(await deleteDireccion({Avenida: "avemnida1"}));};deldir();

//addProveedor("5e9050f0a4eb0d829031d5a3","0801-1999-054225", "Oswar", 94895697);
//addProveedor("5e9050f0a4eb0d829031d5a3","0801-1999-054247", "LA Colonia", 94895698);

//const getpro= async function(){console.log(await getProveedor({_id: "5e905c2b39982c61bc56f044"}));};getpro();
//const uppro= async function(){console.log(await updateProveedor({_id: "5e905c2b39982c61bc56f044"},{Nombre: "La Colonia Mod"}));};uppro();
const delpro= async function(){console.log(await deleteProveedor({_id: "5e905c2b39982c61bc56f044"}));};delpro();