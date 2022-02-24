import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {
  uiOpenModalCustomerC,
  uiOpenModalCustomerU,
} from "../../../../actions/ui";
import { NewCustomer } from "../newcustomer/NewCustomer";
import { Toggle } from "../toggle/Toggle";
import { Customers } from "../customersedit/Customers";
import { types } from "../../../../types/types";
import { customerSetActive, customerStartDelete } from "../../../../actions/customer";
import "./customerslist.css";

export const CustomersList = () => {
  const dispatch = useDispatch();
  const { eventsCustomer } = useSelector((state) => state.customer);

  const [toggle, setToggle] = useState(true);

  const action = {
    type: types.switchCustomerList,
    payload: toggle,
  };

  useEffect(() => {
    dispatch(action);
  }, [toggle]);

  const handleOpenModalC = () => {
    dispatch(uiOpenModalCustomerC());
  };

  const handleOpenModalU = (
    id,
    name,
    nit,
    cc,
    rut,
    phone,
    address,
    email,
    type,
    status
  ) => {
    dispatch(
      customerSetActive({
        id,
        name,
        nit,
        cc,
        rut,
        phone,
        address,
        email,
        type,
        status,
      })
    );
    dispatch(uiOpenModalCustomerU());
  };

  const handleDelete = (id) => {
    dispatch(customerStartDelete(id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 205 },
    {
      field: "name",
      headerName: "Customers",
      width: 150,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "type",
      headerName: "Type",
      width: 120,
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
      field: "address",
      headerName: "Address",
      width: 130,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
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
              onClick={() => {
                handleOpenModalU(
                  params.row._id,
                  params.row.name,
                  params.row.NIT,
                  params.row.CC,
                  params.row.RUT,
                  params.row.phone,
                  params.row.address,
                  params.row.email,
                  params.row.type,
                  params.row.status
                );
              }}
            >
              Edit
            </button>

            {params.row.status && (
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="userList m-4">
      <div
        className="
          d-flex 
          align-items-center"
      >
        <h2 className="display-5"> Customer List </h2>
        <div className="d-flex mt-3 ms-4 align-itmes-center">
          <Toggle
            onChange={(e) => setToggle(e.target.checked)}
            toggle={toggle}
          />
          <p className="ms-3">Customers: {toggle ? "Active" : "Inactive"}</p>
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
        rows={eventsCustomer}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        rowsPerPageOptions={[8]}
      />
      <NewCustomer />
      <Customers />
    </div>
  );
};
