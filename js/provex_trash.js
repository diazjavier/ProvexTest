window.addEventListener('load', function() {

  // const topInicialSidebar = getTop(document.getElementById("sidebar"));

  window.addEventListener("scroll", function(){
    let walt = window.scrollY;
    console.log(walt);

    let sidebar = document.getElementById("sidebar");
    let altura = getTop(sidebar);
    console.log(altura);
    if(walt >= 95){
      sidebar.style = "top: 60px; position: fixed; z-index: 1000;";

      console.log("Adentro: "+sidebar.style.top);
    }else{
      sidebar.style = "top: auto; position: relative;";
      console.log("Afuera: "+sidebar.style.top);
    }
  });


  // function getTop(control){
  //   let posicion = control.getBoundingClientRect();
  //   let top = posicion.top;
  //   return top;
  // };

  // let boton = document.getElementById("cardbtn2");
  // boton.setAttribute("title","Un tooltip bien hecho");
  // boton.setAttribute("class","tooltip1");
  let list = document.getElementsByClassName("lgi"); //Selecciono todos los padres del Menu
  for (var i = 0; i < list.length; i++) { //Recorro todos los padres del Menu
    list[i].addEventListener("click", function() { //Capturo el padre al que se le hizo click
      // for (var y = 0; y < list.length; y++) { //Recorro todos los padres del Menu otra vez desde el primero
      //   list[y].style.backgroundColor = '#9f9fa8'; //Les cambio el color de fondo a todos los padres del Menu
      // };
      // this.style.backgroundColor = '#9eb0c6'; //Le cambio el color de fondo con un color diferente al padre del Menu al que se le hizo click
      let href = this.getAttribute("href"); //Capturo el href del padre del Menu al que se le hizo click
      href = href.substring(1, href.lenght); //Le saco el # al href para transformarlo en id
      let foco = document.getElementById(href); //Capturo el elemento al que hace referencia el href
      foco.scrollIntoView({ //Muevo el scroll hasta el elemento al que hace referencia el href
        behavior: 'smooth'
      });
      });
  };
});
