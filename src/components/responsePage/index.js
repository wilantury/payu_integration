import React from 'react'
import {ResponseDataWrapper, ResponseSuccess} from './styles'

import {
    useLocation,
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export const ResponsePage = () => {
 
    let query = useQuery();
    let data = []
    let responseSuccessPayU = query.get("transactionState")
    
    return (
        <ResponseDataWrapper>

            {   responseSuccessPayU==='4' &&
                    (
                        <ResponseSuccess>
                            <h2>Pago realizado con éxito</h2>
                            <h3>Detalles de su operación</h3>
                            <p><h5>Id de transacción:</h5> {query.get("transactionId")}</p>
                            <p><h5>Descripción:</h5> {query.get("description")}</p>
                            <p><h5>Mensaje de respuesta:</h5> {query.get("message")}</p>
                            <p><h5>Valor total:</h5> {query.get("TX_VALUE")}</p>
                            <p><h5>Impuestos:</h5> {query.get("TX_TAX")}</p>                        
                            <br/>
                            <h4>Gracias por tu compra, sigue explorando nuestra tienda</h4>

                        </ResponseSuccess>
                    )
            }
            {    responseSuccessPayU==='6' &&      
                    (
                        <div>
                            <h2>Su pago no pudo ser procesado</h2>
                            <h5>Por favor intente de nuevo, o use otro método de pago.</h5>
                        </div>
                    )
            }
            {    responseSuccessPayU==='7' &&      
                    (
                        <div>
                            <h2>Su pago está en estado "Pendiente"</h2>
                            <h5>Su estado se actualizará en el transcurso del día.</h5>
                        </div>
                    )
            }
        </ResponseDataWrapper>
    )
}