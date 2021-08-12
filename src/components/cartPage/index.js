import React from 'react'
import {CartListWrapper, Button} from './styles'
import { useLocation } from 'react-router-dom'
import md5 from 'crypto-js/md5';

export const CartPage = () => {
    let location = useLocation();
    const tax_p=0.19;
    const products = location.state.cart_data.data
    const total = location.state.cart_data.total
    const total_tax = location.state.cart_data.total_tax
    const tax = tax_p*total;

    const responsePage = "https://payu-ecommerce.netlify.app/response"
    //const responsePage = "http://localhost:3000/response"

    const apiKey = "4Vj8eK4rloUd272L48hsrarnUA";
    const merchantId ="508029";
    const refCode = "testPay_" + Math.floor(Math.random() * 100000).toString();
    const desc = "Test-payment-number-" + Math.floor(Math.random() * 100000).toString();
    const currency = "COP" 
    const message = apiKey + "~" +merchantId + "~" + refCode + "~" + total_tax.toString() + "~" + currency;
    const hashDigest = md5(message).toString();

    return (
        <CartListWrapper>
            <h2>Shopping Cart</h2>
            <ul>
                <li><p><h5>Product</h5></p><p><h5>Quantity</h5></p><p><h5>Price unit</h5></p><p><h5>Price extended</h5></p></li>
                {products.map( product => <li><p>{product.name}</p><p>{product.qty_p}</p><p>{product.price}</p><p>{product.price * product.qty_p}</p></li>)}
            </ul>
            <h5>Total: {total}</h5>
            <h5>Tax {tax_p*100}%: {total*tax_p}</h5>
            <h5>Total inc. Tax: {total_tax}</h5>
            <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                <input name="merchantId"    type="hidden"  value={merchantId}  />
                <input name="accountId"     type="hidden"  value="512321" />
                <input name="description"   type="hidden"  value={desc}  />
                <input name="referenceCode" type="hidden"  value={refCode} />
                <input name="amount"        type="hidden"  value={total_tax}   />
                <input name="tax"           type="hidden"  value={tax}  />
                <input name="taxReturnBase" type="hidden"  value={total} />
                <input name="currency"      type="hidden"  value="COP" />
                <input name="signature"     type="hidden"  value={hashDigest}  />
                <input name="test"          type="hidden"  value="0" />
                <input name="buyerEmail"    type="hidden"  value="test@test.com" />
                <input name="buyerFullName"    type="hidden"  value="Wilson Antury" />
                <input name="shippingAddress"    type="hidden"  value="Cra 10 20-56" />
                <input name="shippingCity"    type="hidden"  value="Bogota" />
                <input name="shippingCountry"    type="hidden"  value="CO" />
                <input name="telephone"    type="hidden"  value="312456789" />
                <input name="responseUrl"    type="hidden"  value={responsePage} />
                <input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation" />
                <Button name="Submit"        type="submit" >Pagar con PayU</Button>
            </form>
        </CartListWrapper>
    )
}