


let loadContent = function(){

};

let newRow = function(data){
    let tbody = document.getElementsByClassName('anime')[0];
    let fila = document.createElement("tr");fila.setAttribute(`data-id`,data._id);
    
    fila.innerHTML = `
    <td>${data._id}</td>
    <td>${data.nombre}</td>
    <td>${data.genero}</td>
    <td>${data.creador}</td>`;
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
}



loadContentAll();
save();
