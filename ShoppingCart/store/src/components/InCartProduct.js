import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { getItemData } from '../items';

function InCartProduct(props)
{
    const shoppingCart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const itemData = getItemData(id);

    return(
        <>
            <h3>{itemData.name}</h3>
            <p>Qty: {quantity}</p>
            <p>${(quantity * itemData.price).toFixed(2)}</p>
            <Button size='sm' variant='danger' onClick={() => shoppingCart.clearItemFromCart(id)}>Remove From Cart</Button>
            <hr></hr>
        </>
    )
}

export default InCartProduct;