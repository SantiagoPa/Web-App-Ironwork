import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModalProductU } from "../../../../actions/ui";
import { Publish } from "@material-ui/icons";
import { customStyles } from "../../../../styles/customStyles";
import {
  productClearActiveEvent,
  productStartUpdate,
} from "../../../../actions/product";
import { useForm } from "../../../../hooks/useForm";
import imgNotFound from "../../../../assets/not-found.png";
import "./product.css";

Modal.setAppElement("#root");

export const Product = () => {
  const dispatch = useDispatch();
  const { modalOpenProductU } = useSelector((state) => state.ui);
  const { product } = useSelector((state) => state);

  let Product;

  if (product.actionEventProduct !== null) {
    Product = product.actionEventProduct;
  } else {
    Product = {
      _id: "",
      url_img: "",
      name: "",
      price: "",
      sku: "",
      category: "",
      amount: "",
      model: "",
      brand: "",
      description: "",
      status: "",
    };
  }

  const [formValues, handleInputChange, reset] = useForm({
    _id: Product._id,
    name: undefined,
    price: undefined,
    category: undefined,
    SKU: undefined,
    amount: undefined,
    model: undefined,
    brand: undefined,
    description: undefined,
    status: true,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(productStartUpdate(Product._id, formValues));
    reset();
    dispatch(uiCloseModalProductU());
    dispatch(productClearActiveEvent());
  };

  const closeModalProductU = () => {
    dispatch(uiCloseModalProductU());
    dispatch(productClearActiveEvent());
  };

  return (
    <Modal
      isOpen={modalOpenProductU}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={closeModalProductU}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="product">
        <div className="productTitleContainer">
          {/* <h1 className="productTitle">Product</h1> */}
        </div>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <img
                src={Product.url_img ? Product.url_img : imgNotFound}
                alt=""
                className="productInfoImg"
              />
              <span className="productName">{Product.name}</span>
            </div>
            <div className="row">
              <div className="d-flex">
                <div className="col-7 me-2">
                  <div className="productInfoItem">
                    <span className="productInfoKey">id: {Product._id}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      precio: {Product.price}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      categoria: {Product.category}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">SKU: {Product.sku}</span>
                  </div>
                </div>

                <div className="col-5 ms-2">
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      stock: {Product.amount}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      modelo: {Product.model}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      marca: {Product.brand}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      estado: {Product.status ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm" onSubmit={handleSubmitForm}>
            <div className="productFormLeft">
              <input
                type="text"
                name="name"
                placeholder="nombre del producto"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="precio"
                name="price"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="categoria"
                name="category"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="SKU"
                name="SKU"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="stock"
                name="amount"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="modelo"
                name="model"
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="marca"
                name="brand"
                onChange={handleInputChange}
              />
              <textarea
                type="text"
                placeholder="descripcion"
                name="description"
                onChange={handleInputChange}
              />
              <label className="form-label">estado</label>
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

            <div className="productFormRight mx-4">
              <div className="productUpload d-flex justify-content-center flex-column">
                <Publish className="text-primary display-5"/>
              <button className="btn btn-primary">Actualizar</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
