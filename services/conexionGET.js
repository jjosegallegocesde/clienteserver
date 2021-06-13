//PASOS PARA TRAER DATOS DE UN API

//TRAER/IMPORTAR LOS MODULOS HELPERS
import {pintarFutbolistas} from '../helpers/pintarDatos.js';

//1. DEBO DEFINIR LA URI DEL SERVICIO A CONSUMIR
const URI="https://juangallegoapi.herokuapp.com/jugadores";

//2. DEBO ARMAR LA PETICION HACIA EL SERVIDOR
let peticion={
    method:"GET",
    headers:{"Accept":"*/*"}
} 

//3.Se va al servidor de forma asincrona con el metodo FETCH
fetch(URI,peticion)
.then(respuesta=>respuesta.json())
.then(datos=>pintarFutbolistas(datos))


