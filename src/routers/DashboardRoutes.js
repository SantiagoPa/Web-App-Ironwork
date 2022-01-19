import { Route, Routes } from "react-router";
import { IronworkScreen } from "../components/ironwork/IronworkScreen";
import { IronworkCustomers } from "../components/ironwork/pages/IronworkCustomers";
import { IronworkCustomersEdit } from "../components/ironwork/pages/IronworkCustomersEdit";
import { IronworkNewCustomer } from "../components/ironwork/pages/IronworkNewCustomer";
import { IronworkProducts } from "../components/ironwork/pages/IronworkProducts";
import { IronworkProductsEdit } from "../components/ironwork/pages/IronworkProductsEdit";
import {IronworkNewProduct } from '../components/ironwork/pages/IronworkNewProduct';

import { Topbar } from "../components/ui/topbar/Topbar";


export const DashboardRoutes = () => {
    return (
        <>
            <Topbar />
            <Routes>
                <Route path="/" element={<IronworkScreen />} />
                
                <Route path="/customers/" element={<IronworkCustomers />} />
                <Route path="/customers/:customerId" element={ <IronworkCustomersEdit /> } />
                <Route path="/customer/newCustomer" element={ <IronworkNewCustomer /> } />

                <Route path="/products" element={<IronworkProducts />} />
                <Route path="/product/:productId" element={<IronworkProductsEdit />} />
                <Route path="/product/newProduct" element={<IronworkNewProduct /> } />
            </Routes>  
        </>
    )
}
