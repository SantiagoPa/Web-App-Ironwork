import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiClosModalUserC } from "../../../../actions/ui";
import { startUserAddNew, userAddNew } from "../../../../actions/user";
import { useForm } from "../../../../hooks/useForm";
import { customStyles } from '../../../../styles/customStyles';
import "./newuser.css";


Modal.setAppElement("#root");


export const NewUser = () => {

  const ui = useSelector((state) => state.ui );

  const [formValues, handleInputChange] = useForm({
    name: null,
    email: null,
    password: null,
    role: 'ADMIN_ROLE'
  });

  const dispatch = useDispatch();

  const closeModalUserC = ()=> {
    dispatch(uiClosModalUserC());
  }

  const handleSubmitUser = (e) => {
    e.preventDefault();
    dispatch(startUserAddNew(formValues));
    dispatch(uiClosModalUserC());
   
  }

  return (
    <Modal
      isOpen={ ui.modalOpenUserC }
      // onAfterOpen={ afterOpenModal }
      onRequestClose={ closeModalUserC }
      style={ customStyles }
      closeTimeoutMS={ 300 }
      overlayClassName="modal-fondo"
     
    >
      <div className="newUser p-4 d-flex flex-column">
        <h1 className="newUserTitle">Nuevo Usuario</h1>
        <form 
        className="
        newUserForm 
        d-flex 
        fle-column"
        onSubmit={ handleSubmitUser }
        >
          <div className="newUserItem">
            <label className="form-label">nombre</label>
            <input 
            className="form-control" 
            type="text" 
            placeholder="john" 
            name="name"
            onChange={ handleInputChange }
            />
          </div>
          <div className="newUserItem">
            <label className="form-label">correo</label>
            <input
              className="form-control"
              type="email"
              placeholder="john@gmail.com"
              name="email"
              onChange={ handleInputChange }
            />
          </div>
          <div className="newUserItem">
            <label className="form-label">contraseña</label>
            <input
              className="form-control"
              type="password"
              placeholder="password"
              name="password"
              onChange={ handleInputChange }
            />
          </div>
          <div className="newUserItem">
            <label className="form-label">Rol</label>
            <select 
            className="form-select" 
            name="role"
            onChange={ handleInputChange } 
            id="active"
            >
              <option value="ADMIN_ROLE">admin</option>
              <option value="USER_ROLE">usuario</option>
            </select>
          </div>
          <button className="btn btn-primary mt-4 d-flex">Create</button>
        </form>
      </div>
    </Modal>
  );
};
