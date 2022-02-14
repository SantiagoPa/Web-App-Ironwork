import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { uiCloseModalCustomerU } from "../../../../actions/ui";
import { customStyles } from "../../../../styles/customStyles";
import { customerClearActiveEvent, customerStartUpdate } from "../../../../actions/customer";
import "./customers.css";
import { useForm } from "../../../../hooks/useForm";

Modal.setAppElement("#root");

export const Customers = () => {
  const dispatch = useDispatch();

  const { modalOpenCustomerU } = useSelector((state) => state.ui);
  const { customer } = useSelector((state) => state);
  let Customer;

  if (customer.actionEventCustomer !== null) {
    Customer = customer.actionEventCustomer;
  } else {
    Customer = {
      id: "",
      name: "",
      nit: "",
      cc: "",
      rut: "",
      phone: "",
      address: "",
      email: "",
      type: "",
      status: null,
    };
  }

  const [formValues, handleInputChange] = useForm({
    _id: Customer.id,
    name: '',
    NIT: '',
    CC: '',
    RUT: '',
    phone: '',
    address: '',
    email: '',
    type: 'COMPANY',
    status: null
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(customerStartUpdate(Customer.id , formValues));
    closeModalCustomerU();
  }

  const closeModalCustomerU = () => {
    dispatch(customerClearActiveEvent());
    dispatch(uiCloseModalCustomerU());
  };

  return (
    <Modal
      isOpen={modalOpenCustomerU}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={closeModalCustomerU}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Customer</h1>
          <Link to="/dashboard/customer/newCustomer">
            <button className="btn btn-outline-primary">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{Customer.name}</span>
                <span className="userShowUserTitle">RUT: {Customer.rut}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">NIT: {Customer.nit}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">CC: {Customer.cc}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">
                  Phone: {Customer.phone}
                </span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{Customer.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{Customer.address}</span>
              </div>
              <div className="userShowInfo d-flex flex-column">
              <span className="userShowTitle">Actions</span>
                <div className="userUpdateItem">
                    <label className="form-label">type</label>
                    <select 
                      className="form-select" 
                      name="type" 
                      id="active"
                      onChange={handleInputChange}
                    >
                      <option value={"COMPANY"}>Company</option>
                      <option value={"NATURAL"}>Natural</option>
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label className="form-label">Status</label>
                    <select 
                      className="form-select" 
                      name="status" 
                      id="active"
                      onChange={handleInputChange}
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" onSubmit={handleSubmitForm}>
              <div className="userUpdateLeft d-flex flex-column justify-content-center">
                <div className="userUpdateItem">
                  <label>name</label>
                  <input
                    type="text"
                    placeholder={Customer.name}
                    className="userUpdateInput"
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>NIT</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Customer.nit}
                    name="NIT"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>CC</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Customer.cc}
                    name="CC"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>RUT</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Customer.rut}
                    name="RUT"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Customer.phone}
                    name="phone"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Customer.address}
                    name="address"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Customer.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary px-5">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
