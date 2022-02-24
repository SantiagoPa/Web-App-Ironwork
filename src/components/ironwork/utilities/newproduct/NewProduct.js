import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { startProductAddNew } from "../../../../actions/product";
import { uiCloseModalProductC } from "../../../../actions/ui";
import { useForm } from "../../../../hooks/useForm";
import { customStyles } from "../../../../styles/customStyles";
import "./newproduct.css";

Modal.setAppElement("#root");

export const NewProduct = () => {
  const { modalOpenProductC } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const closeModalProduct = () => {
    dispatch(uiCloseModalProductC());
  };

  const [formValues, handleInputChange] = useForm({
    name: null,
    price: null,
    category: null,
    SKU: null,
    amount: null,
    model: null,
    brand: null,
    description: null,
    url_img: null
  });

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    dispatch( startProductAddNew(formValues) );
    dispatch( uiCloseModalProductC() );
  }

  return (
    <Modal
      isOpen={modalOpenProductC}
      // onAfterOpen={ afterOpenModal }
      onRequestClose={closeModalProduct}
      style={customStyles}
      closeTimeoutMS={300}
      overlayClassName="modal-fondo"
    >
      <div className="newProduct m-5">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm" onSubmit={ handleSubmitProduct }>
          
          <div className="d-flex">

            <div className="col me-5">
              <div className="addProductItem">
                <label className="form-label">Image</label>
                <input
                  className="btn btn-outline-light"
                  type="file"
                  id="file"
                />
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="www.img.com"
                  name='url_img'
                  onChange={handleInputChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label">Name</label>
                <input 
                  className="form-control"
                  type="text" 
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label">Price</label>
                <input 
                  className="form-control" 
                  type="text" 
                  name="price"
                  onChange={handleInputChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label">SKU</label>
                <input 
                  className="form-control" 
                  type="text" 
                  name="SKU"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="col">
              <div className="addProductItem">
                <label className="form-label">Category</label>
                <input 
                  className="form-control" 
                  type="text" 
                  name="category"
                  onChange={handleInputChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label">Amount</label>
                <input 
                  className="form-control" 
                  type="text" 
                  name="amount"
                  onChange={handleInputChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label">Model</label>
                <input 
                  className="form-control" 
                  type="text" 
                  name="model"
                  onChange={handleInputChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label">Brand</label>
                <input 
                  className="form-control" 
                  type="text" 
                  name="brand"
                  onChange={handleInputChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label">description</label>
                <textarea 
                  className="form-control" 
                  type="text" 
                  name="description"
                  onChange={handleInputChange}
                />
              </div>
              {/* <div className="addProductItem">
                <label className="form-label">status</label>
                <select 
                  className="form-select" 
                  name="status" 
                  id="active"
                  onChange={handleInputChange}
                  >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div> */}
            </div>
            
          </div>
          
          <div className="row">
            <button className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
