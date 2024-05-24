function calculatePrice() {
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const taxes = parseFloat(document.getElementById('taxes').value);
    const platformFees = parseFloat(document.getElementById('platformFees').value);

    //Lucro desejado %
    const desiredProfit = parseFloat(document.getElementById('desiredProfit').value);



    //Taxa da plataforma
    const totalPlatformFees = (productPrice * platformFees) / 100;
    console.log(totalPlatformFees) 
        
    const conttotalPlat= (totalPlatformFees + productPrice + 3);

    console.log(conttotalPlat) 
    //impostos
    const totalTaxes = (conttotalPlat * taxes) /100;

    console.log(totalTaxes) 
    
    const conttotaltax= (totalTaxes + conttotalPlat)

    console.log(conttotaltax) 

    // Lucro total

    const totalProfit = (conttotaltax * desiredProfit) /100;

    console.log(totalProfit) 
    
    const conttotalproft= ( totalProfit + conttotaltax)

    console.log(conttotalproft) 


    //Preço final

    const totalPrice =  conttotalproft;

    console.log(totalPrice) 


    document.getElementById('shopee').innerHTML = "<h3>Shopee:</h3><p>R$ " + totalPrice.toFixed(2) + "</p>";

    document.getElementById('lucroLiqshope').innerHTML = "<p> Á receber por venda : " + totalProfit.toFixed(2) + "</p>";
    
















    // Mercado Livre
    
    //Taxa da plataforma
 
    if (productPrice <=79 ) {
        console.log("Está na faixa dos 79 R$");

    }

    //classico
    const taxapCategoria= 0.14;

    //premium
    const taxaCategoria= 0.19;


    //frete 40% em produtos novo // 20% em categorias especiais
    //table SUL e SULDEST
    if (weight <=300 ) {
        shippingPrice = 24.54;
    } else if (weight >= 300) {
        shippingPrice = 25.14;
    } else if (weight >=501) {
        shippingPrice = 26.34;
    } else if (weight >= 1001) {
        shippingPrice = 28.14;
    } else if (weight >= 2001) {
        shippingPrice = 28.74;
    } else if (weight >= 3001) {
        shippingPrice = 29.94;
    } else if (weight >=4001 ) {
        shippingPrice = 31.14;
    } else if (weight >= 5001) {
        shippingPrice = 50.34;
    } else if (weight >= 9001) {
        shippingPrice = 79.14;
    } else if (weight >= 13001) {
        shippingPrice = 88.14;
    } else if (weight >= 17001) {
        shippingPrice = 103.14;
    } else if (weight >= 23001) {
        shippingPrice = 118,74;
    } else if (weight >= 30001) {
        shippingPrice = 131.34;
    } else if (weight >= 40001) {
        shippingPrice = 140.34;
    } else if (weight >= 50001) {
        shippingPrice = 149.94;
    } else if (weight >= 60001) {
        shippingPrice = 169.74;
    } else {
        shippingPrice = 188.34;
    };

    console.log(shippingPrice)


    //Table nas demais regiões do País

    
   const tXcategoria= (taxapCategoria * productPrice);
    console.log(tXcategoria)
   const contCategori= (tXcategoria + 6) ;
    console.log(contCategori)
    const imporTos= (contCategori * shippingPrice)
    console.log(imporTos)
    const contImpost= (imporTos + contCategori)
console.log(contImpost)
    const lucrio= (contImpost * desiredProfit);
console.log(lucrio)

    const verificLucri= (lucrio + contImpost);
console.log(verificLucri)


   //taxa envio com frete gratis
   // const gengent= (contCategori + shippingPrice)

    //imposto







    





    






















    document.getElementById('mercadolivre').innerHTML = "<h3>Mercado Livre:</h3><p>R$ " + totalPrice.toFixed(2) + "</p>";
    
    document.getElementById('magalu').innerHTML = "<h3>Magalu:</h3><p>R$ " + totalPrice.toFixed(2) + "</p>";

    document.getElementById('amazon').innerHTML = "<h3>Amazon:</h3><p>R$ " + totalPrice.toFixed(2) + "</p>";


























    document.getElementById('insid').style.display = 'flex';
    
    document.getElementById('insid').style.justifyContent='space-around';
    
    document.getElementById('insid').style.padding='50px';
    





}