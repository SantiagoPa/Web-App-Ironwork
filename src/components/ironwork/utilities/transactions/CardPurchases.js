export const CardPurchases = ({ element }) => {
  return (
    <div className="row mx-2 mt-4 shadow__chart">
      <div className="col d-flex flex-column">
        {element &&
          element.products.map((el, index) => (
            <div key={index} className="row my-2">
              <div className="col mx-2 d-flex flex-column">
                <span>product name: {el.name}</span>
                <span>total: $ {el.total}</span>
              </div>
              <div className="col mx-2 d-flex flex-column">
                <span>amoutn: {el.amount}</span>
                <span>SKU: {el.SKU}</span>
              </div>
            </div>
          ))}
      </div>
      <div className="row mt-4">
        <div className="col d-flex justify-content-between">
          <div className="d-flex flex-column">
            <p className="text-body">
              provider:
              <span className="text-dark mx-2">{element.provider.name}</span>
            </p>
            <p className="text-body">
              NIT:
              <span className="text-dark mx-2">{element.provider.NIT}</span>
            </p>
            <p className="text-body">
              RUT:
              <span className="text-dark mx-2">{element.provider.RUT}</span>
            </p>
          </div>
          <div className="d-flex flex-column">
            <p className="text-body">
              payment option
              <span className="text-primary mx-2">{element.paymentOption}</span>
            </p>
            <p className="text-body">
              payment method:
              <span className="text-primary mx-2">
                {element.paymentMethod}
              </span>
            </p>
            <p className="text-body">
              total to pay:
              <span className="text-success mx-2">$ {element.totalToPay}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
