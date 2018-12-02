


let loadContent = function(){

};

let newRow = function(data){
    let tbody = document.getElementsByClassName('anime')[0];
    let fila = document.createElement("tr");fila.setAttribute(`data-id`,data._id);
    
    fila.innerHTML = `
    <td>${data._id}</td>
    <td class="nombre">${data.nombre}</td>
    <td class="genero">${data.genero}</td>
    <td class="creador">${data.creador}</td>`;
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
                newRow(data.anime);
            }else{
                console.log(data);
            }
        });
    });
    

}

let deleteRow = function(row){
    let eliminar = document.createElement("i");eliminar.setAttribute("class","fas fa-trash-alt");
    eliminar.innerHTML = "";
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

    let actualizar = document.createElement("i");actualizar.setAttribute("class","fas fa-edit");
    actualizar.innerHTML = "";
    row.appendChild(actualizar); 
    actualizar.addEventListener('click',function(){
        updateRow(row);
    });
}

let updateRow = function(row){
    let tbody = document.getElementsByClassName('formulario')[0];
    let actualizar = document.createElement("i");actualizar.setAttribute("class","fas fa-edit");
    actualizar.innerHTML = "actualizar";
    tbody.appendChild(actualizar);

    let cancelar = document.createElement("i");cancelar.setAttribute("class","fas fa-ban");
    cancelar.innerHTML = "";
    tbody.appendChild(cancelar);
    
    cancelar.addEventListener('click',function(){
        actualizar.replaceWith();
        cancelar.replaceWith();
    });
    actualizar.addEventListener('click',function(){
        let newname= tbody.nombre.value;
        let newGenro = tbody.genero.value;
        let newCreator = tbody.creador.value;
        fetch("/"+ row.getAttribute("data-id"),{
            method:'PUT',
            body: JSON.stringify({
                nombre: newname,
                genero:newGenro,
                creador: newCreator
            }),
            headers:{
                'content-type':'application/json'
            }
        }).then((data)=>data.json()).then(function(data){
            if(data.ok){
                row.getElementsByClassName('nombre')[0].innerHTML= newname;
                row.getElementsByClassName('genero')[0].innerHTML= newGenro;
                row.getElementsByClassName('creador')[0].innerHTML= newCreator;
                actualizar.replaceWith();
            }else{
                console.log(data);
            }
        });
});



}



loadContentAll();
save();
