import { Sidebar } from "../../ui/sidebar/Sidebar";
import { Customers } from "../utilities/customersedit/Customers";


export const IronworkCustomersEdit = () => {
    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <Customers/>
            </div>       
        </>
    );
}