import { TouchableOpacity, View } from "react-native";
import Text from "../../../shared/components/text/Text";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useEffect } from "react";
import { useRequest } from "../../../shared/hooks/useRequest";
import { URL_PRODUCT } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enum";
import { ProductType } from "../../../shared/types/productType";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { ProductNavigationProp } from "../../product/screens/Product";

const Home = () => {
    const { navigate } = useNavigation<ProductNavigationProp>();
    const { request } = useRequest();
    const { products, setProducts } = useProductReducer();

    useEffect(() => {
        request<ProductType[]>({
            url: URL_PRODUCT,
            method: MethodEnum.GET,
            saveGlobal: setProducts,
        })
    }, []);
   
    const handleGOToProduct = (product: ProductType) => {
        navigate(MenuUrl.PRODUCT, {
            product,
        });
    };

    return (
        <View>
            <Text>HOME</Text>
            {products.map((product) => (
                <TouchableOpacity onPress={() => handleGOToProduct(product)}>
                    <Text>{product.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Home;