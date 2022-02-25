import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  providerClearActiveEvent,
  providerStartUpdate,
} from "../../../../actions/provider";
import { uiCloseModalProviderU } from "../../../../actions/ui";
import { useForm } from "../../../../hooks/useForm";
import { customStyles } from "../../../../styles/customStyles";
Modal.setAppElement("#root");

export const Provider = () => {
  const dispatch = useDispatch();

  const { modalOpenProviderU } = useSelector((state) => state.ui);
  const { provider } = useSelector((state) => state);
  let Provider;

  if (provider.actionEventProvider !== null) {
    Provider = provider.actionEventProvider;
  } else {
    Provider = {
      name: "",
      nit: "",
      rut: "",
      phone: "",
      address: "",
      email: "",
      status: null,
    };
  }

  const [formValues, handleInputChange, reset] = useForm({
    _id: Provider._id,
    name: undefined,
    NIT: undefined,
    RUT: undefined,
    phone: undefined,
    address: undefined,
    email: undefined,
    status: true,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(providerStartUpdate(Provider._id, formValues));
    dispatch(providerClearActiveEvent());
    closeModalProviderU();
    reset();
  };

  const closeModalProviderU = () => {
    dispatch(uiCloseModalProviderU());
  };

  return (
    <Modal
      isOpen={modalOpenProviderU}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={closeModalProviderU}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Editar Proveedor</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">{Provider.name}</span>
                <span className="userShowUserTitle">RUT: {Provider.rut}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Detalles de Cuenta</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">NIT: {Provider.nit}</span>
              </div>
              <span className="userShowTitle">Contacto</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">
                  celular: {Provider.phone}
                </span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{Provider.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{Provider.address}</span>
              </div>
              <div className="userShowInfo d-flex flex-column">
                <span className="userShowTitle">Accion</span>
                <div className="userUpdateItem">
                  <label className="form-label">estado</label>
                  <select
                    className="form-select"
                    name="status"
                    id="active"
                    defaultValue={true}
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
            <span className="userUpdateTitle">Campos a Editar</span>
            <form className="userUpdateForm" onSubmit={handleSubmitForm}>
              <div className="userUpdateLeft d-flex flex-column justify-content-center">
                <div className="userUpdateItem">
                  <label>nombre</label>
                  <input
                    type="text"
                    placeholder={Provider.name}
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
                    placeholder={Provider.nit}
                    name="NIT"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>RUT</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Provider.rut}
                    name="RUT"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>celular</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Provider.phone}
                    name="phone"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>direccion</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Provider.address}
                    name="address"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>correo</label>
                  <input
                    type="text"
                    className="userUpdateInput"
                    placeholder={Provider.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-4">
                  <button className="btn btn-primary px-5">Actualizar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
