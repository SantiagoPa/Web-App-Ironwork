import { Sidebar } from "../../ui/sidebar/Sidebar"
import { NewCustomer } from "../utilities/newcustomer/NewCustomer"



export const IronworkNewCustomer = () => {
    return (
        <>
        <div className="d-flex">
            <Sidebar />
            <NewCustomer />
        </div>       
    </>
    )
}
