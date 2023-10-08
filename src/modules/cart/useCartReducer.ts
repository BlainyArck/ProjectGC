import { useDispatch } from "react-redux";
import { CartType } from "../../shared/types/cartType";
import { useAppSelector } from "../../store/hooks"
import { setCartAction } from "../../store/reducers/cartReducer";

export const useCartReducer = () => {
    const dispatch = useDispatch();
    const { cart } = useAppSelector((state) => state.cartReducer);
    const setCart = (currentCart: CartType) => {
        dispatch(setCartAction(currentCart));
    };

    return {
        cart,
        setCart,
    }
}