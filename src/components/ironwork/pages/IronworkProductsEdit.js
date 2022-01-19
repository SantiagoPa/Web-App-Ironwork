import { Sidebar } from "../../ui/sidebar/Sidebar"
import { Product } from "../utilities/productedit/Product"


export const IronworkProductsEdit = () => {
    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <Product />
            </div>       
        </>
    )
}
