import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModalProductU } from "../../../../actions/ui";
import { Publish } from "@material-ui/icons";
import { customStyles } from "../../../../styles/customStyles";
import "./product.css";
import { productClearActiveEvent, productStartUpdate } from "../../../../actions/product";
import { useForm } from "../../../../hooks/useForm";

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

  const [formValues, handleInputChange] = useForm({
    _id: Product._id,
    name: '',
    price: '',
    url_img: '',
    category: '',
    SKU: '',
    amount: '',
    model: '',
    brand: '',
    description: '',
    status: true,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch( productStartUpdate(Product._id,formValues) );
    dispatch(uiCloseModalProductU());
    dispatch(productClearActiveEvent());
  }

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
                src={
                  Product.url_img
                    ? Product.url_img
                    : "https://maxler.com/local/templates/maxler/assets/img/not-found.png"
                }
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
                      price: {Product.price}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      category: {Product.category}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">SKU: {Product.sku}</span>
                  </div>
                </div>

                <div className="col-5 ms-2">
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      amount: {Product.amount}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      model: {Product.model}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      brand: {Product.brand}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">
                      status: {Product.status ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm" onSubmit={ handleSubmitForm }>
            <div className="productFormLeft">
              <input 
                type="text" 
                name="name" 
                placeholder="name product" 
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                placeholder="price" 
                name="price"
                onChange={handleInputChange}
                />
              <input 
                type="text" 
                placeholder="url img" 
                name="url_img"
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                placeholder="category" 
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
                placeholder="amount" 
                name="amount"
                onChange={handleInputChange}  
              />
              <input 
                type="text" 
                placeholder="model" 
                name="model"
                onChange={handleInputChange}
              />
              <input 
                type="text" 
                placeholder="brand" 
                name="brand"
                onChange={handleInputChange}
              />
              <textarea 
                type="text" 
                placeholder="description" 
                name="description"
                onChange={handleInputChange}
              />
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

            <div className="productFormRight mx-4">
              
              <div className="productUpload">
                <img
                  src={
                        Product.url_img 
                        ? Product.url_img 
                        : 'https://maxler.com/local/templates/maxler/assets/img/not-found.png' }
                  alt=""
                  className="productUploadImg"
                />
                <label className="form-label">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>

              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
