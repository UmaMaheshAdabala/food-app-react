import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = () => {
  const itemCart = useSelector((store) => store.cart.items);
  return (
    <div>
      <div className="font-bold m-auto my-2 text-lg text-center">Cart</div>
      <div className="m-auto w-6/12">
        <ItemList items={itemCart} />
      </div>
    </div>
  );
};
export default Cart;
