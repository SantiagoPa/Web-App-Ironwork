import { useDispatch } from "react-redux";
import { uiOpenModalProductC } from "../../../../actions/ui";
import { CardSearch } from "./CardSearch";

export const ProductSearch = ({ productFilter, products, handleInputChange, show }) => {

  const dispatch = useDispatch();

  const handleOpenModalC = (e) => {
    e.preventDefault();
    dispatch(uiOpenModalProductC());
  };

  return (
    <div className={
      (show) 
      ? "row m-1 shadow__chart"
      :  "row m-1 mt-5 shadow__chart h-75"
    }>
      <div className="col">
        <form>
          <label className="form-label">Buscar producto</label>
          <div className="d-flex">
          <input
            className="form-control"
            name="searchProduct"
            onChange={handleInputChange}
          />
          <button 
            className="mx-2 btn btn-outline-success"
            onClick={handleOpenModalC}
          >
            crear
          </button>
          </div>
        </form>
        <div className={(show) ? "h__small overflow-auto": "h__50 overflow-auto"}>
          {productFilter.map((product, index) => (
            <CardSearch 
              key={index}
              product={product}
              products={products}
              typeValue={'customer'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
