import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { User } from "../usersedit/User";
import { NewUser } from "../newuser/NewUser";
import { uiOpenModalUserC, uiOpenModalUserU } from "../../../../actions/ui";
import { Toggle } from "../toggle/Toggle";
import { types } from "../../../../types/types";
import "./userlist.css";
import { userSetActive, userStartDelete } from "../../../../actions/user";

export const UserList = () => {
  const { eventsUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(true);

  const action = {
    type: types.switchUserList,
    payload: toggle,
  };

  useEffect(() => {
    dispatch(action);
  }, [toggle]);

  const handleDelete = (uid) => {
    dispatch(userStartDelete(uid));
  };

  const handleOpenModalU = (uid, name, email, password, role, status) => {
    dispatch(uiOpenModalUserU());
    dispatch(userSetActive({ uid, name, email, password, role, status }));
  };

  const handleOpenModalC = () => {
    dispatch(uiOpenModalUserC());
  };

  const columns = [
    {
      field: "uid",
      headerName: "UID",
      width: 250,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.uid}</div>;
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },
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
      field: "role",
      headerName: "role",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              className="
                btn
                btn-outline-success"
              onClick={() =>
                handleOpenModalU(
                  params.row.uid,
                  params.row.name,
                  params.row.email,
                  params.row.password,
                  params.row.role,
                  params.row.status
                )
              }
            >
              Edit
            </button>
            {
              params.row.status 
              &&
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.uid)}
              />
            }
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
        <h2 className="display-5"> Users List </h2>
        <div className="d-flex mt-3 ms-4 align-itmes-center">
          <Toggle
            onChange={(e) => setToggle(e.target.checked)}
            toggle={toggle}
          />
          <p className="ms-3">users: {toggle ? "Active" : "Inactive"}</p>
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
        rows={eventsUser}
        getRowId={(row) => row.uid}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        rowsPerPageOptions={[8]}
      />

      <User />
      <NewUser />
    </div>
  );
};
