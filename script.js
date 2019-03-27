function cargarPagina(){

    var boton = document.querySelector('.btn_crear');
    var rojo=document.querySelector('.rojo');
    var azul=document.querySelector('.azul');
    var verde=document.querySelector('.verde');
    var elementoColor=document.querySelector('.elementoColor');
    var nombre=document.querySelector('.nombre');
    var url=document.querySelector('.url');
    var content=document.querySelector('.content');
    var selector=document.querySelector('.selector');
    var contenedores=document.querySelectorAll('.contenedor');

    /*    function modificar(){
            var contenedor = document.querySelector('.contenedor');
            var anterior = contenedor.innerHTML;
    
            var input = document.querySelector('.nombre');
            console.log(input.value);
    
            contenedor.innerHTML = anterior + '<p>Holiiii xD </p> + <p> que hace</p>'
        }*/

        function cambiarColor(){
            elementoColor.style.backgroundColor= 'rgb('+rojo.value+','+verde.value+','+azul.value+')';
        }

        rojo.addEventListener('input',cambiarColor);
        verde.addEventListener('input',cambiarColor);
        azul.addEventListener('input',cambiarColor);


        function crearElemento(){
            var contenedorNuevo= document.createElement('div');
            var texto=document.createElement('p');
            content.appendChild(contenedorNuevo);
            contenedorNuevo.className="contenedor";
            contenedorNuevo.style.backgroundImage='url('+url.value+')';
            contenedorNuevo.style.border='3px solid rgb('+rojo.value+','+verde.value+','+azul.value+')';
            contenedorNuevo.appendChild(texto);
            texto.className="texto";
           
            texto.innerHTML=nombre.value;
            texto.style.color = selector.value;
            console.log(selector.value);

            nombre.value='';
            url.value='';

            function eliminarElemento(){
                contenedorNuevo.remove();
               // console.log(contenedor);
            }
            contenedorNuevo.addEventListener('click', eliminarElemento);

        }

       boton.addEventListener('click',crearElemento);

     /*function recorrerElemento(contenedor){
        function eliminarElemento(){
            contenedor.remove();
            console.log(contenedor);
        }
        contenedor.addEventListener('click', eliminarElemento);
    }
    contenedores.forEach(recorrerElemento);*/
    }


    
    window.addEventListener('load',cargarPagina);