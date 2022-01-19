import "./newproduct.css";

export const NewProduct = () => {
  return (
    <div className="newProduct m-5">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label className="form-label">Image</label>
          <input className="btn btn-outline-light" type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label className="form-label" >Name</label>
          <input className="form-control" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label className="form-label" >Stock</label>
          <input className="form-control" type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label className="form-label" >Active</label>
          <select className="form-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};
