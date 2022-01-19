import { Sidebar } from "../../ui/sidebar/Sidebar";
import { NewProduct } from "../utilities/newproduct/NewProduct";


export const IronworkNewProduct = () => {
    return (
        <>
        <div className="d-flex">
            <Sidebar />
            <NewProduct />
        </div>       
    </>
    )
}
