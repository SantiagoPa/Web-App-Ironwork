import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { startCustomerAddNew } from "../../../../actions/customer";
import { uiCloseModalCustomerC } from "../../../../actions/ui";
import { useForm } from "../../../../hooks/useForm";
import { customStyles } from "../../../../styles/customStyles";
import "./newcustomer.css";

Modal.setAppElement("#root");

export const NewCustomer = () => {
  const dispatch = useDispatch();

  const { modalOpenCustomerC } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "",
    type: "",
    CC: "",
    RUT: "",
    NIT: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleSubmitCustomer = (e) => {
    e.preventDefault();
    console.log(formValues)
    dispatch( startCustomerAddNew(formValues) );
    dispatch( uiCloseModalCustomerC() );
  };

  const closeModalCustomer = () => {
    dispatch(uiCloseModalCustomerC());
  };

  return (
    <Modal
      isOpen={modalOpenCustomerC}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={closeModalCustomer}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="newUser m-5">
        <h1 className="display-5">New Customer</h1>

        <form className="newUserForm d-flex justify-content-center" onSubmit={handleSubmitCustomer}>
          
          <div className="d-flex">
            <div className="row w-25-c mx-2">
              <div className="newUserItem">
                <label className="form-label">name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label className="form-label">NIT</label>
                <input
                  className="form-control"
                  type="text"
                  name="NIT"
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label className="form-label">CC</label>
                <input
                  className="form-control"
                  type="text"
                  name="CC"
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label className="form-label">RUT</label>
                <input
                  className="form-control"
                  type="text"
                  name="RUT"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row w-25-c">
            <div className="newUserItem">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
                <div className="newUserItem">
                  <label className="form-label">type</label>
                  <select 
                    className="form-select" 
                    name="type" 
                    onChange={handleInputChange}
                    id="active"
                  >
                    <option value={"COMPANY"}>Company</option>
                    <option value={"NATURAL"}>Natural</option>
                  </select>
                </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="btn btn-primary px-5">Create</button>
          </div>

        </form>
      </div>
    </Modal>
  );
};
