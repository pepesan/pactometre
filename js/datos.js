var ciudadanos={
    nombre:"Ciudadanos",
    diputados:37,
    color:"orange"
};
var resultados=[ciudadanos];
var juntspercat={
    nombre:"Junts per Catalunya",
    diputados:34,
    color:"pink"
};
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

//document.getElementById("listado").innerHTML="<li>Ciudadanos: 37</li>";
document.getElementById("listado").innerHTML="";
document.getElementById("listado").innerHTML+="<li>"+resultados[0].nombre+": "+resultados[0].diputados+"</li>";
document.getElementById("listado").innerHTML+="<li>"+resultados[1].nombre+": "+resultados[1].diputados+"</li>";
document.getElementById("listado").innerHTML+="<li>"+resultados[2].nombre+": "+resultados[2].diputados+"</li>";
document.getElementById("listado").innerHTML+="<li>"+resultados[3].nombre+": "+resultados[3].diputados+"</li>";
document.getElementById("listado").innerHTML+="<li>"+resultados[4].nombre+": "+resultados[4].diputados+"</li>";
document.getElementById("listado").innerHTML+="<li>"+resultados[5].nombre+": "+resultados[5].diputados+"</li>";
document.getElementById("listado").innerHTML+="<li>"+resultados[6].nombre+": "+resultados[6].diputados+"</li>";

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