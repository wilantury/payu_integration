import React, {useState ,useContext} from 'react';
import { CardWrapper, Img, AddListWrapper } from './styles'
import CartContext from '../../context/CartContext'


export const Products = ( props ) => {
    const { product } = props;
    const {CartData, setCartData} = useContext(CartContext)

    const [qty, setQty ] = useState(1)
    
    function handleAddToCart(){
        setCartData([{qty_p:qty, ...product}, ...CartData])
    }

    function handleQtyChange(event){
        setQty(parseInt(event.target.value))
    }

    return (
        <CardWrapper>
            <Img src={product.image}>
            </Img>
            <h3>{product.name}</h3>
            <h4>Cantidad: {product.qty}</h4>
            <h4>Precio: {product.price}</h4>
            <AddListWrapper>
                <input onChange={(handleQtyChange)} type="number" placeholder="1"></input>
                <button onClick={handleAddToCart}>Agregar</button>
            </AddListWrapper>     
        </CardWrapper>
    )
}