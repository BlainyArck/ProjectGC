import { useEffect } from "react";
import Text from "../../../shared/components/text/Text"
import { useCartReducer } from "../useCartReducer";
import { URL_CART } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { CartType } from "../../../shared/types/cartType";
import { useRequest } from "../../../shared/hooks/useRequest";

const Cart = () => {
    const { request } = useRequest();
    const { cart, setCart } = useCartReducer();

    useEffect(() => {
        request<CartType>({
            url: URL_CART,
            method: MethodEnum.GET,
            saveGlobal: setCart,
        });
    },[]);

    return(
        <Text>Carrinho</Text>
    );
};

export default Cart;