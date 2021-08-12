import React from 'react'
import {ResponseDataWrapper} from './styles'

import {
    useLocation,
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export const ResponsePage = () => {
 
    let query = useQuery();
    let data = []

    return (
        <ResponseDataWrapper>
            <ul>
                {
                    query.forEach( (value, key)=>{
                        data.push({value, key})    
                    })
                }
                {    
                    data.map( param => <li><p>{param.key}</p><p>{param.value}</p></li>)
                }
            </ul>
        </ResponseDataWrapper>
    )
}