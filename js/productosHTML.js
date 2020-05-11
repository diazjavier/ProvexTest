
function construyeHTML (arr){
  let elHTML = "";
  for(let i=0; i < arr.length; i++){
    let arrItems4x = arr[i].items4x;
    elHTML +=  "<div name='item-" + arr[i].codigo3x + "'>"+
                "<br><br><h4 id='item-" + arr[i].codigo3x + "'>" + arr[i].nombre3x + "</h4>"+
                categorias4x(arrItems4x)+
              "</div>";
  };
  return elHTML;
};


function categorias4x(item4x){
  let arr4x = item4x;

  let html4x = "";
  for(let i=0; i < arr4x.length; i++){
    let arrItems5x = arr4x[i].items5x;
    html4x +=  "<div name='item-" + arr4x[i].codigo4x + "'>"+
                "<br><h5 id='item-" + arr4x[i].codigo4x + "' class='item-xxxx'>" + arr4x[i].nombre4x + "</h5>"+
                "<div class='row'>"+
                categorias5x(arrItems5x)+
                "</div>"+
              "</div>";
  };
  return html4x;
};

function categorias5x(item5x){
  let arr5x = item5x;
  let html5x = "";
  for(let i=0; i < arr5x.length; i++){
    html5x += "<div name='producto-" + arr5x[i].codigo5x + "' class='col-lg-4 col-sm-6 portfolio-item' style='padding-bottom: 10px'>"+
                "<div class='card'>"+
                    "<div class='card-title cardTitle'>"+
                      "<h6>" + arr5x[i].nombre5x + "</h6>"+
                    "</div>"+
                  "<div class='card-body'>"+
                    "<div class='caja1'>"+
                      "<div class='caja2'>"+
                        // "<img class='img-fluid' src='img/Productos/" + item5x[i].codigo5x + ".jpg' alt='&nbsp;&nbsp;Imagen no disponible' data-toggle='modal' data-target='#modal" + item5x[i].codigo5x + "'>"+
                        traeImagenes(arr5x[i].fotos, arr5x[i].codigo5x, "card")+


                      "</div>"+
                    "</div>"+
                  "</div>"+
                  "<div class='card-footer' align='center'>"+
                    "<p align='center' data-toggle='tooltip' title='Aca va el código xxx'>Código: " + arr5x[i].codigo5x + "</p>"+
                    "<button id='cardbtn" + arr5x[i].codigo5x + "' type='button' class='btn btn-secondary btn-sm cardButton' data-toggle='modal' data-target='#modal" + arr5x[i].codigo5x + "'></button>"+
                  "</div>"+
                "</div>"+
                "<div class='modal fade' id='modal" + arr5x[i].codigo5x + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
                  "<div class='modal-dialog modal-dialog-scrollable modal-lg' role='document'>"+
                    "<div class='modal-content'>"+
                      "<div class='modal-header'>"+
                        "<h6 class='modal-title'>" + arr5x[i].nombre5x + "</h6>"+
                        "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
                          "<span aria-hidden='true'>&times;</span>"+
                        "</button>"+
                      "</div>"+
                      "<div class='modal-body caja3'>"+
                        "<div class='container-fluid'>"+
                          "<div class='row'>"+
                            "<div class='col-sm-12'>"+
                              "<p>Código: " + arr5x[i].codigo5x + "</p>"+
                              "<div class='container-fluid'>"+
                                "<div class='row'>"+
                                  "<div class='col-12 col-md-6 col-lg-6 col-xl-6'>"+
                                    traeImagenes(arr5x[i].fotos, arr5x[i].codigo5x, "modal")+
                                  "</div>"+
                                  "<div class='col-12 col-md-6 col-lg-6 col-xl-6'>"+
                                    "<br><br><h6><u><b>ESPECIFICACIONES:</b></u></h6>"+
                                    "<br>"+
                                    "<h8>"+
                                      "<ul class='cardlist'>"+
                                        traeEspecificaciones(arr5x[i].especificaciones)+
                                      "</ul>"+
                                      "<br>"+
                                    "</h8>"+
                                  "</div>"+
                                "</div>"+
                              "</div>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>"+
                      "<div class='modal-footer' style='height: 15px'>"+
                        "<button type='button' class='btn btn-secondary' data-dismiss='modal' style='height: 15px; font-size: 10px; padding: 0px'>Cerrar</button>"+
                    "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>";
  };
  return html5x;
};

function traeImagenes(fotos, item, origen){
  let htmlImg = "";
  if (fotos.length == 1){
    if(origen == "card"){
      htmlImg = "<img class='img-fluid' src='img/Productos/" + fotos[0] + "' alt='&nbsp;&nbsp;Imagen no disponible' data-toggle='modal' data-target='#modal" + item + "'>";
    }else if(origen == "modal"){
      htmlImg = "<img class='img-fluid' src='img/Productos/" + fotos[0] + "' alt='&nbsp;&nbsp;Imagen no disponible'>";
    };

  }else{

    htmlImg =  "<div id='carousel-" + origen + "-" + item + "' class='carousel slide' data-ride='carousel'>"+
                  "<ol class='carousel-indicators'>";


    for(i=0; i < fotos.length; i++){
      if (i==0){
        htmlImg += "<li data-target='#carousel-" + origen + "-" + item + "' data-slide-to='" + i + "' class='active'></li>";
      }else{
        htmlImg += "<li data-target='#carousel-" + origen + "-" + item + "' data-slide-to='" + i + "'></li>";
      };
    };

    htmlImg +=    "</ol>"+
                  "<div class='carousel-inner' role='listbox'>";

    if(origen == "card"){
      for(j=0; j < fotos.length; j++){
        if(j==0){
          htmlImg +=  "<div class='caja2 carousel-item active'>"+
                        "<img class='d-block img-fluid' src='img/Productos/" + fotos[j] + "' alt='&nbsp;&nbsp;Imagen no disponible' data-toggle='modal' data-target='#modal" + item + "'>"+
                      "</div>";
        }else{
          htmlImg +=  "<div class='caja2 carousel-item'>"+
                        "<img class='d-block img-fluid' src='img/Productos/" + fotos[j] + "' alt='&nbsp;&nbsp;Imagen no disponible' data-toggle='modal' data-target='#modal" + item + "'>"+
                      "</div>";
        };
      };
    }else if(origen == "modal"){
      for(j=0; j < fotos.length; j++){
        if(j==0){
          htmlImg +=  "<div class='carousel-item active'>"+
          "<img class='d-block img-fluid' src='img/Productos/" + fotos[j] + "' alt='&nbsp;&nbsp;Imagen no disponible'>"+
          "</div>";
        }else{
          htmlImg +=  "<div class='carousel-item'>"+
          "<img class='d-block img-fluid' src='img/Productos/" + fotos[j] + "' alt='&nbsp;&nbsp;Imagen no disponible'>"+
          "</div>";
        };
      };
    };

    htmlImg +=    "</div>"+
                  "<a class='carousel-control-prev' href='#carousel-" + origen + "-" + item + "' role='button' data-slide='prev'>"+
                    "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"+
                    "<span class='sr-only'>Previous</span>"+
                  "</a>"+
                  "<a class='carousel-control-next' href='#carousel-" + origen + "-" + item + "' role='button' data-slide='next'>"+
                    "<span class='carousel-control-next-icon' aria-hidden='true'></span>"+
                    "<span class='sr-only'>Next</span>"+
                  "</a>"+
                "</div>";

  };
  return htmlImg;
};

function traeEspecificaciones(esp){
  let htmlEsp = "";
  for(let i=0; i < esp.length; i++){
    htmlEsp +=  "<li>" + esp[i] + "</li>";
  };
  return htmlEsp;
};
