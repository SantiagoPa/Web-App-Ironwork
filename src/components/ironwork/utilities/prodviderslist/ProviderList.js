import { useEffect, useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../../../types/types";
import { Toggle } from "../toggle/Toggle";
import { NewProvider } from "./NewProvider";
import {
  uiOpenModalProviderC,
  uiOpenModalProviderU,
} from "../../../../actions/ui";
import { Provider } from "./Provider";
import { providerSetActive, providerStartDelete } from "../../../../actions/provider";

export const ProviderList = () => {
  const { eventsProvider } = useSelector((state) => state.provider);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(true);

  const action = {
    type: types.switchProviderList,
    payload: toggle,
  };

  useEffect(() => {
    dispatch(action);
  }, [toggle]);

  const handleOpenModalC = () => {
    dispatch(uiOpenModalProviderC());
  };

  const handleOpenModalU = (_id, name, rut, nit, email, address, phone) => {
    dispatch(providerSetActive({ _id, name, rut, nit, email, address, phone }));
    dispatch(uiOpenModalProviderU());
  };

  const handleDelete = (id) => {
    dispatch(providerStartDelete(id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 210 },
    {
      field: "name",
      headerName: "nombre",
      width: 180,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name}</div>;
      },
    },
    { field: "email", headerName: "correo", width: 210 },
    {
      field: "status",
      headerName: "estado",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="">
            {params.row.status ? (
              <span className="badge rounded-pill bg-success">Activo</span>
            ) : (
              <span className="badge rounded-pill bg-danger">Inactivo</span>
            )}
          </div>
        );
      },
    },
    {
      field: "address",
      headerName: "direccion",
      width: 170,
    },
    {
      field: "phone",
      headerName: "celular",
      width: 120,
    },
    {
      field: "action",
      headerName: "accion",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                handleOpenModalU(
                  params.row._id,
                  params.row.name,
                  params.row.RUT,
                  params.row.NIT,
                  params.row.email,
                  params.row.address,
                  params.row.phone
                );
              }}
            >
              Editar
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
        <h2 className="display-5"> Lista de Proveedores </h2>
        <div className="d-flex mt-3 ms-4 align-itmes-center">
          <Toggle
            onChange={(e) => setToggle(e.target.checked)}
            toggle={toggle}
          />
          <span className="ms-3">
            Proveedores: {toggle ? "Activo" : "Inactivo"}
          </span>
        </div>
        <button
          className="
              ms-4
              btn 
              btn-outline-primary"
          onClick={handleOpenModalC}
        >
          Crear
        </button>
      </div>
      <DataGrid
        rows={eventsProvider}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        rowsPerPageOptions={[8]}
      />
      <NewProvider />
      <Provider />
    </div>
  );
};
