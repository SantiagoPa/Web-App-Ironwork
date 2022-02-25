import Modal from "react-modal";
import imgNotFound from "../../../../assets/not-found.png";
import { customStyles } from "../../../../styles/customStyles";
import { useFormCodes } from "../../../../hooks/useFormCodes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startTransactionAddNew } from "../../../../actions/transactions";
import { clearProductSales } from "../../../../actions/product";
import { customerClearActiveEvent } from "../../../../actions/customer";
Modal.setAppElement("#root");

export const AddCodes = ({
  modal,
  handleModal,
  totalBuy,
  myProducts,
  customerInfo,
  order,
}) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  const toggleAccordion = () => {
    setActive(active => !active);
  };

  const [formValues, handleInputChange, reset] = useFormCodes({});
  
  order.products = myProducts.map((element) => {

    return {
      idProduct: element._id,
      codes:  formValues[element.name],
      amount: element.orderamount,
    };
  });

  const handleBuyTransaction = () => {
    dispatch(startTransactionAddNew(order));
    dispatch(clearProductSales());
    dispatch(customerClearActiveEvent());
    handleModal();
    reset();
  }

  return (
    <Modal
      isOpen={modal}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={handleModal}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="row">
        <div className="row">
          <span className="display-6 my-2 mb-3">Informacion de la Transaccion</span>
          <div className="col h__50 overflow-auto">
            <div className="col d-flex flex-column ms-5 mb-3">
              <span>Customer:</span>
              <div className="row">
                <div className="col d-flex flex-column mx-2">
                  <span>
                    {customerInfo ? "nombre: " + customerInfo.name : ""}
                  </span>
                  <span>
                    {customerInfo ? "correo: " + customerInfo.email : ""}
                  </span>
                </div>
                <div className="col d-flex flex-column mx-2">
                  <span>
                    {customerInfo ? "celular: " + customerInfo.phone : ""}
                  </span>
                  <span>
                    {customerInfo ? "direccion: " + customerInfo.address : ""}
                  </span>
                </div>
                <div className="col d-flex flex-column mx-2">
                  <span>
                    {customerInfo ? "tipo: " + customerInfo.type : ""}
                  </span>
                  <span>{customerInfo ? "RUT: " + customerInfo.RUT : ""}</span>
                </div>
              </div>
            </div>
            {myProducts.map((product, index) => (
              <div key={index}>
                <div className="row mx-2 shadow__chart">
                  <label>producto: {index + 1}</label>
                  <div className="col d-flex flex-column">
                    <span className="mb-2">nombre: {product.name}</span>
                    <div className="d-flex flex-column">
                      <label className="">stock: {product.amount} </label>
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
                <div>
                  <div className="mb-3">
                    <span className="AdminDNSSpan">Agregar codigos</span>
                  </div>
                  <div className="InputList d-flex flex-column">
                    <div className="accordion mb-4">
                      <div className="accordion-item">
                        <div className="accordion-header">
                          <button
                            onClick={toggleAccordion}
                            className={`accordion-button btn btn-outline-primary`}
                          >
                            mostrar codigo
                          </button>
                        </div>
                        <div className={ active 
                            ? `accordion-collapse collapse show` 
                            : 'accordion-collapse collapse'  
                            }>
                          <div className="accordion-body">
                            {[...Array( Number(product.orderamount) )].map(
                              (el, index2) => (
                                <div className="d-flex my-2">
                                  <input
                                    className="form-control serverElement"
                                    type="text"
                                    onChange={handleInputChange}
                                    key={index2}
                                    id={index2}
                                    name={product.name}
                                  />
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="d-flex flex-row justify-content-between my-4">
                    <button className="btn btn-outline-primary"
                      onClick={hanldeAddInputCode}
                      >add code</button>
                    <button className="btn btn-outline-danger">remove</button>
                  </div> */}
                </div>
              </div>
            ))}
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
                      onClick={handleModal}
                    >
                      cerrar modal
                    </button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button 
                      className="btn btn-success"
                      onClick={handleBuyTransaction}
                    >
                      vender
                    </button>
                    <span className="mx-2 text-success">total: {totalBuy}</span>
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
