class Juegos{
    actualizar(){
        debugger
        let imagenes=[], img
        imagenes=["/img/Prim-matt/num_cero.png","/img/Prim-matt/num_uno.png","/img/Prim-matt/num_dos.png","/img/Prim-matt/num_tres.png","/img/Prim-matt/num_cuatro.png","/img/Prim-matt/num_cinco.png","/img/Prim-matt/num_seis.png","/img/Prim-matt/num_siete.png"
        ,"/img/Prim-matt/num_ocho.png", "/img/Prim-matt/num_nueve.png"]
        document.getElementById("nombre_numero").value = ""
        this.img=this.proceso_random_img(imagenes)
        
        let img_ale=imagenes[this.img]
        let ancho=300
        let alto=300
        document.getElementById("img-num").innerHTML=`<img src="${img_ale}" width="${ancho}" height="${alto}" >`
        
    }
    //PROCESO PRIMARIA MENORES
    //PROCESO PRIMARIA NUMEROS
    proceso_random_img(imagenes){
        debugger
        let valor
        valor=Math.floor(Math.random()*imagenes.length)
        return valor;
    }
    comprobar(){
        debugger
        let num=document.getElementById("nombre_numero").value
        let valor=this.Letra_A_numero(num)
        let mensaje,comprobar
        if(this.img==valor){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
        
    }
    Letra_A_numero(name){
        let number,nombre
        nombre=name.toLowerCase()
        switch (nombre) {
                case "cero": number=0
                break;
                case "uno":number=1
                break;
                case "dos": number=2
                break;
                case "tres":number=3
                break;
                case "cuatro": number=4
                break;
                case "cinco": number=5
                break;
                case "seis":number=6
                break;
                case "siete":number=7
                break;
                case "ocho":number=8
                break;
                case "nueve":number=9
                break;
        }
        return number
    }
    //PROCESO PRIMARIA NUMERO MAYOR
    Num_mayor(){
        let max=20,num, long=3
        let num_aleatorio
        document.getElementById("num").value=""
        this.num_aleatorio=this.proceso_random_num(max,long)
        num=this.num_aleatorio
        
            document.getElementById('num1').innerHTML=`${num[0]}`
             document.getElementById('num2').innerHTML=`${num[1]}`
              document.getElementById('num3').innerHTML=`${num[2]}`

    }
    proceso_random_num(max,long){
        debugger
        let i,array=[]
        for(i=0;i<long;i++){
            array[i]=Math.floor(Math.random()*(max + 1))
        }
        return array
    }
    comprobar_numMayor(){
        debugger
        let i,mayor
        let mensaje,comprobar
        let num=document.getElementById("num").value
        mayor=this.num_aleatorio[0]
        for(i=0;i<3;i++){
            if(this.num_aleatorio[i]>mayor){
            mayor=this.num_aleatorio[i]
            }
        }
       if(mayor==num){
            comprobar="correcto"
         mensaje=this.mensaje(comprobar) 
       }else{
        comprobar="incorrecto"
        mensaje=this.mensaje(comprobar) 
            
       }
       
    }
    //PROCESO PRIMARIA CANTIDAD DE NUMEROS
    actualizar_cadena1(){
        debugger
        let max=4, vocal=[],vocales=[],long,lg1
        let long1,num=[],cad="",cad1=""
        document.getElementById("cant").value=""
        long=this.proceso_random_num1(max,1)
        vocal=this.proceso_random_num(max,long)
        vocales=this.numeros_a_vocales(vocal,long)
        lg1=this.proceso_random_num(max,1)
        long1=lg1[0]
        num=this.proceso_random_num(max,long1)
        cad=this.cadena1(num,long1,long,vocales)
        this.cad=cad
        document.getElementById("cadena1").innerHTML=cad
    }
    cadena1(n,lg1,lg,voc){
        debugger
        let cad="",i,cad1=""
        for(i=0;i<lg;i++){
            cad=cad+voc[i]
        }
        for(i=0;i<lg1;i++){
            cad=cad+n[i]
        }
        cad1=cad.toLocaleUpperCase()
        return cad1
    }
    numeros_a_vocales(vocales,long){
        
        let i, vocal=[]
        for(i=0;i<long;i++){
            switch(vocales[i]){
                case 0: vocal[i]="a"
                break
                case 1: vocal[i]="e"
                break
                case 2: vocal[i]="i"
                break
                case 3: vocal[i]="o"
                break
                case 4: vocal[i]="u"
                break
            }
        }
        return vocal
    }
    comprobar_cant(){
        debugger
        let i,c=0
        let mensaje,comprobar
        let cant=parseInt(document.getElementById("cant").value)
        let cad1=this.cad
        for(i=0;i<cad1.length;i++){
            if(cad1[i]>="0" && cad1[i]<="9"){
                c++
            }
        }
        if(c==cant){
             comprobar="correcto"
         mensaje=this.mensaje(comprobar) 
        }else{
           comprobar="incorrecto"
        mensaje=this.mensaje(comprobar)
        }
    }
    //PROCESO PRIMARIA NUMERO MENOR
    actualizar_numMenor(){
        let max=20,num, long=3
        let num_random
        document.getElementById("num-menor").value = ""
        this.num_random=this.proceso_random_num(max,long)
        num=this.num_random
        
            document.getElementById('num1-menor').innerHTML=`${num[0]}`
             document.getElementById('num2-menor').innerHTML=`${num[1]}`
              document.getElementById('num3-menor').innerHTML=`${num[2]}`
    }
    comprobar_numMenor(){
        debugger
        let i,menor,comprobar="",mensaje
        let num=parseInt(document.getElementById("num-menor").value)
        menor=this.num_random[0]
        for(i=0;i<3;i++){
            if(this.num_random[i]<menor){
            menor=this.num_random[i]
            }
        }
       if(menor==num){
         comprobar="correcto"
         mensaje=this.mensaje(comprobar)
       }else{
        comprobar="incorrecto"
        mensaje=this.mensaje(comprobar)
       }
    }
    //EJERCICIOS DE SUMA DE PRIMARIA MENORES
    //SUMA EJER1
    actualizar_suma(){
        debugger
        let max=30
        this.actualizar_numeros(max)
    }
    actualizar_numeros(max){
        debugger
        let numeros=[],num=[]
        document.getElementById("resp").value = ""
        this.numeros=this.proceso_random_num(max,2)
        num[0]=this.numeros[0]
        num[1]=this.numeros[1]
        if(num[1]>num[0]){
            document.getElementById("num1").innerHTML=num[1]
            document.getElementById("num2").innerHTML=num[0]
        }else{
            document.getElementById("num1").innerHTML=num[0]
            document.getElementById("num2").innerHTML=num[1]
        }
    }
    comprobar_suma1(){
        debugger
        let operador="+"
        this.comprobar_suma_resta(operador)
    }
    comprobar_suma_resta(operador){
        debugger
        let n1,n2,proceso=0
        let mensaje,comprobar
        let resp=parseInt(document.getElementById("resp").value)
        n1=this.numeros[0]
        n2=this.numeros[1]
        if(operador=="+"){
            proceso=n1+n2
        }else{
            if(operador=="-"){
                if(n1>n2){
                    proceso=n1-n2
                }else{
                    proceso=n2-n1
                }
            }else{
                if(operador=="*"){
                    proceso=n1*n2
                }
            }    
        }  
        if(proceso==resp){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar)
           
        }else{
            comprobar="incorrecto"
        mensaje=this.mensaje(comprobar)
        }
    }
    //SUMA EJER2
    actualizar_suma2_Resta2(operador,max){
        debugger
        let  numeros=[],num=[],resp
        document.getElementById("num2_2").value = ""
        this.numeros=this.proceso_random_num(max,2)
        num[0]=this.numeros[0]
        num[1]=this.numeros[1]
        if(operador=="+"){
            resp=num[0]+num[1]
        }else{
                if(num[0]>num[1]){
                    resp=num[0]-num[1]
                }else{
                    resp=num[1]-num[0]
                }
        }
        if(num[1]>num[0]){
            document.getElementById("num1_2").innerHTML=num[1]
            document.getElementById("resp_2").innerHTML=resp
        }else{
            document.getElementById("num1_2").innerHTML=num[0]
            document.getElementById("resp_2").innerHTML=resp
        }
    }
    actualizar_suma2(){
        debugger
        let operador="+",max=25
        this.actualizar_suma2_Resta2(operador,max)
    }
    //SUMA EJER3
    comprobar_suma2(){
        debugger
        let n1,n2
        let mensaje,comprobar
        let num2=parseInt(document.getElementById("num2_2").value)
        if(this.numeros[1]>this.numeros[0]){
            n1=this.numeros[1]
            n2=this.numeros[0]
        }else{
            n1=this.numeros[0]
            n2=this.numeros[1]
        }
        
        if(n2==num2){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar)
           
        }else{
            comprobar="incorrecto"
        mensaje=this.mensaje(comprobar)
        }
    }
    actualizar_suma3_resta3(operador,max){
        debugger
        let  numeros=[],num=[],resp
        document.getElementById("num1_3").value = ""
        this.numeros=this.proceso_random_num(max,2)
        num[0]=this.numeros[0]
        num[1]=this.numeros[1]
        if(operador=="+"){
            resp=num[0]+num[1]
            if(num[1]>num[0]){
                document.getElementById("num2_3").innerHTML=num[1]
                document.getElementById("resp_3").innerHTML=resp
            }else{
                document.getElementById("num2_3").innerHTML=num[0]
                document.getElementById("resp_3").innerHTML=resp
            }
        }else{
            resp=Math.abs(num[1]-num[0])
                if(num[0]>num[1]){
                    document.getElementById("num2_3").innerHTML=num[1]
                    document.getElementById("resp_3").innerHTML=resp
                }else{
                    
                    document.getElementById("num2_3").innerHTML=num[0]
            document.getElementById("resp_3").innerHTML=resp
                }
        }
       
    }
    actualizar_suma3(){
        debugger
        let operador="+",max=25
        this.actualizar_suma3_resta3(operador,max)
    }
    //PROCESO DE RESTA PRIMARIA MENORES
    actualizar_resta3(){
        debugger
        let operador="-",max=30
        this.actualizar_suma3_resta3(operador,max)
    }
    comprobar_suma3(){
        debugger
        let n1,n2
        let mensaje,comprobar
        let num1=parseInt(document.getElementById("num1_3").value)
        if(this.numeros[1]>this.numeros[0]){
            n1=this.numeros[0]
            n2=this.numeros[1]
        }else{
            n1=this.numeros[1]
            n2=this.numeros[0]
        }
        
        if(n1==num1){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar)
           
        }else{
            comprobar="incorrecto"
        mensaje=this.mensaje(comprobar)
        }
    }
    comprobar_resta3(){
        debugger
        let n1,n2
        let mensaje,comprobar
        let num1=parseInt(document.getElementById("num1_3").value)
        if(this.numeros[1]>this.numeros[0]){
            n1=this.numeros[1]
            n2=this.numeros[0]
        }else{
            n1=this.numeros[0]
            n2=this.numeros[1]
        }
        
        if(n1==num1){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar)
           
        }else{
            comprobar="incorrecto"
        mensaje=this.mensaje(comprobar)
        }
    }
    comprobar_resta1(){
        debugger
        let operador="-"
        this.comprobar_suma_resta(operador)
    }
    actualizar_resta2(){
        debugger
        let operador="-",max=25
        this.actualizar_suma2_Resta2(operador,max)
    }
    mensaje(comprobar){

        if("correcto"==comprobar){
            return Swal.fire({
                title: 'Correcto',
                html: '<img src="/img/smile.png" alt="Imagen de bienvenida" style="max-width: 100%px; height: 300px;">',
                customClass: {
                  popup: 'correcto'
                }
              });
        }else{
            if("incorrecto"==comprobar){
                return  Swal.fire({
                    title: 'Incorrecto',
                    html: '<img src="/img/triste.png" alt="Imagen de bienvenida" style="max-width: 100%; height: 300px;">',
                    customClass: {
                      popup: 'incorrecto'
                    }
                  }); 
            }
        }
    }
    //PROCESO MULTIPLICACION PRIMARIA MENORES
    comprobar_MULTI(){
        let operador="*"
        this.comprobar_suma_resta(operador)
    }
    actualizar_multiplicar(){
        debugger
        let max=12
        this.actualizar_numeros(max)
        
    }
    //PROCESO DE FIGURAS GEOMETRICAS PRIMARIA MENORES
    actualizar_figuras(){
        debugger
        let imagenes=[], img2
        imagenes=["/img/Prim-matt/cuadrado.png","/img/Prim-matt/circulo.png","/img/Prim-matt/triangulo.png","/img/Prim-matt/rectangulo.png"]
        document.getElementById("nombre_numero").value = ""
        this.img2=this.proceso_random_img(imagenes)
        
        let img_ale1=imagenes[this.img2]
        let ancho=300
        let alto=300
        document.getElementById("img-num").innerHTML=`<img src="${img_ale1}" width="${ancho}" height="${alto}" >`
    }
    comprobar_figura(){
        debugger
        let nombre=document.getElementById("nombre_numero").value
        let valor=this.figura_A_numero(nombre)
        let mensaje,comprobar
        if(this.img2==valor){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    figura_A_numero(name){
        debugger
        let number,nombre
        nombre=name.toLowerCase()
        switch (nombre) {
                case "cuadrado": number=0
                break;
                case "circulo":
                case "círculo":
                number=1;
                break;
                case "triangulo":
                case "triángulo": number=2
                break;
                case "rectangulo":
                case "rectángulo":
                number=3
                break;
        }
        return number
    }
    actualizar_figura2(){
        debugger
        let imagenes=[], img3
        imagenes=["/img/Prim-matt/cuadrado.png","/img/Prim-matt/triangulo.png","/img/Prim-matt/rectangulo.png"]
        document.getElementById("lados").value = ""
        this.img3=this.proceso_random_img(imagenes)
        
        let img_ale2=imagenes[this.img3]
        let ancho=300
        let alto=300
        document.getElementById("img-num2").innerHTML=`<img src="${img_ale2}" width="${ancho}" height="${alto}" >`
    }
    comprobar_figura2(){
        debugger
        let lados=document.getElementById("lados").value
        let valor=this.numero_a_lado(lados)
        let mensaje,comprobar
        if(this.img3==valor){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    numero_a_lado(lados){
        debugger
        let number,nombre
        nombre=lados.toLowerCase()
        switch (nombre) {
                case "cuatro": 
                case "4": 
                if(this.img3==0){
                    number=0
                }else{
                    number=2
                }
                break;
                case "tres":
                case "3": number=1
                break;
                break;
        }
        return number
    }
    //LENGUAJE PRIMERIA MENORES
    //VOCALES 
    actualizar_vocales(){
        debugger
        let imagenes=[], valor
        imagenes=["/img/Prim-leng/araña.png","/img/Prim-leng/abeja.png","/img/Prim-leng/elefante.png","/img/Prim-leng/iguana.png","/img/Prim-leng/iman.png"
        ,"/img/Prim-leng/oso.png","/img/Prim-leng/unicornio.png","/img/Prim-leng/uva.png"]
        document.getElementById("vocal").value = ""
        this.valor=this.proceso_random_img(imagenes)
        
        let valor_Alea=imagenes[this.valor]
        let ancho=300
        let alto=300
        document.getElementById("img-vocal").innerHTML=`<img src="${valor_Alea}" width="${ancho}" height="${alto}" >`
    }
    comprobar_vocales(){
        debugger
        let vowel=document.getElementById("vocal").value
        let valor1=this.imagen_a_vocal(vowel)
        let mensaje,comprobar
        if(this.valor==valor1){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    imagen_a_vocal(vowel){
        debugger
        let number,nombre
        nombre=vowel.toLowerCase()
        switch (nombre) {
                case "a": 
                if(this.valor==0){
                    number=0
                }else{
                    number=1
                }
                break;
                case "e":number=2;
                break;
                case "i": 
                if(this.valor==3){
                    number=3
                }else{
                    number=4
                }
                break;
                case "o":number=5
                break;
                case "u":
                    if(this.valor==6){
                        number=6
                    }else{
                        number=7
                    }
                break;
        }
        return number
    }
    actualizar_cadenaVocal(){
        debugger
        let max=4, lg,long, valores=[],valor_vocal
        let vocales,vowel,vocal
        document.getElementById("cant1").value=""
        lg=this.proceso_random_num(5,1)
        long=lg[0]
        if(long==0){
            long=long+1
        }
        valores=this.proceso_random_num(max,long)
        valor_vocal=this.proceso_random_num(max,1)
        this.vocales=this.numeros_a_vocales(valores,long)
        vocal=this.numeros_a_vocales(valor_vocal,1)
       this.vowel=vocal[0]
        console.log(vowel)
        document.getElementById("vocales").innerHTML=this.vowel
        document.getElementById("cadena1").innerHTML=this.vocales
    }
    Comprobar_cadenaVocal(){
        debugger
        let i,c=0
        let mensaje,comprobar
        let cant=parseInt(document.getElementById("cant1").value)
        let vowels=this.vocales
        for(i=0;i<vowels.length;i++){
            
                if(vowels[i]==this.vowel){
                    c++
                }
            
        }
        if(c==cant){
             comprobar="correcto"
         mensaje=this.mensaje(comprobar) 
        }else{
           comprobar="incorrecto"
        mensaje=this.mensaje(comprobar)
        }
    }
    Actualizar_Vocal(){
        let valor1,vocal1,vocal2
        document.getElementById("palabra").value=""
        valor1=this.proceso_random_num(4,1)
       this.vocal1=this.numeros_a_vocales(valor1,1)
        vocal2=this.vocal1[0]
        document.getElementById("vocales1").innerHTML=vocal2
    }
    Comprobar_PalabraVocal(){
        let mensaje,comprobar
        let palabra=document.getElementById("palabra").value
        palabra=palabra.toLowerCase()
        if(palabra[0]==this.vocal1[0]){
            comprobar="correcto"
         mensaje=this.mensaje(comprobar)
        }else{
            comprobar="incorrecto"
         mensaje=this.mensaje(comprobar)
         }
    }
    //PRIMARIA MENORES-PALABRAS
    actualizar_palabras(){
        document.getElementById("palabra").value=""
        let i, opcion="", respuestas=["perro","gato","gallina","sapo","leon"]
        let adivinanza=["Es un animal que ladra", "Es un animal que maulla", "Es un animal que cacarea", "Es un pequeño animal verde que salta", "Es el rey de la selva"]
        i=this.proceso_random_img(adivinanza)
        let adivinanza_ale=adivinanza[i]
        document.getElementById("cadena1").innerHTML=adivinanza_ale
        this.opcion=this.respuesta_correcta(adivinanza_ale)
        
    }
    respuesta_correcta(adivinanza_ale){ 
      let opcionCorrecta
            switch(adivinanza_ale){
                case "Es un animal que ladra": opcionCorrecta="perro"
                break
                case "Es un animal que maulla": opcionCorrecta="gato"
                break
                case "Es un animal que cacarea": opcionCorrecta="gallina"
                break
                case "Es un pequeño animal verde que salta": opcionCorrecta="sapo"
                break
                case "Es el rey de la selva": opcionCorrecta="leon"
                break
            }
        
        return opcionCorrecta
    }
    Comprobar_palabras(){
        let mensaje,comprobar
            let palabra=document.getElementById("palabra").value
            palabra=palabra.toLowerCase()
            if(palabra=="león"){
                palabra="leon"
            }
            if(palabra==this.opcion){
                comprobar="correcto"
                mensaje=this.mensaje(comprobar)
               }else{
                   comprobar="incorrecto"
                mensaje=this.mensaje(comprobar)
                }
        }
    actualizar_numeroPalabras(){
            let palabras_arreglo=["Ana le compró a su hijo un juguete","Santiago viajó a Europa","Mi perro Benji es muy juguetón"
            ,"Mi mamá me ayudó a estudiar","Tengo exámen mañana","La profesora nos mandó a dibujar un gato",
            "Mi primo me regaló su jueguete","Dennise me dió un abrazo","Dios es misericordioso","Dios me ama"
            ,"Dios me perdona"]
            let j,oracion,pal
            j=this.proceso_random_img(palabras_arreglo)
           this.oracion=palabras_arreglo[j]
            pal=this.oracion
            document.getElementById("contenido").innerHTML=pal
        }
    comprobar_numeroPalabras(){
            debugger
            let sentences,c,comprobar,mensaje
            let num=parseInt(document.getElementById("cantidad").value)
            sentences=this.oracion
            c=this. process_compro_numeroPalabras(sentences)
            if(c==num){
                comprobar="correcto"
                mensaje=this.mensaje(comprobar)
               }else{
                   comprobar="incorrecto"
                mensaje=this.mensaje(comprobar)
                }
            
        }
    process_compro_numeroPalabras(sentences){
            debugger
            let i,c=0
            sentences=" "+sentences
            for(i=0;i<sentences.length;i++){
                if(sentences[i]!=" "){
                if(sentences[i-1]==" "){
                    c++
                }
                    
                }
            }
            return c
        }
    //PRIMARIA MENORES-CONSONANTES
    actualizar_consonantes(){
        debugger
        let img_consonantes=[], valor
        img_consonantes=["/img/Prim-leng/ballena.png","/img/Prim-leng/casa.png","/img/Prim-leng/dado.png","/img/Prim-leng/foca.png","/img/Prim-leng/gato.png"
        ,"/img/Prim-leng/helado.png","/img/Prim-leng/jirafa.png","/img/Prim-leng/koala.png","/img/Prim-leng/lapiz.png","/img/Prim-leng/mono.png","/img/Prim-leng/nube.png"
        ,"/img/Prim-leng/perro.png","/img/Prim-leng/queso.png","/img/Prim-leng/raton.png","/img/Prim-leng/sandia.png","/img/Prim-leng/tijera.png","/img/Prim-leng/vaca.png"
        ,"/img/Prim-leng/yoyo.png","/img/Prim-leng/zapato.png"]
        document.getElementById("consonante").value = ""
        this.valor_cons=this.proceso_random_img(img_consonantes)
        
        let random_cons=img_consonantes[this.valor_cons]
        let ancho=300
        let alto=300
        document.getElementById("img-consonante").innerHTML=`<img src="${random_cons}" width="${ancho}" height="${alto}" >`
    }
    comprobar_consonantes(){
        debugger
        let consonante=document.getElementById("consonante").value
        let valor1=this.imagen_a_consonante(consonante)
        let mensaje,comprobar
        if(this.valor_cons==valor1){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    imagen_a_consonante(cons){
        debugger
        let number,nombre
        nombre=cons.toLowerCase()
        switch (nombre) {
                case "b": number=0;
                break;
                case "c":number=1;
                break;
                case "d": number=2;
                break;
                case "f":number=3;
                break;
                case "g":number=4;
                break;
                case "h": number=5;
                break;
                case "j":number=6;
                break;
                case "k": number=7;
                break;
                case "l":number=8;
                break;
                case "m":number=9;
                break;
                case "n": number=10;
                break;
                case "p":number=11;
                break;
                case "q": number=12;
                break;
                case "r":number=13;
                break;
                case "s":number=14;
                break;
                case "t": number=15;
                break;
                case "v":number=16;
                break;
                case "y": number=17;
                break;
                case "z":number=18;
                break;
        }
        return number
    }
    actualizar_cantConsonantes(){
        debugger
        let palabras_cons=["Palabra","Murciélago","Ecuador","Lupa","Venado","Araña","Piano","Hipopótamo"]
        let pos_cons,cadena,cad
        pos_cons=this.proceso_random_img(palabras_cons)
        this.cadena=palabras_cons[pos_cons]
        cad=this.cadena
        document.getElementById("contenido1").innerHTML=cad
    }
    comprobar_cantConsonates(){
        debugger
        let cons_num=parseInt(document.getElementById("cantidad1").value)
        let comprobar,mensaje
       let cad=this.cadena
        let c=this.proceso_cantConsonante(cad)
        if(cons_num==c){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    proceso_cantConsonante(cad){
    debugger
        let i,c=0
        cad=cad.toLowerCase()
        for(i=0;i<cad.length;i++){
            if(cad[i]!="a" && cad[i]!="e" && cad[i]!="i" && cad[i]!="o" && cad[i]!="u" && cad[i]!="á" 
            && cad[i]!="é" && cad[i]!="í" && cad[i]!="ó" && cad[i]!="ú"){
                c++
            }
        }
        return c
    }
    //PRIMARIA MAYORES SUMA
    actualizar_suma_mayores(){
        debugger
        let max=450
       this.actualizar_numeros(max)
    }
    actualizar_suma2_mayores(){
        debugger
        let operador="+",max=400
        this.actualizar_suma2_Resta2(operador,max)
    }
    actualizar_suma3_mayores(){
        debugger
        let operador="+",max=400
        this.actualizar_suma3_resta3(operador,max)
    }
    //PRIMERIA MAYORES RESTA
    actualizar_resta(){
        debugger
        let max=400
        this.actualizar_numeros(max)
    }
    actualizar_resta2_mayor(){
        debugger
        let operador="-",max=400
        this.actualizar_suma2_Resta2(operador,max)
    }
    actualizar_resta3_mayor(){
        debugger
        let operador="-",max=400
        this.actualizar_suma3_resta3(operador,max)
    }
    //PRIMARIA MAYORES MULTIPLICACION
    actualizar_multiplicar_mayor(){
        debugger
        let max=50
        this.actualizar_numeros(max)
        
    }
    //PRIMARIA MAYORES DIVISION
    actualizar_division_mayor(){
        debugger
        this.actualizar_numeros2(50,25,1)
        
    }
    proceso_random_num1(max,min){
        let random
        
            random=Math.floor(Math.random()*(max - min + 1))+min
        
        return random
    }
    actualizar_numeros2(max1,max2,min){
        debugger
        let div_num=[],num1,num2,n2,n1
        document.getElementById("resp").value = ""
        
        this.num1=this.proceso_random_num1(max1,min,1)
        this.num2=this.proceso_random_num1(max2,min,1)
        n1=this.num1
        n2=this.num2
        if(n1>n2){
            document.getElementById("num1").innerHTML=n1
            document.getElementById("num2").innerHTML=n2
        }else{
            document.getElementById("num1").innerHTML=n2
            document.getElementById("num2").innerHTML=n1
        }
    }
    comprobar_division(){
        debugger
        let n1=0,n2=0,proceso=0
        let mensaje,comprobar
        let resp=parseInt(document.getElementById("resp").value)
        n1=this.num1
        n2=this.num2
        if(n1>n2){
            proceso=Math.trunc(n1/n2)
        }else{
            proceso=Math.trunc(n2/n1)
        }
      
        if(proceso==resp){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar)
           
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar)
        }
    }
    //PRIMARIA MAYORES ES PAR O IMPAR :)
    actualizar_par_impar(){
        debugger
        let max=20,i,long_cadena,random=[]
        document.getElementById("cant").value=""
        long_cadena=this.proceso_random_num1(4,1,1)
        let aleatorio=[]
        for(i=0;i<=long_cadena;i++){
            aleatorio[i]=this.proceso_random_num1(max,long_cadena)
        }
        this.random_par=aleatorio
        document.getElementById("cadena1").innerHTML=this.random_par
        
    }
    comprobar_par(){
        debugger
     let cant=parseInt(document.getElementById("cant").value)
     let array=[], c=0,i
     let mensaje, comprobar
     array=this.random_par;
     
     for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            c++
        }else{
            
        }
     }
     if(cant==c){
        comprobar="correcto"
        mensaje=this.mensaje(comprobar) 
    }else{
        comprobar="incorrecto"
        mensaje=this.mensaje(comprobar) 
    }
    }
    comprobar_impar(){
        debugger
     let cant=parseInt(document.getElementById("cant").value)
     let array=[], c=0,i
     let mensaje, comprobar
     array=this.random_par;
     
     for(i=0;i<array.length;i++){
        if(array[i]%2!=0){
            c++
        }else{
            
        }
     }
    if(cant==c){
        comprobar="correcto"
        mensaje=this.mensaje(comprobar) 
    }else{
        comprobar="incorrecto"
        mensaje=this.mensaje(comprobar) 
    }
    }
    //PRIMARIA MAYORS DIVISORES
    //SUMA DIVISORES
    actualizar_divisores(){
        //(max,min,long)
        let num_divisor
        this.num_divisor=this.proceso_random_num1(20,2)
        document.getElementById("cant").value=""
        document.getElementById("cadena1").innerHTML=this.num_divisor
    }
    comprobar_divisor(){
        debugger
        let suma_divisor=parseInt(document.getElementById("cant").value)
        let num=this.num_divisor,suma=0
        let mensaje,comprobar
        suma=this.suma_divisores(num)
        if(suma_divisor==suma){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }


    }
    suma_divisores(num){
        let suma=0,i
        for(i=0;i<=num;i++){
            if(num%i==0){
                suma=suma+i
            }
        }
        return suma
    }
    //DIVISORES IMPARES
    comprobar_divisor_impar(){
        let cant_divisor=parseInt(document.getElementById("cant").value)
        let num=this.num_divisor, cant=0
        let mensaje,comprobar
        cant=this.cant_divisores_impar(num)
        if(cant_divisor==cant){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    cant_divisores_impar(num){
        let c=0,i
        for(i=0;i<=num;i++){
            if(num%i==0 && i%2!=0){
                c++
            }
        }
        return c
    }
    //PRIMERIA MAYOR LENGUAJE
    //CANTIDAD DE PALABRAS, LETRAS, VOCALES...
    limpiar(){
        document.getElementById("textarea").value=""
        document.getElementById("palabras").value=""
        document.getElementById("letras").value=""
        document.getElementById("vocales").value=""
        document.getElementById("digitos").value=""
        document.getElementById("signos").value=""
    }
    comprobar_cantidad_parrafos(){
        debugger
        //c_v: contador de vocales; c_l:contador de letras; c_d:contador de digitos; 
        //c_s: contador de signos de puntuacion
        let parrafo=document.getElementById("textarea").value
        let vocales=parseInt(document.getElementById("vocales").value)
        let digitos=parseInt(document.getElementById("digitos").value)
        let letras=parseInt(document.getElementById("letras").value)
        let signos=parseInt(document.getElementById("signos").value)
        let palabras=parseInt(document.getElementById("palabras").value)
        parrafo=parrafo.toLowerCase()
        let c_v,c_d,c_l,c_s,c_p
        let mensaje,comprobar
        c_v=this.contador_Vocales(parrafo)
        c_d=this.contador_digitos(parrafo)
        c_l=this.contador_letras(parrafo)
        c_s=this.contador_signos(parrafo)
        c_p=this.contador_palabras(parrafo)
        if(vocales==c_v && digitos==c_d && letras==c_l && signos==c_s && palabras==c_p){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    contador_Vocales(parrafo){
        debugger
        let i, c_v=0
        for(i=0;i<parrafo.length;i++){
            if(parrafo[i]=="a" || parrafo[i]=="e" || parrafo[i]=="i" || parrafo[i]=="o" || parrafo[i]=="u"
            || parrafo[i]=="á" || parrafo[i]=="é" || parrafo[i]=="í" || parrafo[i]=="ó" || parrafo[i]=="ú"){
                c_v++
            }
           
        }
        return c_v
    }
    contador_digitos(parrafo){
        debugger
        let i, c_d=0
        for(i=0;i<parrafo.length;i++){
            if(parrafo[i]>="0" && parrafo[i]<="9"){
                c_d++
            }
            
        }
        return c_d
    }
    contador_letras(parrafo){
        debugger
        let i, c_l=0
        for(i=0;i<parrafo.length;i++){
            if(parrafo[i]>="a" && parrafo[i]<="z" || parrafo[i]=="á" || parrafo[i]=="é" || parrafo[i]=="í" 
            || parrafo[i]=="ó" || parrafo[i]=="ú"){
                c_l++
            }
            
    }
        return c_l
    }
    contador_signos(parrafo){
        debugger
        let i, c_s=0
        for(i=0;i<parrafo.length;i++){
            if(parrafo[i]=="," || parrafo[i]==";" || parrafo[i]==":" || parrafo[i]=="." ){
                c_s++
            }
            
    }
        return c_s
    }
    contador_palabras(parrafo){
        debugger
        let i, c_p=0
        parrafo=" "+parrafo
        for(i=0;i<parrafo.length;i++){
            if(parrafo[i-1]==" " && parrafo[i]!=" "){
                c_p++
            }
            
    }
     return c_p
    }
    //PRIMARIA MAYOR LECTURAS
    comprobar_lectura1(){
        let cant_animales=parseInt(document.getElementById("cant_animales").value)
        let copiloto=document.getElementById("copiloto").value
        let conductor=document.getElementById("conductor").value
        conductor=conductor.toLowerCase()
        copiloto=copiloto.toLowerCase()
        let mensaje,comprobar
        if(cant_animales==5 && (copiloto=="perro" ||copiloto=="el perro") && (conductor=="ardilla" || conductor=="la ardilla")){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    
    }
    comprobar_lectura2(){
        let nombre=document.getElementById("nombre").value
        let objeto_encontrado=document.getElementById("objeto_encontrado").value
        let mensaje, comprobar
        nombre=nombre.toLowerCase()
        objeto_encontrado=objeto_encontrado.toLowerCase()
        
        if(nombre=="juanito" && (objeto_encontrado=="queso" || objeto_encontrado=="un queso")){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
        
    }
    limpiar1(){
        document.getElementById("nombre").value=""
        document.getElementById("objeto_encontrado").value=""
        document.getElementById("razon").value=""
    }
    //PRIMARIA MAYOR PALABRAS AGUDAS, GRAVES, ESDRUJULAS
    actualizar_palabra_agudas(){
        let palabras_acen=["Corazón","Azúcar","Fantástico","Pared","Semántico","Caníbal","Papel","Césped",
        "Murciélago","Nadar","Lágrima","Jueves","Competir","Pareja","Régimen","Resumen","Copiar","México",
        "Prometer","Rojo","Héroe","Canción","Puerta","Léxico","Asiático","Cónsul","Café","Bíceps","Menú",
        "Fonética","Águila","Ratón","Partido"],word_acen=""
        document.getElementById("what_is").value=""
        let pos=this.proceso_random_num1(32,0)
        this.word_acen=palabras_acen[pos]
        document.getElementById("cadena1").innerHTML=this.word_acen
    }
    comprobar_palabras_agudas(){
        let what_is=document.getElementById("what_is").value
        what_is=what_is.toLowerCase()
        let palabra=this.word_acen
        let mensaje,comprobar
        if(what_is=="esdrujula"){
            what_is="esdrújula"
        }
        let resp=this.proceso_palabras_agudas(palabra)
        console.log(resp)
        if(resp==what_is){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    proceso_palabras_agudas(palabra){
       debugger
        palabra = palabra.toLowerCase();
        let resp="esdrújula",i
        let ultima = palabra[palabra.length - 1];
        let penultima=palabra[palabra.length-2]
        if(ultima=="n" || ultima=="s"){
            if(penultima=="á" || penultima=="é" || penultima=="í" || penultima=="ó" || penultima=="ú"){
                resp="aguda"
                return resp
            }else{
                resp="grave"
                return resp
            }
        }else {
            if(ultima=="á" || ultima=="é" || ultima=="í" || ultima=="ó" || ultima=="ú"){
                resp="aguda"
                return resp
        }
        }

        if(ultima=="l" || ultima=="d" || ultima=="j" || ultima=="r"){
            for(i=0;i<palabra.length;i++){
                if(palabra[i]=="á" || palabra[i]=="é" || palabra[i]=="í" || palabra[i]=="ó" || palabra[i]=="ú"){
                    resp="grave"
                    return resp
                } 
            }
            resp="aguda"
        }  
       return resp
    }
    //PRIMARIA MAYORES ADIVINZANZAS
    actualizar_adivinanza_mayor(){
        let adivinanzas=["Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.",
        "En el campo vive, en el campo pasta, tiene cuernos y mala leche traspasa.",
        "Soy redonda como el sol, pero no alumbro de día. De noche en el cielo, mi luz guía.",
        "En la mañana camina con cuatro patas, al mediodía con dos, y por la tarde con tres. ¿Qué es?",
        "Cuatro patas tiene mi cama, pero no puede caminar. ¿Qué es? "]
        let pos_adivinar
        this.pos_adivinar=this.proceso_random_num1(4,0)
        let pos=this.pos_adivinar
        let adivinar
        adivinar=adivinanzas[pos]
        document.getElementById("adivinanzas").innerHTML=adivinar
    } 
    comprobar_Adivinanza_mayor(){
        debugger
        let respuestas=["pera","vaca","luna","ser humano","silla"]
        let resp=respuestas[this.pos_adivinar]
        let resp_user=document.getElementById("resp_user").value
        let comprobar,mensaje
        resp_user=resp_user.toLowerCase()
        resp_user=this.proceso_adivinar_mayor(resp_user)

        if(resp_user==resp){
            comprobar="correcto"
            mensaje=this.mensaje(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje(comprobar) 
        }
    }
    proceso_adivinar_mayor(resp_user){
        if(resp_user=="la vaca"){
            resp_user="vaca"
        }else{
            if(resp_user=="la pera"){
                resp_user="pera"
            }else{
                if(resp_user=="la luna"){
                    resp_user="luna"
                }else{
                    if(resp_user=="la silla"){
                        resp_user="silla"
                    }else{
                        if(resp_user=="el ser humano" ||  resp_user=="el hombre" || resp_user=="hombre"){
                            resp_user="ser humano"
                        }
                    }
                }
            }
        }
        return resp_user
    }
    //SECUNDARIA
    //SECUNDARIA BASICA SUPERIOR
    // SECUNDARIA BASICA SUPEROR AREA
    proceso_random_num2(max,min){
        debugger
        let random = Math.floor(Math.random() * ((max * 10) - (min * 10) + 1)) + (min * 10);
        random = random / 10;  // Dividir por 10 para obtener decimales.
        return random;
    }
    actualizar_area(){
        let base, altura
        this.base=this.proceso_random_num2(20,1)
        this.altura=this.proceso_random_num2(20,1)
        document.getElementById("base").innerHTML=this.base
        document.getElementById("altura").innerHTML=this.altura
    }
    comprobar_area(){
        debugger
        let resp_area=parseFloat(document.getElementById("resp_area").value)
        let area=(this.base*this.altura)/2
        area=Math.round(area * 100) / 100
        let comprobar,mensaje
        if(resp_area==area){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
        
    }
    comprobar_area2(){
        debugger
        let resp_area=parseFloat(document.getElementById("resp_area").value)
        let area=this.base*this.altura
        area=Math.round(area * 100) / 100
        let comprobar,mensaje
        if(resp_area==area){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    actualizar_area3(){
        let lado
        this.lado=this.proceso_random_num2(20,1)
        document.getElementById("lados").innerHTML=this.lado
        
    }
    comprobar_area3(){
        debugger
        let resp_area=parseFloat(document.getElementById("resp_area").value)
        let area=this.lado**2
        area=Math.round(area * 100) / 100
        let comprobar,mensaje
        if(resp_area==area){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    comprobar_area4(){
        debugger
        let resp_area=parseFloat(document.getElementById("resp_area").value)
        let area=Math.PI*this.lado**2
        area=Math.round(area * 100) / 100
        let comprobar,mensaje
        if(resp_area==area){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    //SECUNDARIA BASICA SUPERIOR IMPUESTO
    actualizar_impuesto(){
        let subtotal,impuesto
        this.subtotal=this.proceso_random_num2(990,100)
        this.impuesto=this.proceso_random_num1(19,5)
        document.getElementById("subtotal").innerHTML=this.subtotal
        document.getElementById("impuesto").innerHTML=this.impuesto
    }
    comprobar_impuesto(){
        debugger
        let resp_impuesto=parseFloat(document.getElementById("resp_imps").value)
        let sub=this.subtotal
        let imp=this.impuesto
        let mensaje, comprobar
        imp=imp/100
        let resp=sub*(1+imp)
        resp=Math.round(resp*100)/100
        if(resp_impuesto==resp){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    actualizar_cescuento(){
        let subtotal_des,descuento_des
        this.subtotal_des=this.proceso_random_num2(990,100)
        this.descuento_des=this.proceso_random_num1(60,5)
        document.getElementById("subtotal").innerHTML=this.subtotal_des
        document.getElementById("impuesto").innerHTML=this.descuento_des
    }
    comprobar_descuento(){
        debugger
        let resp_descuento=parseFloat(document.getElementById("resp_desc").value)
        let sub=this.subtotal_des
        let des=this.descuento_des
        let mensaje, comprobar
        des=des/100
        let resp=sub*(1-des)
        resp=Math.round(resp*100)/100
        if(resp_descuento==resp){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    actualizar_problemas_basico(){
        debugger
        
        let problemas=["Si el triple de un número menos 7 es igual a 20, ¿cuál es ese número?",
        "Si 5 libros cuestan $60, ¿cuánto costarán 8 libros?",
        "Si viajas a una velocidad de 60 km/h, ¿cuánto tiempo tomará recorrer 120 km?",
        "Si una receta requiere 2 tazas de harina por cada 3 tazas de azúcar, ¿cuántas tazas de harina necesitas si usas 9 tazas de azúcar?",
        "Un triángulo tiene un ángulo agudo de 45 grados y otro de 60 grados. ¿Cuánto mide el tercer ángulo?"]
       document.getElementById("resp_user").value=""
        let pos_probl,pos, problema
        this.pos_probl=this.proceso_random_num1(4,0)
        pos=this.pos_probl
        problema=problemas[pos]
        document.getElementById("problemas").innerHTML=problema
    }
    comprobar_problemas_basico(){
        let resp_user=parseFloat(document.getElementById("resp_user").value)
        let respuestas_probl=[9,96,2,6,75]
        let pos=this.pos_probl
        let mensaje,comprobar
        let resp=respuestas_probl[pos]
        if(resp==resp_user){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    actualizar_bases10(){
        let num_base10,base,base2
        this.num_base10=this.proceso_random_num1(1000,100)
        base=this.proceso_random_num1(16,2)
        if(base==10){
        base=2
        }
        this.base10=base
        document.getElementById("view_num").innerHTML=this.num_base10
        document.getElementById("view_base").innerHTML=this.base10
    }
    comprobar_base10(){
        let resp_base=document.getElementById("resp_base").value
        let num=this.num_base10,baseN=this.base10
        resp_base=resp_base.toLocaleUpperCase()
        let resp=this.De_Base10_BaseN(num,baseN)
        let mensaje, comprobar
        if(resp==resp_base){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    De_Base10_BaseN(num,base){
        debugger
        let i,digito,aux="",r=0
        let letras=["A","B","C","D","E","F"]

        while(num>0){
            r=num%base
            if(r>9 && (base>=11 && base<=16)){
            digito=letras[r-10]
            aux=digito+aux
            }else{
                aux=r+aux
            }
            num=Math.trunc(num/base)
        
        }
        return aux
        }
    actualizar_bases2(){
        let long=this.proceso_random_num1(13,5)
        let num_base2,base,num_base,base2
        num_base2=this.proceso_random_num(1,long)
        this.num_base=this.ArregloACadena(num_base2)
        base=this.proceso_random_num1(16,2)
        if(base==2){
            base=10
        }
        this.base2=base
        document.getElementById("view_num1").innerHTML=this.num_base
        document.getElementById("view_base1").innerHTML=this.base2
    }
    comprobar_base2(){
        debugger
        let resp_base=document.getElementById("resp_base").value
        let num=this.num_base,baseN=this.base2
        resp_base=resp_base.toLocaleUpperCase()
        let resp=this.De_Base2_BaseN(num,baseN)
        let mensaje, comprobar
        if(resp==resp_base){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    De_Base2_BaseN(num,base){
        debugger
        let i, aux=[], suma=0,j
        for(i=num.length-1;i>=0;i--){
            for(j=0;j<num.length;j++){
                aux[j]=num[j]*2**i
                i--
            }
        }
        for(j=0;j<aux.length;j++){
            suma=suma+aux[j]
        }
        suma=this.De_Base10_BaseN(suma,base)
        return suma
    }
    ArregloACadena(array){
        debugger
        let string=""
        let i

        for(i=0;i<array.length;i++){

                string=string+array[i]
            
        }
        return string
      
        
    }
    //SECUNDARIA OTOGRAFIA
    actualizar_ortografia(){
        let incorrectas=["Exámen","Haiga","Exepcion","Exausto","Exortar","Cabidad","Fé","Héroina"]
        let pos,palabra,pos_o
        pos=this.proceso_random_num1(7,0)
        palabra=incorrectas[pos]
        this.pos_o=pos
        document.getElementById("mostrar").innerHTML=palabra
    }
    comprobar_ortografia(){
        debugger
        let correctas=["examen","haya","excepción","exhausto","exhortar","cavidad","fe","heroína"]
        let palabra,mensaje,comprobar,pos
        pos=this.pos_o
        palabra=correctas[pos]
        let resp_user=document.getElementById("resp_user").value
        resp_user=resp_user.toLowerCase()
        if(resp_user==palabra){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }
    actualizar_acertijos(){
        let acertijos=["Un agricultor tenía 17 ovejas. Todas menos 9 murieron. ¿Cuántas ovejas le quedan al agricultor?",
        "Pasa el día y la noche sin dormir, ¿qué es?",
        "¿Qué es aquello que siempre miras pero nunca puedes ver en un espejo?",
        "Tiene llaves pero no abre cerraduras. A veces tiene espacio, pero no es un lugar. ¿Qué es?",
        "Tiene una habitación sin ventanas ni puertas, pero está llena de oro y plata. ¿Qué es?"]
        let pos,acertijo,pos_a
        pos=this.proceso_random_num1(4,0)
        acertijo=acertijos[pos]
        this.pos_a=pos
        document.getElementById("acertijo").innerHTML=acertijo
    }
    comprobar_acertijos(){
        let respuestas=["9","reloj","futuro","teclado","huevo"]
        let acertijo,pos,mensaje,comprobar
        pos=this.pos_a
        acertijo=respuestas[pos]
        let resp_user=document.getElementById("resp_user").value
        resp_user=resp_user.toLowerCase()
        if(resp_user=="el reloj"){
            resp_user="reloj"
        }else{
            if(resp_user=="el futuro" || resp_user=="mi futuro"){
                resp_user="futuro"
            }else{
                if(resp_user=="el teclado"){
                    resp_user="teclado"
                }else{
                    if(resp_user=="el huevo"){
                        resp_user="huevo"
                    }else{
                        if(resp_user=="9 ovejas"){
                            resp_user="9"
                        }
                    }
                }
            }
        }
        if(resp_user==acertijo){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
    }

    mensaje_secundaria(comprobar){

        if("correcto"==comprobar){
            return Swal.fire({
                title: 'Correcto',
                html: '<img src="/img/smile.png" alt="Imagen de bienvenida" style="max-width: 100%px; height: 300px;">',
                customClass: {
                  popup: 'correcto'
                }
              });
        }else{
            if("incorrecto"==comprobar){
                return  Swal.fire({
                    title: 'Incorrecto',
                    html: '<img src="/img/triste.png" alt="Imagen de bienvenida" style="max-width: 100%; height: 300px;">',
                    customClass: {
                      popup: 'incorrecto'
                    }
                  }); 
            }
        }
    }
    actualizar_verbos(){
        let oraciones=["Mañana, empezaremos un nuevo capítulo en el libro de matemáticas.",
        "La próxima semana, los estudiantes presentarán sus proyectos.",
        "El próximo mes, el profesor organizará un viaje educativo.",
        "El próximo año, estudiaremos literatura clásica.",
        "En unas horas, comenzará la competencia de ciencias."]
        let pos,oracion,pos_v
        pos=this.proceso_random_num1(4,0)
        this.oracion=oraciones[pos]
        this.pos_v=pos
        document.getElementById("oraciones").innerHTML=this.oracion
    }
    comprobar_verbos(){
        let respuesta=["empezaremos","presentarán","organizará","estudiaremos","comenzará"]
        let oracion2,pos,mensaje,comprobar,pos_bus,oracion1
        pos=this.pos_v
        oracion2=respuesta[pos]
        oracion1=this.oracion
        let resp_user=document.getElementById("resp_user").value
        pos_bus=this.Buscar_Elemento(oracion1,resp_user)
        resp_user=resp_user.toLowerCase()
        if(pos>=0 && resp_user==oracion2){
            comprobar="correcto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }else{
            comprobar="incorrecto"
            mensaje=this.mensaje_secundaria(comprobar) 
        }
        resp_user=resp_user.toLowerCase()
        
    }
    Buscar_Elemento(cad,sub){
        let i,j,find=false,pos=-1
        for(i=0;i<cad.length;i++){
            if(cad[i]==sub[0]){
                for(j=0;j<sub.length;j++){
                    if(cad[i+j]==sub[j]){
                        find=true   
                    }else{
                        find=false
                        break
                    }
                }
                if(find==true){
                    pos=i
                    break
                }
            }
        }
        return pos
        }
        actualizar_obras(){
            debugger
        let obras=["Edipo Rey","La Odisea","Romeo y Julieta","Alicia en el País de las Maravillas",
        "Drácula","La Ilíada","El Quijote","Frankenstein","Hamlet","Cien Años de Soledad"]
        let imagenes_ob=["/img/edipo_rey.jpg","/img/odisea.png","/img/romeo.jpg","/img/alicia.jpg",
        "/img/dracula.jpg","/img/iliada.jpg","/img/quijote.jpg","/img/frankenstein.jpg","/img/hamlet.jpg",
        "/img/cien_años.png"]
        let pos,obra,pos_ob,img
        pos=this.proceso_random_num1(9,0)
        obra=obras[pos]
        img=imagenes_ob[pos]
        this.pos_ob=pos
        let ancho=150
        let alto=250
        document.getElementById("img-obra").innerHTML=`<img src="${img}" width="${ancho}" height="${alto}" >`
        document.getElementById("obras").innerHTML=obra
        }
    
        
        comprobar_obras(){
            debugger
            let respuestas=["sófocles","homero","william shakespeare","lewis carroll","bram stoker",
            "homero","miguel de cervantes","mary shelley","william shakespeare","gabriel garcía"]
            let obra,pos,mensaje,comprobar
            pos=this.pos_ob
            obra=respuestas[pos]
            let resp_user=document.getElementById("resp_user").value
            resp_user=resp_user.toLowerCase()
            if(resp_user==obra){
                comprobar="correcto"
                mensaje=this.mensaje_secundaria(comprobar) 
            }else{
                comprobar="incorrecto"
                mensaje=this.mensaje_secundaria(comprobar) 
            }
        }
        
}

let play = new Juegos()