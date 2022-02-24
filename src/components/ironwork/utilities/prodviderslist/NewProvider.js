import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { startProviderAddNew } from "../../../../actions/provider";
import { uiCloseModalProviderC } from "../../../../actions/ui";
import { useForm } from "../../../../hooks/useForm";
import { customStyles } from "../../../../styles/customStyles";

Modal.setAppElement("#root");

export const NewProvider = () => {
  const dispatch = useDispatch();

  const { modalOpenProviderC } = useSelector((state) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    name: null,
    RUT: null,
    NIT: null,
    email: null,
    address: null,
    phone: null,
  });

  const handleSubmitProvider = (e) => {
    e.preventDefault();
    dispatch( startProviderAddNew(formValues) );
    closeModalProvider();
    reset();
  };

  const closeModalProvider = () => {
    dispatch(uiCloseModalProviderC());
  };

  return (
    <Modal
      isOpen={modalOpenProviderC}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={closeModalProvider}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="newUser m-5">
        <h1 className="display-5">New Provider</h1>

        <form
          className="newUserForm d-flex justify-content-center"
          onSubmit={handleSubmitProvider}
        >
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
                <label className="form-label">RUT</label>
                <input
                  className="form-control"
                  type="text"
                  name="RUT"
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
            </div>
            <div className="row w-25-c">
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
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                />
              </div>
              <div className="newUserItem">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  onChange={handleInputChange}
                />
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
