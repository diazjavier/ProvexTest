window.addEventListener('load', function() {
  let boton = document.getElementById("ver_productos");
  boton.addEventListener('click', insertaHTML);
  let boton2 = document.getElementById("saca_productos");
  boton2.addEventListener('click', limpiaHTML);
});

// variable = 0;

//
function limpiaHTML() {
  let cajaBuscador = document.getElementById("txtBuscador");
  cajaBuscador.value = "";
  let contenedor = document.getElementById("dataspy");
  if (contenedor && contenedor.childNodes.length && contenedor.childNodes !== null) {
    while (contenedor.childNodes.length) {
      contenedor.removeChild(contenedor.lastChild);
    };
  };
};



function insertaHTML(ev) {
  // limpiaHTML();
  let productos = "";
  productos = getProductosHTML();
  let contenedor = document.getElementById("dataspy");
  let nuevo = document.createElement("div");
  if(document.getElementById("productos")){
    let viejo = document.getElementById("productos");
    contenedor.replaceChild(nuevo, viejo);
  }else{
    contenedor.appendChild(nuevo);
  };
  nuevo.setAttribute("id", "productos");
  nuevo.innerHTML = productos;
};

function getProductosHTML() {
  let txt = document.getElementById("txtBuscador").value;
  let json = productosJSON; // productosJSON está en el archivo productosJSON.js
  let newJson = [];
  if (txt != "") {
    for (i = 0; i < json.length; i++) {
      let flag1 = 0;
      for (j = 0; j < json[i].items4x.length; j++) {
        let flag2 = 0;
        for (k = 0; k < json[i].items4x[j].items5x.length; k++) {
          if (json[i].items4x[j].items5x[k].nombre5x.toLowerCase().indexOf(txt.toLowerCase()) > -1) {
            if (flag1 == 0) {
              newJson.push({
                "codigo3x": json[i].codigo3x,
                "nombre3x": json[i].nombre3x,
                "items4x": []
              });
              flag1 = 1;
            };
            if (flag2 == 0) {
              newJson[newJson.length - 1].items4x.push({
                "codigo4x": json[i].items4x[j].codigo4x,
                "nombre4x": json[i].items4x[j].nombre4x,
                "items5x": []
              });
              flag2 = 1;
            };
            newJson[newJson.length - 1]
              .items4x[newJson[newJson.length - 1].items4x.length - 1].items5x.push({
                "codigo5x": json[i].items4x[j].items5x[k].codigo5x,
                "nombre5x": json[i].items4x[j].items5x[k].nombre5x,
                "fotos": [],
                "especificaciones": []
              });
            for (l = 0; l < json[i].items4x[j].items5x[k].fotos.length; l++) {
              newJson[newJson.length - 1].items4x[newJson[newJson.length - 1].items4x.length - 1]
                .items5x[newJson[newJson.length - 1].items4x[newJson[newJson.length - 1].items4x.length - 1].items5x.length - 1].fotos.push(json[i].items4x[j].items5x[k].fotos[l]);
            };
            for (m = 0; m < json[i].items4x[j].items5x[k].especificaciones.length; m++) {
              newJson[newJson.length - 1].items4x[newJson[newJson.length - 1].items4x.length - 1]
                .items5x[newJson[newJson.length - 1].items4x[newJson[newJson.length - 1].items4x.length - 1].items5x.length - 1].especificaciones.push(json[i].items4x[j].items5x[k].especificaciones[m]);
            };
          };
        };
      };
    };
    // let arr = json.filter(ciudad=> ciudad.country === "AR")
    // .map(ciudad=> ({ id: ciudad.id, nombre : ciudad.name + ", " + ciudad.country}));
  } else {
    newJson = json;
  };

  let html = "";
  if (newJson.length == 0) {
    html = "<div name='rtaVacia'>" +
      "<br><br><h4 id='rtaVacia'>No se han encontrado resultados para su búsqueda</h4>" +
      "</div>";
  } else {
    html = construyeHTML(newJson);
  };
  return html;
};
