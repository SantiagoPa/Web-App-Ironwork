import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import {
  getCustomerByName,
  getProductByName,
  getProviderByName,
} from "../../../../selector/";
import { NewCustomer } from "../newcustomer/NewCustomer";
import { NewProduct } from "../newproduct/NewProduct";
import { NewProvider } from "../prodviderslist/NewProvider";
import { ProductSearch } from "./ProductSearch";
import { ProductSearchProvider } from "./ProductSearchProvider";
import { ProviderSearch } from "./ProviderSearch";
import { SalesCustomer } from "./SalesCustomer";
import { SalesProvider } from "./SalesProvider";
import { SearchCustomer } from "./SearchCustomer";

export const Sales = () => {
  const { customer, product, provider } = useSelector((state) => state);
  const customers = customer.eventsCustomer;
  const products = product.eventsProduct;
  const providers = provider.eventsProvider;

  const customerInfo = customer.actionEventCustomer;
  const provadierInfo = provider.actionEventProvider;
  const productInfoForProvider = product.salesProductForProvider;

  const [formValue, handleInputChange] = useForm({
    searchCustomer: "",
    searchProduct: "",
    searchProvider: "",
  });

  const { searchCustomer, searchProduct, searchProvider } = formValue;

  const customerFilter = getCustomerByName(searchCustomer, customers);
  const providerFilter = getProviderByName(searchProvider, providers);
  const productFilter = getProductByName(searchProduct, products);

  const [show, setShow] = useState(true);

  const handleShowAccordion = () => {
    setShow((show) => !show);
  };

  return (
    <div className="flex-4">
      <div className="d-flex">
        <div className="col mx-5 p-4 shadow__chart">
          <div className="row">
            <SalesCustomer customerInfo={customerInfo} />
            <div className="col-6">
              <div className="accordion">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button
                      className="accordion-button"
                      onClick={handleShowAccordion}
                    >
                      show
                    </button>
                  </div>
                  <div
                    className={
                      show
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                  >
                    <div className="accordion-body">
                      <SearchCustomer
                        customerFilter={customerFilter}
                        customers={customers}
                        handleInputChange={handleInputChange}
                        key={1}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ProductSearch
                show={show}
                productFilter={productFilter}
                products={products}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-4">
        <div className="col mx-5 p-4 shadow__chart">
          <div className="row">
            <SalesProvider provadierInfo={provadierInfo} />
            <div className="col-6">
              <div className="accordion">
                <div className="accordion-item">
                  <div className="accordion-header">
                    <button
                      className="accordion-button"
                      onClick={handleShowAccordion}
                    >
                      show
                    </button>
                  </div>
                  <div
                    className={
                      show
                        ? "accordion-collapse collapse show"
                        : "accordion-collapse collapse"
                    }
                  >
                    <ProviderSearch
                      providerFilter={providerFilter}
                      providers={providers}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <ProductSearchProvider
                show={show}
                productFilter={productFilter}
                products={products}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <NewCustomer />
        <NewProduct />
        <NewProvider />
      </div>
    </div>
  );
};
