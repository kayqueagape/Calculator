document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('classico-premium');
    const texto = document.getElementById('texto');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            texto.textContent = 'Premium';
        } else {
            texto.textContent = 'Clássico';
        }
    });
});






function calculatePrice() {
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    

    //Lucro desejado %
    const desiredProfit = parseFloat(document.getElementById('desiredProfit').value);



    //tabela fixa Impost shope
    const imposat=(14.3)/ 100
    console.log(imposat)
    //porcentagem comissão shope
    const comis=(12.57) /100
    console.log(comis)
    //margem de lucro
    const margin=(desiredProfit) / 100
    console.log(margin)



    //Forula preço de venda;
    const custoUni= (productPrice + 3)//taxa de 3R$ adicionada;
    console.log(custoUni)
    //imposto + comissão da shope + margem de lucro 
    const somaicm= (14.3 + 12.57 + desiredProfit) / 100
    console.log(somaicm)
    //calcular denominador da formula
    const denom= (1 - somaicm)
    console.log(denom)

    //Preço da venda:
    const precVend=(custoUni)/ denom
    console.log(precVend)
    //resum for calc price final que vai pro marktplace sobre o produto;
    const buyPric= precVend
    console.log(buyPric)


    //verificações especificadas
    //aplicado imposto
    const impost=(buyPric * imposat) 
    console.log(impost)
    //comissão de marketplace:
    const comissMark=(buyPric * comis)
    console.log(comissMark)
    //lucro:
    const lucroP=(buyPric * margin)
    console.log(lucroP)
    //custo total:
    const custTota=(productPrice + 3 + impost + comissMark) //3R$ custpo de envio
    console.log(custTota)
    //Lucro Real:
    const lucrototo=(buyPric- custTota +impost)
    console.log(lucrototo)







    //page Info Shope
    document.getElementById('shopee').innerHTML = "<h3>Shopee:</h3><p>R$ " + buyPric.toFixed(2) + "</p>";

    document.getElementById('lucroLiqshope').innerHTML = "<p> Á receber por venda : " + buyPric.toFixed(2) + " R$ </p>";
    
    document.getElementById('postpag').innerHTML= "<p>Imposto Pago: " + impost.toFixed(2) + " R$</p>";

    document.getElementById('comi').innerHTML= "<p>Comissão da shope: " + comissMark.toFixed(2) + " R$ </p>";
    

    document.getElementById('luc').innerHTML= "<p>Lucro: " + lucroP.toFixed(2) + " R$ </p>";
    
    document.getElementById('custo').innerHTML= "<p>Custo total: " + custTota.toFixed(2) + " R$ </p>";

    document.getElementById('lucr').innerHTML= "<p>Lucro Real + imposto: " + lucrototo.toFixed(2) + " R$</p>";
    //*** *







    //mercado livre taxas
    //tabela fixa Impost MErliver
    
    //porcentagem comissão Mvliv
    const comisMeli=(12.57) /100
    console.log(comis)


    const weight = parseFloat(document.getElementById('weight').value);
    //criando const pra colocar dentro do if;
    let shippingPrice;




    const pricecustOn= (productPrice*margin+productPrice)
    console.log(pricecustOn)
    console.log("eu estive aqui")

    //taxa mercado livre envio // com reputação verde
    if (pricecustOn <=79){
        //quem paga o frete e o comprador
        shippingPrice= 6
        }else if(pricecustOn >=79.01){
        //valor acima de79,01 pago taxa; ex se o preço do produto 1 produto sem contar com a quantidade que foi pega, ele paga o frete;
        

        if (weight <=300 ) {
            shippingPrice = 20.45;
        } else if (weight >= 301 && weight<=500) {
            shippingPrice = 20.95;
        } else if (weight >=501 && weight<=1000) {
            shippingPrice = 21.95;
        } else if (weight >= 1001 && weight<=2000) {
            shippingPrice = 23.45;
        } else if (weight >= 2001&& weight<=3000) {
            shippingPrice = 23.95;
        } else if (weight >= 3001 && weight<=4000) {
            shippingPrice = 24.95;
        } else if (weight >=4001 && weight <=5000) {
            shippingPrice = 25.95;
        } else if (weight >= 5001 && weight<= 9000) {
            shippingPrice = 41.95;
        } else if (weight >= 9001 && weight <=13000) {
            shippingPrice = 65.95;
        } else if (weight >= 13001 && weight <=17000) {
            shippingPrice = 73.45;
        } else if (weight >= 17001 && weight<=23000) {
            shippingPrice = 85.95;
        } else if (weight >= 23001 && weight <=30000) {
            shippingPrice = 98.95;
        } else if (weight >= 30001 && weight <=40000) {
            shippingPrice = 109.45;
        } else if (weight >= 40001 && weight <=50000) {
            shippingPrice = 116.95;
        } else if (weight >= 50001 && weight <=60000) {
            shippingPrice = 124.95;
        } else if (weight >= 60001 && weight <=70000) {
            shippingPrice = 141.45;
        } else {
            shippingPrice = 156.95;
        };

        
    
        console.log(shippingPrice)
        console.log("chegou")
    }



    





    //porcentagem de categorias

    const selectedValue = document.querySelector('input[name="categ"]:checked').value;
    console.log(selectedValue);


    //depois fazer opção pra colocar aqui definir qual vai ser usada entre classico e premium: ou seja fazer 2 opção pra pessoa escolher e usar; Classico ou premium
    
    //onde está armazenada minha porcentagem de categoria correta;


    
    //verificando se o botão do foi clickad
    const checkbox = document.getElementById('classico-premium');

    let premiumclass=Number;

    if (checkbox.checked) {
        premiumclass=1;
    } else {
        premiumclass=0;
    }
    console.log(premiumclass)
    

    //alternar entre classico e premium




    //anuncio classico
    if(premiumclass == 0){
        //está na categoria classica


        if(selectedValue==1){
            porcentCategor=13;

        }else if(selectedValue==2){
            porcentCategor=12;

        }else if (selectedValue==3){
            porcentCategor=11.5

        }else if(selectedValue==4){
            porcentCategor=12

        }else if (selectedValue==5){
            porcentCategor=14

        }else if(selectedValue==6){
            porcentCategor=11.5
            
        }else if (selectedValue==7){
            porcentCategor=11.5

        }else if (selectedValue==8){
            porcentCategor=12.5
            
        }else if(selectedValue==9){
            porcentCategor=12

        }
            
        //se ele não marcou nenhuma: volta com errorWARN; dizendo que não foi selecionada nem uma opção;

            
            
            
    //anuncio premium
    }else{
        // está na categoria Premium
        if(selectedValue==1){
            porcentCategor=18;

        }else if(selectedValue==2){
            porcentCategor=17;

        }else if (selectedValue==3){
            porcentCategor=16.5

        }else if(selectedValue==4){
            porcentCategor=17

        }else if (selectedValue==5){
            porcentCategor=19

        }else if(selectedValue==6){
            porcentCategor=16.5
            
        }else if (selectedValue==7){
            porcentCategor=16.5

        }else if (selectedValue==8){
            porcentCategor=17.5
            
        }else if(selectedValue==9){
            porcentCategor=17
        }

        
    }


    //taxa de categoria:
    console.log(porcentCategor)


    
    //Formula preço de venda;
    const custMenvio= (productPrice + shippingPrice)//taxa de envioR$ adicionada;
    console.log(custMenvio)
    //imposto + comissão da shope + margem de lucro 
    const somaDoimc= (14.3 + porcentCategor + desiredProfit)/100
    console.log(somaDoimc)
    console.log("ola")
    //calcular denominador da formula
    const subDenominad= (1 - somaDoimc)
    console.log(subDenominad)

    //Preço da venda:
    const pVenda=(custMenvio)/ subDenominad
    console.log(pVenda)
    //resum for calc price final que vai pro marktplace sobre o produto;
    const buyVend= pVenda
    console.log(buyVend)




    //verificações especificadas mercadlv
    //aplicado imposto
    const imPost=(buyVend * imposat) 
    console.log(imPost)
    //comissão de marketplace:
    const comiscate=(buyVend * porcentCategor)/100
    console.log(comiscate)
    //lucro:
    const lucrVend=(buyVend * margin)
    console.log(lucrVend)
    //custo total:
    const custProd=(productPrice + shippingPrice + imPost +comiscate) //R$ custpo de envio
    console.log(shippingPrice)
    console.log(imPost)
    console.log(productPrice)
    console.log(comiscate)

    console.log(custProd)
    //Lucro Real:
    const lucroRes=(buyVend-custProd + imPost)
    console.log(lucroRes)



    // valor do envio
    //page inf MercadoLivre
    document.getElementById('mercadolivre').innerHTML = "<h3>Mercado Livre:</h3><p>R$ " + buyVend.toFixed(2) + "</p>";
 
    document.getElementById('imPost').innerHTML= "<p>Imposto pago: " + imPost.toFixed(2) + " R$ </p>";
    

    document.getElementById('comiscate').innerHTML= "<p>comissão Mercadolivre: " + comiscate.toFixed(2) + " R$ </p>";
    

    document.getElementById('shippingPrice').innerHTML= "<p>Custo de envio: " + shippingPrice.toFixed(2) + " R$ </p>";
    


    document.getElementById('lucrVend').innerHTML= "<p>Lucro: " + lucrVend.toFixed(2) + " R$ </p>";
    


    document.getElementById('custProd').innerHTML= "<p>Custo total: " + custProd.toFixed(2) + " R$ </p>";
    

    document.getElementById('lucroRes').innerHTML= "<p>Lucro Real + Imposto: " + lucroRes.toFixed(2) + " R$ </p>";




    //continuação dps mercado livre
    // com reputação amarela e sem reputação 
//     if (weight <=300 ) {
//         shippingPrice = 24.54;
//     } else if (weight >= 301 && weight<=500) {
//         shippingPrice = 25.14;
//     } else if (weight >=501 && weight<=1000) {
//         shippingPrice = 26.34;
//     } else if (weight >= 1001 && weight<=2000) {
//         shippingPrice = 28.14;
//     } else if (weight >= 2001&& weight<=3000) {
//         shippingPrice = 28.74;
//     } else if (weight >= 3001 && weight<=4000) {
//         shippingPrice = 29.94;
//     } else if (weight >=4001 && weight <=5000) {
//         shippingPrice = 31.14;
//     } else if (weight >= 5001 && weight<= 9000) {
//         shippingPrice = 50.34;
//     } else if (weight >= 9001 && weight <=13000) {
//         shippingPrice = 79.14;
//     } else if (weight >= 13001 && weight <=17000) {
//         shippingPrice = 88.14;
//     } else if (weight >= 17001 && weight<=23000) {
//         shippingPrice = 103.14;
//     } else if (weight >= 23001 && weight <=30000) {
//         shippingPrice = 118,74;
//     } else if (weight >= 30001 && weight <=40000) {
//         shippingPrice = 131.34;
//     } else if (weight >= 40001 && weight <=50000) {
//         shippingPrice = 140.34;
//     } else if (weight >= 50001 && weight <=60000) {
//         shippingPrice = 149.94;
//     } else if (weight >= 60001 && weight <=70000) {
//         shippingPrice = 169.74;
//     } else {
//         shippingPrice = 188.34;
//     };

    

//     console.log(shippingPrice)
//     console.log("chegou")
// }


    //ativar botão 




    //depois verificar
    //frete 40% em produtos novo // 20% em categorias especiais
    //table SUL e SULDEST



    //Table nas demais regiões do País



   //taxa envio com frete gratis
   // const gengent= (contCategori + shippingPrice)

    //imposto

    //case -- swtich se o Porcentagem do produto se ele se encaixar em algum dessas categorias cobrará uma porcentagem;








    //magalu
    //comissão da magalu fixa de 18%
    const comitmagu= 0.18,
    taxamagal= 5;
    let envioLua= Number;
    
    //resumindo quem paga o frete e o cliente ou seja isso aqui e com ele fuiii;


    if (pricecustOn<=79){
        console.log("sem desconto na tarifa de frete")
        if (weight <=500 ) {
            envioLua = 27.90;
        } else if (weight >= 501 && weight<=1000) {
            envioLua = 32.90;
        } else if (weight >=1001 && weight<=2000) {
            envioLua = 35.90;
        } else if (weight >= 2001 && weight<=5000) {
            envioLua = 44.90;
        } else if (weight >= 5001&& weight<=9000) {
            envioLua = 47.90;
        } else if (weight >= 9001 && weight<=13000) {
            envioLua = 52.90;
        } else if (weight >=13001 && weight <=17000) {
            envioLua = 57.90;
        } else if (weight >= 17001 && weight<= 23000) {
            envioLua = 62.90;
        } else if (weight >= 23001 && weight <=29000) {
            envioLua = 67.90;
        } else if (weight >= 29001 && weight <=30000) {
            envioLua = 69.90;
        } else if (weight >= 30001 && weight<=40000) {
            envioLua = 179.90;
        } else if (weight >= 40001 && weight <=50000) {
            envioLua = 189.90;
        }
    
    }else if(pricecustOn>=79.01){
        //prazo de despacho
        //desconto de 50% no envio

        if (weight <=500 ) {
            envioLua = 13.95;
        } else if (weight >= 501 && weight<=1000) {
            envioLua = 16.45;
        } else if (weight >=1001 && weight<=2000) {
            envioLua = 17.95;
        } else if (weight >= 2001 && weight<=5000) {
            envioLua = 22.45;
        } else if (weight >= 5001&& weight<=9000) {
            envioLua = 23.95;
        } else if (weight >= 9001 && weight<=13000) {
            envioLua = 26.45;
        } else if (weight >=13001 && weight <=17000) {
            envioLua = 28.45;
        } else if (weight >= 17001 && weight<= 23000) {
            envioLua = 31.45;
        } else if (weight >= 23001 && weight <=29000) {
            envioLua = 33.95;
        } else if (weight >= 29001 && weight <=30000) {
            envioLua = 34.95;
        } else if (weight >= 30001 && weight<=40000) {
            envioLua = 89.95;
        } else if (weight >= 40001 && weight <=50000) {
            envioLua = 94.95;
        }
        // if(prazoDespach>=100){
        //     console.log("desconto de 50% aplicado no envio")
        // }else{
        //     console.log("desconto de 25% aplicado no envio")
        // }
       
    }

    console.log(envioLua)
    console.log("chegou")

    
    //Formula preço de venda;
    const cmuMagalu= (productPrice + taxamagal);
    console.log(`aqui está meu product price ${cmuMagalu}`);
    
    const porcetMaglu= (imposat + comitmagu+ margin)
    console.log(`soma das porcentagens ${porcetMaglu}`);

    const denomMagalu= (1-porcetMaglu);
    console.log(denomMagalu)


    const pvMaglu= (cmuMagalu/ denomMagalu);
    console.log(pvMaglu);



    //verificando
    const impostMagalu=(pvMaglu*imposat) ,
    comissaoMagalu=(pvMaglu*comitmagu) ,
    lucrMaga=(pvMaglu*margin) ,
    custoTomagu= (productPrice+taxamagal+impostMagalu+comissaoMagalu),
    lucroRmagalu= (pvMaglu-custoTomagu);




    document.getElementById('magalu').innerHTML = "<h3>Magalu:</h3><p>R$ " + pvMaglu.toFixed(2) + "</p>";


 
    document.getElementById('ipIpag').innerHTML= "<p>Imposto pago: " + impostMagalu.toFixed(2) + " R$ </p>";
    

    document.getElementById('comitmagu').innerHTML= "<p>comissão Magalu: " + comissaoMagalu.toFixed(2) + " R$ </p>";
    

    document.getElementById('envioLua').innerHTML= "<p>Custo de envio: " + taxamagal.toFixed(2) + " R$ </p>";
    


    document.getElementById('lucroMagami').innerHTML= "<p>Lucro: " + lucrMaga.toFixed(2) + " R$ </p>";
    


    document.getElementById('custoTomagu').innerHTML= "<p>Custo total: " + custoTomagu.toFixed(2) + " R$ </p>";
    

    document.getElementById('lucroReamga').innerHTML= "<p>Lucro Real + Imposto: " + lucroRmagalu.toFixed(2) + " R$ </p>";









    //amazon
    //taxa Por item
    const taxaAmazon=2;



    //comissão da amazon por categpr

    if(selectedValue==1){
        porcentAmazon=9;

    }else if(selectedValue==2){
        porcentAmazon=14;

    }else if (selectedValue==3){
        porcentAmazon=14;

    }else if(selectedValue==4){
        porcentAmazon=14;

    }else if (selectedValue==5){
        porcentAmazon=15;

    }else if(selectedValue==6){
        porcentAmazon=12;
        
    }else if (selectedValue==7){
        porcentAmazon=14;

    }else if (selectedValue==8){
        porcentAmazon=13;
    
    }else if(selectedValue==9){
        porcentAmazon=15;

    }
    console.log(porcentAmazon)

    const comsaa=(porcentAmazon/ 100)


    //taxa de envio vai depender de qual logistica a empresa aborda : verificar se e FBA , FBA Onsite, DBA ou o vendedor que envia;
    //FBA- cinco tarifas pagas, FBA Onsite 2 tarifas pagas,  DBA 4 tarifas;
    //verificar qual a conta está usando;




    //formula PV

    const cmuAmazon= (productPrice + taxaAmazon);
    console.log(`aqui está meu product price ${cmuAmazon}`);
    
    const porcetAmazon= (imposat + comsaa+ margin)
    console.log(`soma das porcentagens ${porcetAmazon}`);

    const denomAmazon= (1-porcetAmazon);
    console.log(denomAmazon)


    const pvAmazon= (cmuAmazon/ denomAmazon);
    console.log(pvAmazon);



    //verificando
    const impostAmazon=(pvAmazon*imposat) ,
    comissaoAmazon=(pvAmazon*comsaa) ,
    lucrAmazi=(pvAmazon*margin) ,
    custoAmaz= (productPrice+taxaAmazon+impostAmazon+comissaoAmazon),
    lucroAmaz= (pvAmazon-custoAmaz);




    document.getElementById('amazon').innerHTML = "<h3>Amazon:</h3><p>R$ " + pvAmazon.toFixed(2) + "</p>";


 
    document.getElementById('ipIpagamazon').innerHTML= "<p>Imposto pago: " + impostAmazon.toFixed(2) + " R$ </p>";
    

    document.getElementById('comitamazon').innerHTML= "<p>comissão Amazon: " + comissaoAmazon.toFixed(2) + " R$ </p>";
    

    document.getElementById('envioAmzon').innerHTML= "<p>Custo de envio: " + taxaAmazon.toFixed(2) + " R$ </p>";
    


    document.getElementById('lucroAmazon').innerHTML= "<p>Lucro: " + lucrAmazi.toFixed(2) + " R$ </p>";
    


    document.getElementById('custoAmazon').innerHTML= "<p>Custo total: " + custoAmaz.toFixed(2) + " R$ </p>";
    

    document.getElementById('lucroReamazon').innerHTML= "<p>Lucro Real + Imposto: " + lucroAmaz.toFixed(2) + " R$ </p>";






























    document.getElementById('insid').style.display = 'flex';
    
    document.getElementById('insid').style.justifyContent='space-around';
    
    document.getElementById('insid').style.padding='50px';
    





}

































