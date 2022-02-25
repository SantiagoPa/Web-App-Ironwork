import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import {
  AppsSharp,
  LocationSearching,
  MailOutline,
  PermIdentity,
} from "@material-ui/icons";
import { useForm } from "../../../../hooks/useForm";
import { uiClosModalUserU } from "../../../../actions/ui";
import { userClearActiveEvent, userStartUpdate } from "../../../../actions/user";
import { customStyles } from '../../../../styles/customStyles';
import "./user.css";

Modal.setAppElement("#root");

export const User = () => {
  
  const dispatch = useDispatch();

  const closeModalUser = () => {
    dispatch(uiClosModalUserU());
    dispatch(userClearActiveEvent());
  }
  
 
  const { users, ui} = useSelector((state) => state );
  let user;

  if (users.actionEventUser !== null) {
    user = users.actionEventUser;
  }else {
    user={
      name: "",
      email: "",
      password:'',
      role:'',
      status:true,
      uid:''
    }
  }

  const [formValues, handleInputChange, reset ] = useForm({
    name: undefined,
    email: undefined,
    password: undefined,
    status: true,
    role: 'USER_ROLE',
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(userStartUpdate(user.uid, formValues));
    dispatch(uiClosModalUserU());
    dispatch(userClearActiveEvent());
    reset();
  }

  return (
    <Modal
      isOpen={ ui.modalOpenUserU }
      // onAfterOpen={ afterOpenModal }
      onRequestClose={ closeModalUser }
      style={ customStyles }
      closeTimeoutMS={ 300 }
      overlayClassName="modal-fondo"
      className=""
    >
       <div className="user w__50">
        <div className="userTitleContainer">
          <h1 className="userTitle">Editar Usuario</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">Informacion de: </span>
                <span className="userShowUserTitle">{user.name}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">detalles</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{user.name}</span>
              </div>
              <div className="userShowInfo">
                <AppsSharp className="userShowIcon" />
                <span className="userShowInfoTitle">{user.role}</span>
              </div>
              <span className="userShowTitle">Contacto</span>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">
                  status: {user.status ? "active" : "inactive"}
                </span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Campos a Editar</span>
            <form 
              className="userUpdateForm"
              onSubmit={ handleSubmitForm }
            >
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre</label>
                  <input
                    type="text"
                    placeholder={user.name}
                    className="userUpdateInput"
                    name="name"
                    onChange={ handleInputChange }
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Contraseña</label>
                  <input 
                    type="password" 
                    className="userUpdateInput" 
                    name='password'
                    onChange={ handleInputChange }  
                  />
                </div>
                <div className="userUpdateItem">
                  <label className="form-label">Estado</label>
                  <select 
                    className="form-select"
                    name="status" 
                    onChange={ handleInputChange }
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
                <div className="userUpdateItem">
                  <label className="form-label">Rol</label>
                  <select 
                    className="form-select"
                    name="role"
                    onChange={ handleInputChange } 
                    defaultValue={"USER_ROLE"}
                    id="active-role"
                  >
                    <option value={"USER_ROLE"}>user</option>
                    <option value={"ADMIN_ROLE"}>admin</option>
                  </select>
                </div>
                <div className="userUpdateItem">
                  <button className="btn btn-primary">Actualizar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
