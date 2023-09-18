/*window.addEventListener('DOMContentLoaded', () => {
    console.log("cargo el DOM satisfactoriamente")
}) añade un escuchador de eventos, confirma que cargo la pagina la estructura del DOM*/



window.addEventListener('DOMContentLoaded', () => { /*funcion anonima -> manejador de eventos*/ 

    const reservaBtn= document.getElementById("reservaBtn");
    /*console.log(reservaBtn) -- devuelve todo el elemento button*/
    
    const disableBtn=document.getElementById("disableBtn")

    function handleClick(){ /*funcion manejador de eventos */
       /* console.log("Gracias por presionar el boton reservar"); */
       window.alert("Gracias por Reservar!!!")
    }

    reservaBtn.addEventListener("click", handleClick);

   /* reservaBtn.removeEventListener("click",handleClick); eliminar el evento del click */

   disableBtn.addEventListener("click", () =>{  /*desactiva el boton reservar progrmado*/
    reservaBtn.removeEventListener("click", handleClick);
    console.log("Desactivado boton");
   });

   reservaBtn.addEventListener("dblclick", ()=>{
    reservaBtn.addEventListener("click", handleClick)
    console.log("hizo doble click")
   })

});