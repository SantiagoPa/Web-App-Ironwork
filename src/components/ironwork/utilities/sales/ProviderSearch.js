import { useDispatch } from "react-redux";
import { providerSetActive } from "../../../../actions/provider";
import { uiOpenModalProviderC } from "../../../../actions/ui";
import { getProviderById } from "../../../../selector";

export const ProviderSearch = ({
  providerFilter,
  providers,
  handleInputChange,
}) => {
  const dispatch = useDispatch();
  
  const handleProviderAddToSales = (id) => {
    dispatch(providerSetActive(getProviderById(id, providers)));
  };

  const handleOpenModalProviderC = (e) => {
    e.preventDefault();
    dispatch(uiOpenModalProviderC());
  };

  return (
    <div className="row m-1 mb-4 shadow__chart">
      <div className="col h__small overflow-auto">
        <form>
          <label className="form-label">search providers</label>
          <div className="d-flex">
            <input
              className="form-control"
              name="searchProvider"
              onChange={handleInputChange}
            />
            <button
              className="mx-2 btn btn-outline-success"
              onClick={handleOpenModalProviderC}
            >
              create
            </button>
          </div>
        </form>
        {providerFilter.map((provider, index) => (
          <div
            key={index}
            className="
              my-4 
              shadow__chart d-flex 
              justify-content-between
              align-items-center
            "
          >
            <span>{provider.name}</span>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                handleProviderAddToSales(provider._id);
              }}
            >
              add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
