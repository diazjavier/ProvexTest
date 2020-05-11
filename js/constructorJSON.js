window.addEventListener('load', function() {
  let botonExtract = document.getElementById("extractor");
  botonExtract.addEventListener('click', insertaJSON);
});


function insertaJSON() {
  let txtJsonProductos = "let productosJSON = [";
  let divContenedor = document.getElementById("contenedorJSON");
  let items3x = document.getElementsByClassName("items3x");
  for (i = 0; i < items3x.length; i++) {
    if (i == 0) {
      txtJsonProductos += '<br>{';
    } else {
      txtJsonProductos += ',<br>{';
    };
    txtJsonProductos += '<br>&emsp;"codigo3x":"' + sacaItem(items3x[i].id) + '",';
    txtJsonProductos += '<br>&emsp;"nombre3x":"' + items3x[i].textContent + '",';
    txtJsonProductos += '<br>&emsp;"items4x":[';

    let hermanos3x = items3x[i].parentNode.childNodes;

    let flag = 0;
    for (hermanos4x of hermanos3x) {
      let hermano4x = hermanos4x.childNodes;
      for (hermano4 of hermano4x) {
        if (hermano4.className && hermano4.className.indexOf("item-") != -1) {
          if (flag == 0) {
            txtJsonProductos += '<br>&emsp;{';
            flag = 1;
          } else {
            txtJsonProductos += ',<br>&emsp;{';
          };
          txtJsonProductos += '<br>&emsp;&emsp;&emsp;"codigo4x":"' + sacaItem(hermano4.id) + '",';
          txtJsonProductos += '<br>&emsp;&emsp;&emsp;"nombre4x":"' + hermano4.textContent + '",';
          txtJsonProductos += '<br>&emsp;&emsp;&emsp;"items5x":[';

          let hermanos5x = hermano4.parentNode.childNodes;
          for(hermano5x of hermanos5x){
            if(hermano5x.className && hermano5x.className == "row"){
              let hermanos5xx = hermano5x.childNodes;
              let flag5x = 0;
              for(hermano5xx of hermanos5xx){
                if(hermano5xx.className && hermano5xx.className == "col-lg-4 col-sm-6 portfolio-item"){
                  if (flag5x == 0) {
                    txtJsonProductos += '<br>&emsp;&emsp;&emsp;{';
                    flag5x = 1;
                  } else {
                    txtJsonProductos += ',<br>&emsp;&emsp;&emsp;{';
                  };
                  txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;"codigo5x":"' + sacaItem(hermano5xx.getAttribute("name")) + '",';
                  let hermanos5xxx = hermano5xx.childNodes;
                  for(hermano5xxx of hermanos5xxx){
                    if(hermano5xxx.className && hermano5xxx.className == "modal fade"){
                      let hermanos5xxxx = hermano5xxx.childNodes;
                      txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;"nombre5x":"' + hermanos5xxxx[1].firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.textContent + '",';
                      txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;"fotos":[';
                      txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;&emsp;"' + sacaItem(hermano5xx.getAttribute("name")) + '.jpg"';
                      txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;],';
                      txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;"especificaciones":[';
                      for(hermano5xxxx of hermanos5xxxx){
                        if(hermano5xxxx.tagName == "DIV"){
                          let hermanos5xxxxx = hermano5xxxx.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.childNodes;
                          let flagLi = 0;
                          for(hermano5xxxxx of hermanos5xxxxx){
                            if(hermano5xxxxx.tagName == "LI"){
                              if (flagLi ==0){
                                txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;&emsp;"' + hermano5xxxxx.innerText + '"';
                                flagLi = 1;
                              }else{
                                txtJsonProductos += ',<br>&emsp;&emsp;&emsp;&emsp;&emsp;"' + hermano5xxxxx.innerText + '"';
                              };
                            };
                          };
                        };
                      };


                      txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;]';
                    };
                  };
                  txtJsonProductos += '<br>&emsp;&emsp;&emsp;}';
                };
              };
            };
          };
          let flag2 = 0;
          for (hermano5 of hermanos5x) {
            if (hermano5.className && hermano5.className.indexOf("col-lg-4 col-sm-6 portfolio-item") != -1) {
              if (flag2 == 0) {
                txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;{';
                flag2 = 1;
              } else {
                txtJsonProductos += ',<br>&emsp;&emsp;&emsp;&emsp;{';
              };
              txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;&emsp;"codigo5x":"' + hermano5.getAttribute("name") + '"';
              txtJsonProductos += ',<br>&emsp;&emsp;&emsp;&emsp;&emsp;"nombre5x":"' + hermano5.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling.textContent + '"';
              txtJsonProductos += ',<br>&emsp;&emsp;&emsp;&emsp;&emsp;"fotos":[';
              txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"' + hermano5.getAttribute("name") + '.jpg"';
              txtJsonProductos += '<br>&emsp;&emsp;&emsp;&emsp;&emsp;]';
            };
          };
          txtJsonProductos += '<br>&emsp;&emsp;&emsp;]';
          txtJsonProductos += '<br>&emsp;}';
        };
      };
    };
    txtJsonProductos += '<br>&emsp;]';
    txtJsonProductos += '<br>}';
  };
  txtJsonProductos += '<br>];';
  divContenedor.innerHTML = txtJsonProductos;
};

function sacaItem(txt){
    let txtSinItem = txt.split("-");
    return txtSinItem[1];
};
