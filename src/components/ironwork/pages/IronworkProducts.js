import { Sidebar } from "../../ui/sidebar/Sidebar"
import { ProductList } from "../utilities/productlist/ProductList"


export const IronworkProducts = () => {
    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <ProductList />     
            </div> 
        </>
    )
}
