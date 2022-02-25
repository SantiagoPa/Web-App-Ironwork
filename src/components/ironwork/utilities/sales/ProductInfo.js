import imgNotFound from "../../../../assets/not-found.png";

export const ProductInfo = ({ prod, handleRemoveProductForCustomer }) => {

  return (
    <div className="row mx-2 shadow__chart">
      <div className="col d-flex flex-column">
        <span className="mb-2">nombre: {prod.name}</span>
        <div className="d-flex flex-column">
          <label className="">stock: {prod.amount} </label>
          <label className="">cantidad: {prod.orderamount} </label>
          {/* <input
            type="number"
            min={0}
            max={prod.amount}
            name="amount"
            onChange={handleInputChange}
            value={ prod.orderamount }
            className="form-control"
            defaultValue={1}
          /> */}
        </div>
      </div>
      <div className="col d-flex flex-column">
        <span className="mb-2">categoria: {prod.category}</span>
        <span>marca: {prod.brand}</span>
      </div>
      <div className="col-3 d-flex flex-column">
        <img
          className="productInfoImg"
          src={prod.url_img ? prod.url_img : imgNotFound}
        />
        <span>precio: {prod.price}</span>
      </div>
      <button
        className="mt-4 btn btn-outline-danger"
        onClick={() => {
          handleRemoveProductForCustomer(prod._id);
        }}
      >
        quitar
      </button>
    </div>
  );
};
