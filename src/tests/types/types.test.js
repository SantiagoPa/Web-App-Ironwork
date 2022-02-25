import { types } from "../../types/types";

 describe('Pruebas en Types', () => { 

    test('los types deben de ser iguales', () => { 

        expect( types ).toEqual({

            uiOpenModalUserC: '[ui-user] Open modal create',
            uiCloseModalUserC: '[ui-user] Close modal create',
            uiOpenModalUserU: '[ui-user] Open modal update',
            uiCloseModalUserU: '[ui-user] Close modal update',
        
            uiOpenModalProductC: '[ui-product] Open modal create',
            uiCloseModalProductC: '[ui-product] Close modal create',
            uiOpenModalProductU: '[ui-product] Open modal update',
            uiCloseModalProductU: '[ui-product] Close modal update',
        
            uiOpenModalCustomerC:  '[ui-customer] Open modal create',
            uiCloseModalCustomerC: '[ui-customer] Close modal create',
            uiOpenModalCustomerU:  '[ui-customer] Open modal update',
            uiCloseModalCustomerU: '[ui-customer] Close modal update',  
        
            uiOpenModalProviderC:  '[ui-provider] Open modal create',
            uiCloseModalProviderC: '[ui-provider] Close modal create',
            uiOpenModalProviderU:  '[ui-provider] Open modal update',
            uiCloseModalProviderU: '[ui-provider] Close modal update',  
        
            authChekingFinish: '[auth] Finish checking login state',
            authStartLogin: '[auth] Start login',
            authLogin: '[auth] Login',
            authStartRegisterUser:'[auth] Start Register',
            authStartTokenRenew: '[auth] Start token renew',
            authLogout: '[auth] Logout',
            
            
            userSetActive: '[user] Set Active',
            userClearActiveEvent: '[user] Clear active event',
            userStartAddNew: '[user] Start add new',
            userAddNew: '[user] Add new',
            userUpdated: '[user] User updated',
            userDeleted: '[user] User deleted',
            userLoaded: '[user] users loaded',
            switchUserList:'[user] switch-user',
        
            productSetActive: '[product] Set Active',
            productClearActiveEvent: '[product] Clear active event',
            productStartAddNew: '[product] Start add new',
            productAddNew: '[product] Add new',
            productUpdated: '[product] Product updated',
            productDeleted: '[product] Product deleted',
            productLoaded: '[product] Products loaded',
            productAddSales: '[product] add sales',
            productRemoveToSales: '[product] remove product to sales',
            clearProductSales: '[product] clear sales',
            productAddSalesForProvider: '[product] add sale for provider',
            productRemoveToSalesForProvider: '[product] rm product to sales for provider',
            clearProductSalesForProvider: '[product] clear sale for provider',
            buyProductForCustmer: '[product] buy product for customer',
            buyProductForProvider: '[product] buy product for provider',
            switchProductList:'[product] switch-product',
        
            customerSetActive: '[customer] Set Active',
            customerClearActiveEvent: '[customer] Clear active event',
            customerStartAddNew: '[customer] Start add new',
            customerAddNew: '[customer] Add new',
            customerUpdated: '[customer] customer updated',
            customerDeleted: '[customer] customer deleted',
            customerLoaded: '[customer] customers loaded',
            switchCustomerList:'[customer] switch-customer',
        
            providerSetActive: '[provider] Set Active',
            providerClearActiveEvent: '[provider] Clear active event',
            providerStartAddNew: '[provider] Start add new',
            providerAddNew: '[provider] Add new',
            providerUpdated: '[provider] provider updated',
            providerDeleted: '[provider] provider deleted',
            providerLoaded: '[provider] provider loaded',
            switchProviderList:'[provider] switch-provider',
        
            transactionAddNew: '[transaction] Add new',
            transactionLoaded: '[transaction] transaction loaded',
            transactionAddCode: '[transaction] transaction add code',
            transactionAddPila: '[transaction] transaction pila',
            purchaseAddNew: '[transaction] purchase add new',
            purchasesLoaded: '[transaction] purchases loaded',
        
            analyticsTopSellersLoaded: '[analytics] get top sellers',
            analyticsCardTrimester: '[analytics] get card trimester',
            analyticsCardSemester: '[analytics] get card semester',
            analyticsChartYear: '[analytics] get chart year'
        })

    });

 });