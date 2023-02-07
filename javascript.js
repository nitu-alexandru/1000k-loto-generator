
let divMain = document.getElementById("main");
let divUserInput = document.getElementById("userinput");
let numereExtrase = [];
let variante = new Array();

document.getElementById('trimite').onclick = function(){
    verifica();

};

function verifica(){
    // stocam valoarile primite din input (ce vine din input e string)
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let number3 = document.getElementById("number3").value;
    let number4 = document.getElementById("number4").value;
    let number5 = document.getElementById("number5").value;
    let number6 = document.getElementById("number6").value;
    let arrayNumereUser = new Array();
    arrayNumereUser.push(number1, number2, number3, number4, number5, number6);

    // definim variabila unique ca si set din numerele primite de la user si le selectam doar pe cele unice (verificam dubluri)
    const unique = Array.from(new Set(arrayNumereUser));

    // conditii (daca e gol)
    if(number1 == "" || number2 == "" || number3 == "" || number3 == "" ||number4 == "" || number5 == "" || number6 == "" ||
     unique.length !== arrayNumereUser.length){

        // vezi daca exista p-ul cu eroarea
        if(divUserInput.lastChild.tagName === "P"){
            document.getElementById("eroare").remove();
        };

       // cauta div-ul cu id = castig si daca exista stocheaza-l in variabila divCastig.
       let divCastig = document.getElementById("castig");

       // daca exista div-ul cu id = castig, sterge-l

       if(divCastig){document.getElementById("castig").remove();}
        let pUserInput = document.createElement("p");
        divUserInput.append(pUserInput);
        pUserInput.innerHTML="Nu ati completat toate variantele ori numerele sunt dublate";
        pUserInput.className = "eroare";
        pUserInput.id = "eroare";
    }
    else if(number1 > 49 || number2  > 49 || number3 > 49 || number4 > 49 || number5 > 49 || number6 > 49 ){
        // vezi daca exista p-ul cu eroarea
        if(divUserInput.lastChild.tagName === "P"){
            document.getElementById("eroare").remove();
        };

        // cauta p-ul cu id = eroare si daca exista stocheaza-l in variabila pEroare
        let pEroare = document.getElementById("eroare");

        // daca exista p-ul cu id = eroare, sterge-l
        if(pEroare){document.getElementById("eroare").remove();};

        let pUserInput = document.createElement("p");
        divUserInput.append(pUserInput);
        pUserInput.innerHTML="Una sau mai multe numere inserare depasesc valoarea maxima admisa";
        pUserInput.className = "eroare";
        pUserInput.id = "eroare";
        }
    
    else
    {   
        // golim array ul de variante generate
        if(variante){let variante = [];}

        // selectam toate p-urile cu clasa = varianta si le stergem daca exista :)
        const varianteDump = document.querySelectorAll('.varianta');

        varianteDump.forEach(varianta => {
        varianta.remove();
        });

        // generam cele 1000 de variante
        for (let v = 0; v < 1000; v++){
            let numereExtrase = [];
            
            for(let i = 1; i < 7; i++){
                let genNumber = Math.floor(Math.random() * (50-1) + 1);
                if(numereExtrase.includes(genNumber)){
                    i--;
                }else{
                numereExtrase.push(genNumber);    
                }
            }
        
            variante[v] = numereExtrase; 
            numereExtrase = [];
        }
        
        
        for (let p = 0; p < variante.length; p++){
            let pVariante = document.createElement("p");
            divMain.append(pVariante);
            pVariante.className = "varianta";
            pVariante.innerHTML = (p+1) + "). " + variante[p];
        }   
       // cauta div-ul cu id = castig si daca exista stocheaza-l in variabila divCastig.
       let divCastig = document.getElementById("castig");

       // daca exista div-ul cu id = castig, sterge-l
       if(divCastig){document.getElementById("castig").remove();}
       
       // cauta p-ul cu id = eroare si daca exista stocheaza-l in variabila pEroare
       let pEroare = document.getElementById("eroare");

       // daca exista p-ul cu id = eroare, sterge-l
       if(pEroare){document.getElementById("eroare").remove();};

        let test = new Array();
        const numaraVarianteleCastigatore = {};
        for(let c = 0; c < variante.length; c++){  
            for (let cc = 0 ; cc < arrayNumereUser.length; cc++){
            
                for (let ccc = 0; ccc < arrayNumereUser.length; ccc++){
                    if(variante[c][ccc] == arrayNumereUser[cc]){
                        test.push(variante[c]);
                    }
                 }
            }

        }

        for (let vc = 0; vc < test.length; vc++){
            let varianta = test[vc];
            if(numaraVarianteleCastigatore[varianta]){
                numaraVarianteleCastigatore[varianta] += 1;
            }
            else
            {
                numaraVarianteleCastigatore[varianta] = 1;
            }
           
        }
        let varianteTotal = Object.values(numaraVarianteleCastigatore);
        let varianteTotal2 = (Object.keys(numaraVarianteleCastigatore));

        //let pUserInput = document.createElement("p");
        let divCastigatoare = document.createElement("div");
        divUserInput.append(divCastigatoare);
        divCastigatoare.id = "castig";
        //let divCastigatoare.append(pUserInput);

        for(let vT=0; vT < varianteTotal.length; vT++){
            let exemplu = varianteTotal[vT];
            if(exemplu == 3){

                let pUserInput = document.createElement("p");
                divCastigatoare.append(pUserInput);
                pUserInput.innerHTML="Varianta asta ti-a castigat o bere: " + varianteTotal2[vT];
                pUserInput.className = "castigatoare";
                pUserInput.id = "castig";
            }

            if(exemplu == 4){

                let pUserInput = document.createElement("p");
                divCastigatoare.append(pUserInput);
                pUserInput.innerHTML="Varianta asta ti-a castigat o un meniu la KFC: " + varianteTotal2[vT];
                pUserInput.className = "castigatoare";
                pUserInput.id = "castig";
            }

            if(exemplu == 5){

                let pUserInput = document.createElement("p");
                divCastigatoare.append(pUserInput);
                pUserInput.innerHTML="HopA! Varianta asta ti-a adus un castig de impartit cu familia :) " + varianteTotal2[vT];
                pUserInput.className = "castigatoare";
                pUserInput.id = "castig";
            }

            if(exemplu == 6){

                let pUserInput = document.createElement("p");
                divCastigatoare.append(pUserInput);
                pUserInput.innerHTML="AM CASTIGAT !!!!!!! AM GASIT 6 DIN 49" + varianteTotal2[vT];
                pUserInput.className = "castigatoare";
                pUserInput.id = "castig";              
            }
        }
        
    }
}


