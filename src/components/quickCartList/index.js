import React from 'react'
import { CartListWrapper, Button } from './styles'

export const QuickCartList = ( {data} ) => {
    
    const total = data.reduce( (acum, current) => acum+(current.price * current.qty_p ), 0);
    const tax_p = 0.19;
    const url="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu"

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("merchantId", 508029);
    urlencoded.append("accountId", 512321);
    urlencoded.append("description", "Test PAYU");
    urlencoded.append("referenceCode", "TestPayUantury");
    urlencoded.append("amount", 20000);
    urlencoded.append("tax", 0);
    urlencoded.append("taxReturnBase", 0);
    urlencoded.append("currency", "COP");
    urlencoded.append("signature", "f8f59c07435ce2d4ca050464c730c7c5");
    urlencoded.append("test", 0);
    urlencoded.append("buyerFullName", "Wilson");
    urlencoded.append("shippingAddress", "carrera 10");
    urlencoded.append("shippingCity", "Bogota");
    urlencoded.append("shippingCountry", "CO");
    urlencoded.append("telephone", "1234567890");
    urlencoded.append("buyerEmail", "test@test.com");
    urlencoded.append("responseUrl", "http://localhost:3000/response");
    urlencoded.append("confirmationUrl", "http://localhost:3000/confirmation");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    
    const webCheckOut = {
        "merchantId": 508029,
        "accountId": 512321,
        "description": "Test PAYU",
        "referenceCode": "TestPayUantury2",
        "amount": 20000,
        "tax": 0,
        "taxReturnBase": 0,
        "currency": "COP",
        "signature": "f1cae8cb032d5ab62d661c1257b7cd4e",
        "test": "0",
        "buyerFullName":"wilson",
        "shippingAddress":"carrer 10",
        "shippingCity":"Bogotá",
        "shippingCountry":"CO",
        "telephone":"1235657657",
        "buyerEmail": "test@test.com",
        "responseUrl": "http://localhost:3000/response",
        "confirmationUrl": "http://localhost:3000/confirmation"
    }

    async function postData(url=''){
        const response = await  fetch(url, requestOptions)
        console.log(response.status)
        return response
    }
    
    function handleWebCheckOut(){
        postData(url)
        .then(data=>{
            console.log(data)
        })
        .catch(error => console.log('error', error));
    }

    return (
        <CartListWrapper>
            <h2>Cart products</h2>
            <ul>
                <li><p><h5>Product</h5></p><p><h5>Quantity</h5></p><p><h5>Price</h5></p></li>
                {data.map( product => <li><p>{product.name}</p><p>{product.qty_p}</p><p>{product.price * product.qty_p}</p></li>)}
            </ul>
            <h5>Total: {total}</h5>
            <h5>Tax {tax_p*100}%: {total*tax_p}</h5>
            <h5>Total inc. Tax: {total*tax_p + total}</h5>
            <Button onClick={handleWebCheckOut}>Pagar con PayU latam</Button>
        </CartListWrapper>
    )
}