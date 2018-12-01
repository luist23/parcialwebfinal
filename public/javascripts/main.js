


let loadContent = function(){

};

let newRow = function(data){
    let tbody = document.getElementsByClassName('anime')[0];
    let fila = document.createElement("tr");fila.setAttribute(`data-id`,data._id);
    
    fila.innerHTML = `
    <td>${data._id}</td>
    <td name="nombre">${data.nombre}</td>
    <td name="genero">${data.genero}</td>
    <td name="creador">${data.creador}</td>`;
    tbody.appendChild(fila);
    deleteRow(fila);
    //console.log(tbody.guardar);
}

let loadContentAll = function(){
    fetch('/all').then((data)=>data.json()).then(function(data){
        if(data.ok){
            data.animes.forEach(element => {
                //console.log(element);
                newRow(element);
            });
        }

    });
}


var save = function(){
    let tbody = document.getElementsByClassName('formulario')[0];
    tbody.addEventListener("submit",(evt)=>{
        evt.preventDefault();
        //alert(":v");
        fetch("/",{
            method:'POST',
            body: JSON.stringify({
                nombre:tbody.nombre.value,
                genero:tbody.genero.value,
                creador:tbody.creador.value
            }),
            headers:{
                'content-type':'application/json'
            }
        }).then((data)=>data.json()).then(function(data){
            if(data.ok){
                console.log(data.anime);
            }else{
                console.log(data);
            }
        });
    });
    

}

let deleteRow = function(row){
    let eliminar = document.createElement("button");
    eliminar.innerHTML = "eliminar";
    row.appendChild(eliminar);
    
    eliminar.addEventListener('click',function(){
        console.log(eliminar.parentElement.getAttribute("data-id"));
        fetch("/"+eliminar.parentElement.getAttribute("data-id"),{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            }
        }).then((data)=>data.json()).then(function(data){
            if(data.ok){
                console.log(data.eliminado);
                eliminar.parentElement.remove(eliminar);
            }else{
                console.log(data.err);
            }
        });
    });

    let actualizar = document.createElement("button");
    actualizar.innerHTML = "actualizar";
    row.appendChild(actualizar); 
    actualizar.addEventListener('click',function(){
        updateRow(row);
    });
}

let updateRow = function(row){
    let tbody = document.getElementsByClassName('formulario')[0];
    let actualizar = document.createElement("button");
    actualizar.innerHTML = "actualizar";
    tbody.appendChild(actualizar);
    console.log(row.getAttribute("data-id"));
    
    actualizar.addEventListener('click',function(){
    fetch("/"+row.getAttribute("data-id"),{
        method:'PUT',
        body: JSON.stringify({
            nombre:tbody.nombre.value,
            genero:tbody.genero.value,
            creador:tbody.creador.value
        }),
        headers:{
            'content-type':'application/json'
        }
    }).then((data)=>data.json()).then(function(data){
        if(data.ok){
            row.nombre.innerHTML=tbody.nombre.value;
            row.genero.innerHTML=tbody.genero.value;
            row.creador.innerHTML=tbody.creador.value;
            tbody.parentElement.remove(actualizar);
        }else{
            console.log(data);
        }
    });
});



}



loadContentAll();
save();
