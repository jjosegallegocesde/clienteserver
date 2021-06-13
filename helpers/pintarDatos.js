
export function pintarFutbolistas(datos){

    
    //TRAVERSING --> CREAR ETIQUETAS A TRAVES DE JS

    //1. CREO LA REFERENCIA A LA ETIQUETA PADRE
    let fila=document.getElementById("fila");

    //2 Recorrer los datos (arreglo)
    let futbolistas=datos.mensaje;

    futbolistas.map(function(futbolista){

        //TODO PODEROSO (CREANDO ETIQUETAS DESDE LA LOGICA)
        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let cuerpoTarjeta=document.createElement("div");
        cuerpoTarjeta.classList.add("card-body");

        let nombreFutbolista=document.createElement("h1");
        nombreFutbolista.classList.add("text-center");
        nombreFutbolista.textContent=futbolista.nombre;

        let edadFutbolista=document.createElement("p");
        edadFutbolista.textContent="edad: "+futbolista.edad;

        let posicionFutbolista=document.createElement("p");
        posicionFutbolista.textContent="posicion: "+futbolista.posicion;

        let equipoFutbolista=document.createElement("p");
        equipoFutbolista.textContent="equipo: "+futbolista.equipo;

        //Finalmente armo el arbol de etiquetas
        cuerpoTarjeta.appendChild(nombreFutbolista);
        cuerpoTarjeta.appendChild(edadFutbolista);
        cuerpoTarjeta.appendChild(posicionFutbolista);
        cuerpoTarjeta.appendChild(equipoFutbolista);

        tarjeta.appendChild(cuerpoTarjeta);

        columna.appendChild(tarjeta);

        fila.appendChild(columna);

    });




}

