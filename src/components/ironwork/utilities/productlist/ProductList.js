import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Product } from '../productedit/Product';
import { NewProduct } from '../newproduct/NewProduct';
import { Toggle } from "../toggle/Toggle";
import { uiOpenModalProductC, uiOpenModalProductU } from "../../../../actions/ui";
import { types } from "../../../../types/types";
import { productSetActive, productStartDelete } from "../../../../actions/product";
import "./productlist.css";

export const ProductList = () => {

  const { eventsProduct } = useSelector( state => state.product );
  const dispatch = useDispatch();
  
  const [toggle, setToggle] = useState(true);

  const action = {
    type: types.switchProductList,
    payload: toggle
  }

  useEffect(() => {
    dispatch(action);
  }, [toggle, eventsProduct]);
  

  const handleOpenModalC = () => {
    dispatch(uiOpenModalProductC());
  }

  const handleOpenModalU = ( _id, url_img, name, price, sku, 
                            category, amount, model, brand, 
                            description, status ) => {

    dispatch(uiOpenModalProductU());

    dispatch(productSetActive({ _id, url_img, name, price, sku, 
                                category, amount, model, brand, 
                                description, status }));
  }

  const handleDelete = (id) => {
    dispatch( productStartDelete(id) );
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 205 },
    {
      field: "name",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.name}
          </div>
        );
      },
    },
    { 
      field: "amount", 
      headerName: "amount", 
      width: 125 
    },
    {
      field: "price",
      headerName: "price",
      width: 120,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="">
            {params.row.status ? (
              <span className="badge rounded-pill bg-success">Active</span>
            ) : (
              <span className="badge rounded-pill bg-danger">Inactive</span>
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button 
              className="btn btn-outline-success"
              onClick={ ()=>{ 
                handleOpenModalU( 
                  params.row._id, 
                  params.row.url_img,
                  params.row.name,
                  params.row.price,
                  params.row.SKU,
                  params.row.category,
                  params.row.amount,
                  params.row.model,
                  params.row.brand,
                  params.row.description,
                  params.row.status
                )}
              }
            >
                Edit
            </button>
            {
              params.row.status 
              && 
              <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete( params.row._id )}
            />            
            }
          </>
        );
      },
    },
  ];

  return (
    <> 
      <div className="productList m-4">
      <div 
        className="
          d-flex 
          align-items-center">
        <h2 className="display-5"> Product List </h2>
        <div className="d-flex mt-3 ms-4 align-itmes-center">
          <Toggle onChange={ (e)=>setToggle(e.target.checked)} toggle={toggle} />
          <p className="ms-3">
            products: { toggle ?"Active":"Inactive"}
          </p>
        </div>
        <button 
          className="
          ms-4
          btn 
          btn-outline-primary"
          onClick={handleOpenModalC}
        >
          Create
        </button>
      </div>
        <DataGrid
          rows={eventsProduct}
          disableSelectionOnClick
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={8}
          checkboxSelection
          rowsPerPageOptions={[8]}
        />
        
        <Product />
        <NewProduct />
      </div>
    </>
  );
};
