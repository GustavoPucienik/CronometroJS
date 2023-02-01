(function(){


    const iniciarBtn = document.getElementById("iniciar")
    const pararBtn = document.getElementById("parar")
    const reiniciaBtn = document.getElementById("reiniciar") 
    
    function iniciar (){
        console.log("iniciou")
    }
    function parar (){
        console.log("parou")
    }
    function reinicia (){
        console.log("reiniciou")
    }

    iniciarBtn.addEventListener("click",  () =>  iniciar())
    pararBtn.addEventListener("click",  () => parar())
    reiniciaBtn.addEventListener("click",  () => reinicia())

    

})()