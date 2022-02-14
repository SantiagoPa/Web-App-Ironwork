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

  const [formValues, handleInputChange ] = useForm({
    name:'',
    email:'',
    password: '',
    status: true,
    role: 'ADMIN_ROLE',
  });
  
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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(userStartUpdate(user.uid,formValues));
    dispatch(uiClosModalUserU());
    dispatch(userClearActiveEvent());
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
          <h1 className="userTitle">Edit User</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">Info User</span>
                <span className="userShowUserTitle">of {user.name}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{user.name}</span>
              </div>
              <div className="userShowInfo">
                <AppsSharp className="userShowIcon" />
                <span className="userShowInfoTitle">{user.role}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{user.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {user.status ? "active" : "inactive"}
                  active
                </span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form 
              className="userUpdateForm"
              onSubmit={ handleSubmitForm }
            >
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder={user.name}
                    className="userUpdateInput"
                    name="name"
                    onChange={ handleInputChange }
                  />
                </div>
                {/* <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={user.email}
                    className="userUpdateInput"
                    name="email"
                    onChange={ handleInputChange }
                  />
                </div> */}
                <div className="userUpdateItem">
                  <label>Password</label>
                  <input 
                    type="password" 
                    className="userUpdateInput" 
                    name='password'
                    onChange={ handleInputChange }  
                  />
                </div>
                <div className="userUpdateItem">
                  <label className="form-label">status</label>
                  <select 
                    className="form-select"
                    name="status" 
                    id="active-status"
                    onChange={ handleInputChange }
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
                <div className="userUpdateItem">
                  <label className="form-label">Role</label>
                  <select 
                    className="form-select"
                    name="role"
                    onChange={ handleInputChange } 
                    defaultValue={"USER_ROLE"}
                    id="active-role"
                  >
                    <option value={"USER_ROLE"}>user_role</option>
                    <option value={"ADMIN_ROLE"}>admin_role</option>
                  </select>
                </div>
                <div className="userUpdateItem">
                  <button className="btn btn-primary">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
