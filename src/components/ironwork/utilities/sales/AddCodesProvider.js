import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { startPurchaseAddNew } from "../../../../actions/transactions";
import { clearProductSalesForProvider } from "../../../../actions/product";
import { providerClearActiveEvent } from "../../../../actions/provider";
import imgNotFound from "../../../../assets/not-found.png";
import { customStyles } from "../../../../styles/customStyles";
import { useForm } from "../../../../hooks/useForm";

Modal.setAppElement("#root");

export const AddCodesProvider = ({
  modal,
  handleModalProvider,
  totalBuyProvider,
  myProductsProvider,
  provadierInfo,
}) => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    paymentOptionForm: null,
    paymentMethodForm: null,
    paymentMehtodCustom: null,
  });

  const { paymentOptionForm, paymentMethodForm, paymentMehtodCustom } =
    formValues;

  const orderProvider = {
    idProvider: provadierInfo ? provadierInfo._id : null,
    products: null,
    paymentOption: paymentOptionForm,
    paymentMethod: paymentMehtodCustom
      ? paymentMehtodCustom
      : paymentMethodForm,
  };

  orderProvider.products = myProductsProvider.map((element) => {
    let totalUnitario = element.orderamount * element.price;
    return {
      idProduct: element._id,
      amount: element.orderamount,
      total: totalUnitario,
    };
  });

  const handleBuyTransaction = () => {
    dispatch(startPurchaseAddNew(orderProvider));
    dispatch(clearProductSalesForProvider());
    dispatch(providerClearActiveEvent());
    handleModalProvider();
    reset();
  };

  return (
    <Modal
      isOpen={modal}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={handleModalProvider}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="d-flex flex-column">
        <div className="row">
          <span className="display-6 my-2 mb-3">Informacion de la transaccion</span>
          <div className="col h__50 overflow-auto">
            <div className="col d-flex flex-column ms-5 mb-3">
              <span>Proveedor:</span>
              <div className="row">
                <div className="col d-flex flex-column mx-2">
                  <span>
                    {provadierInfo ? "nombre: " + provadierInfo.name : ""}
                  </span>
                  <span>
                    {provadierInfo ? "email: " + provadierInfo.email : ""}
                  </span>
                </div>
                <div className="col d-flex flex-column mx-2">
                  <span>
                    {provadierInfo ? "celular: " + provadierInfo.phone : ""}
                  </span>
                  <span>
                    {provadierInfo ? "direccion: " + provadierInfo.address : ""}
                  </span>
                </div>
                <div className="col d-flex flex-column mx-2">
                  <span>
                    {provadierInfo ? "NIT: " + provadierInfo.NIT : ""}
                  </span>
                  <span>
                    {provadierInfo ? "RUT: " + provadierInfo.RUT : ""}
                  </span>
                </div>
              </div>
            </div>
            {myProductsProvider.map((product, index) => (
              <div key={index}>
                <div className="row mx-2 shadow__chart">
                  <label>producto: {index+1}</label>
                  <div className="col d-flex flex-column">
                    <span className="mb-2">nombre: {product.name}</span>
                    <div className="d-flex flex-column">
                      <label className="">cantidad: {product.orderamount} </label>
                    </div>
                  </div>
                  <div className="col d-flex flex-column">
                    <span className="mb-2">categoria: {product.category}</span>
                    <span>marca: {product.brand}</span>
                  </div>
                  <div className="col-3 d-flex flex-column">
                    <img
                      className="productInfoImg"
                      src={product.url_img ? product.url_img : imgNotFound}
                    />
                    <span>precio: {product.price}</span>
                  </div>
                </div>
                <div></div>
              </div>
            ))}
          </div>
          <div className="col-4">
            <span className="display-6">agregar opcion de pago</span>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column">
                <label className="form-label">opcion de pago</label>
                <select
                  className="form-select"
                  name="paymentOptionForm"
                  onChange={handleInputChange}
                  defaultValue={"Cash"}
                >
                  <option value={"Cash"}>Cash</option>
                  <option value={"Checks"}>Checks</option>
                  <option value={"Debit cards"}>Debit cards</option>
                  <option value={"Credit cards"}>Credit cards</option>
                  <option value={"Mobile payment"}>Mobile payment</option>
                  <option value={"Electronic bank transfers"}>
                    Electronic bank transfers
                  </option>
                </select>
              </div>
              <div className="d-flex flex-column">
                <div className="me-4">
                  <label className="form-label">
                    metodo de pago (cuotas)
                  </label>
                  <select
                    className="form-select"
                    name="paymentMethodForm"
                    onChange={handleInputChange}
                    defaultValue={"Cash"}
                  >
                    <option value={"partial payment - 1 instalmenst"}>
                      1 cuota
                    </option>
                    <option value={"partial payment - 2 instalmenst"}>
                      2 cuotas
                    </option>
                    <option value={"partial payment - 3 instalmenst"}>
                      3 cuotas
                    </option>
                    <option value={"partial payment - 4 instalmenst"}>
                      4 cuotas
                    </option>
                  </select>
                </div>
                <div className="mt-3">
                  <input
                    className="form-control"
                    placeholder="metodo de pago customizado"
                    name="paymentMehtodCustom"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="InfConChild row">
            <div className="AdminDNS col">
              <div className="DisplayServer">
                <div className="d-flex justify-content-between mt-5">
                  <div>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleModalProvider}
                    >
                      cerrar modal
                    </button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-success"
                      onClick={handleBuyTransaction}
                    >
                      comprar
                    </button>
                    <span className="mx-2 text-success">
                      total: {totalBuyProvider}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
