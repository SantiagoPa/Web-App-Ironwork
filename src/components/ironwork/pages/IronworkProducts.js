import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { productStartLoading } from "../../../actions/product";
import { Sidebar } from "../../ui/sidebar/Sidebar"
import { ProductList } from "../utilities/productlist/ProductList"


export const IronworkProducts = () => {

    const { product } = useSelector( state => state );
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch( productStartLoading(product.switchProduct) ); 
    }, [product.switchProduct]);
    

    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <ProductList />     
            </div> 
        </>
    )
}
