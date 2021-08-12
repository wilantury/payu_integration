import React from 'react'
import {
    useLocation,
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export const ResponsePage = () => {
 
    let query = useQuery();

    return (
        <p>Holaaaaaaa {query.get("name")}</p>
    )
}