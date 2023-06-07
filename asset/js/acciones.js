(() => {
   
    /*funciones*/
    let escribir=(str,id)=>{
        let arrayNombre = str.split("");
        let i=0;
        let printWriter=setInterval(function(){
            document.getElementById(id).innerHTML+=arrayNombre[i];
        
            i++;
            if(arrayNombre.length === i){
                clearInterval(printWriter);
                document.getElementById(id).classList.remove('quitarBefore');
            }
        },700);
    }
    escribir("Diego Alejandro Calvo Orozco.",'nombreIngeniero');
    escribir("ING. de Sistemas.",'nombreProfesion');



}) ();