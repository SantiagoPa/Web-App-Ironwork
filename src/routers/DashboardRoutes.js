import { Route, Routes } from "react-router";
import { IronworkScreen } from "../components/ironwork/IronworkScreen";
import { IronworkCustomers } from "../components/ironwork/pages/IronworkCustomers";
import { IronworkProducts } from "../components/ironwork/pages/IronworkProducts";
import { Topbar } from "../components/ui/topbar/Topbar";
import { IronworkUsers } from "../components/ironwork/pages/IronworkUsers";



export const DashboardRoutes = () => {
    return (
        <>
            <Topbar />
            <Routes>
                <Route path="/" element={<IronworkScreen />} />

                <Route path="/users" element={ <IronworkUsers />} />

                <Route path="/customers/" element={<IronworkCustomers />} />

                <Route path="/products" element={<IronworkProducts />} />
            
            </Routes>  
        </>
    )
}
