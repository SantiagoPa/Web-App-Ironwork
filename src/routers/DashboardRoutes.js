import { Route, Routes } from "react-router";
import { IronworkScreen } from "../components/ironwork/IronworkScreen";
import { IronworkCustomers } from "../components/ironwork/pages/IronworkCustomers";
import { IronworkProducts } from "../components/ironwork/pages/IronworkProducts";
import { Topbar } from "../components/ui/topbar/Topbar";
import { IronworkUsers } from "../components/ironwork/pages/IronworkUsers";
import { IronworkAnalitycs } from "../components/ironwork/pages/IronworkAnalitycs";
import { IronworkTransactions } from "../components/ironwork/pages/IronworkTransactions";
import { IronworkReports2 } from "../components/ironwork/pages/IronworkReports2";
import { IronworkSales } from "../components/ironwork/pages/IronworkSales";
import { IronworkReports1 } from "../components/ironwork/pages/IronworkReports1";
import { IronworkProviders } from "../components/ironwork/pages/IronworkProviders";



export const DashboardRoutes = () => {
    return (
        <>
            <Topbar />
            <Routes>
                <Route path="/" element={<IronworkScreen />} />
                <Route path="/users" element={ <IronworkUsers />} />
                <Route path="/analitycs" element={<IronworkAnalitycs />} />
                <Route path="/sales" element={<IronworkSales />} />
                <Route path="/reports-1" element={<IronworkReports1 />} />
                <Route path="/customers/" element={<IronworkCustomers />} />
                <Route path="/products" element={<IronworkProducts />} />
                <Route path="/transactions" element={<IronworkTransactions />} />
                <Route path="/reports-2" element={<IronworkReports2 />} />
                <Route path="/providers" element={<IronworkProviders />} />
            </Routes>  
        </>
    )
}
