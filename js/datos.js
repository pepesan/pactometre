/*
Obtención de datos
*/

//creacion de un objeto
var ciudadanos={
    nombre:"Ciudadanos",
    diputados:37,
    color:"orange"
};
//Declaración de un array con un elemento
var resultados=[ciudadanos];
//Declaración de otro objeto
var juntspercat={
    nombre:"Junts per Catalunya",
    diputados:34,
    color:"pink"
};
//Asignación de un array de dos elementos
resultados=[ciudadanos,juntspercat];
var esquerra={
    nombre:"Esquerra Republicana de Catalunya",
    diputados:32,
    color:"#FDB94D"
};
resultados=[ciudadanos,juntspercat,esquerra];

var psc={
    nombre:"Partit de Socialistes de Catalunya",
    diputados:17,
    color:"red"
};
resultados=[ciudadanos,juntspercat,esquerra,psc];
var comunes={
    nombre:"Catalunya en Comú - Podem",
    diputados:8,
    color:"purple"
};
resultados=[ciudadanos,juntspercat,esquerra,psc,comunes];
var cup={
    nombre:"CUP",
    diputados:4,
    color:"yellow"
};
resultados=[ciudadanos,juntspercat,esquerra,psc, comunes, cup];
var pp={
    nombre:"Partit Popular de Catalunya",
    diputados:3,
    color:"cyan"
};
resultados=[ciudadanos,juntspercat,esquerra,psc, comunes, cup, pp];


 function imprimeDatos(){   
    /*
    Buscamos en la estructura el elemento a modificar
    */
    //limpiamos el contenido (Poda)
     document.getElementById("listado").innerHTML="";

    //Añadimos los nuevos elementos (Injerto)

    /*
    document.getElementById("listado").innerHTML
        +=
    //"<li>(nombre): (diputados)</li>"
    "<li>"+resultados[0].nombre+": "+resultados[0].diputados+"</li>";
    document.getElementById("listado").innerHTML+="<li>"+resultados[1].nombre+": "+resultados[1].diputados+"</li>";
    document.getElementById("listado").innerHTML+="<li>"+resultados[2].nombre+": "+resultados[2].diputados+"</li>";
    document.getElementById("listado").innerHTML+="<li>"+resultados[3].nombre+": "+resultados[3].diputados+"</li>";
    document.getElementById("listado").innerHTML+="<li>"+resultados[4].nombre+": "+resultados[4].diputados+"</li>";
    document.getElementById("listado").innerHTML+="<li>"+resultados[5].nombre+": "+resultados[5].diputados+"</li>";
    document.getElementById("listado").innerHTML+="<li>"+resultados[6].nombre+": "+resultados[6].diputados+"</li>";

    document.getElementById("listado").innerHTML+="<li>"+resultados[?].nombre+": "+resultados[?].diputados+"</li>";
    */
    for(indice in resultados){
        document.getElementById("listado").innerHTML+="<li>"+resultados[indice].nombre+": "+resultados[indice].diputados+"</li>";
    }
    // console.log();
}


//imprimeDatos();
//Cambiar el comportamiento del botón para que cuando lo pulsen ejecute una función que yo le diga
document.getElementById("miboton")
    .addEventListener("click",imprimeDatos);


/*
[
    {
        "nombre":"Ciudadanos",
        "diputados":37,
        "color":"orange"
    },
    {
    nombre:"Junts per Catalunya",
    diputados:34,
    color:"pink"
    },
    ....
]

*/