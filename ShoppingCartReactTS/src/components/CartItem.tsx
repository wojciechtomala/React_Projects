import { Stack, Button } from 'react-bootstrap';
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json";
import { formatCurrency } from '../utilities/formatCurrency';
type CartitemProps = {
    id: number,
    quantity: number,
}

export default function CartItem({id, quantity} : CartitemProps) {
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id == id);
    if(item === null) return null;

    return(
        <Stack direction="horizontal" gap={2} className='d-flex align-items-center'>
            <img src={item?.imageURL} alt="" style={{width: "125px", height: "75px", objectFit:"cover"}}/>
            <div className='me-auto'>
                <div>
                    {item.name} 
                    {quantity > 1 && (<span className='text-muted' style={{fontSize:"14px"}}> x{quantity}</span>)}
                </div>
                <div className='text-muted' style={{fontSize:"14px"}}>
                    {formatCurrency(item?.price)}
                </div>
            </div>
            <div className='text-muted' style={{fontSize:"14px"}}>
                    {formatCurrency(item?.price * quantity)}
                    <Button variant='outline-danger' size='sm' style={{margin:"0px 5px"}} onClick={() => removeFromCart(item.id)}>&times;</Button>
                </div>
        </Stack>
    )
}
