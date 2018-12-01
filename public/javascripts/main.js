


let loadContent = function(){

};

let newRow = function(){
    let tbody = document.getElementsByClassName('formulario')[0];
    console.log(tbody.guardar);
}
newRow();


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
        }).then((data)=>JSON(data)).then(function(data){
            if(data.ok){
                console.log(data);
            }else{
                console.log(data);
            }
        });
    });
    

}
save();
