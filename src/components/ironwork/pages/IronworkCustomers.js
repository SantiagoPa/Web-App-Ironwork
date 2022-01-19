import { Sidebar } from "../../ui/sidebar/Sidebar"
import { CustomersList } from "../utilities/customerslist/CustomersList";


export const IronworkCustomers = () => {
    return (

        <>
            <div className="d-flex">
                <Sidebar />
                <CustomersList/>
            </div>       
        </>
    );
}
