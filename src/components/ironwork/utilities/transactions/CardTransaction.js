export const CardTransaction = ({ element }) => {
  return (
    <div className="row mx-2 mt-4 shadow__chart">
      <div className="col d-flex flex-column">
        {
           (element) && element.products.map((el,index)=>(
                <div key={index} className="row my-2">
                    <div className="col mx-2 d-flex flex-column">
                        <span>product name: {el.name}</span>
                        <span>amoutn: {el.amount}</span>
                        <span>total: $ {el.total}</span>
                    </div>
                    <div className="col mx-2 d-flex flex-column">
                        <span>SKU: {el.SKU}</span>
                        <p>
                            codes:
                            {
                                (el.codes) 
                                ? el.codes.map((e,i)=>(<span key={i} className="mx-2">'{e}'</span>))
                                : <span className="mx-2 text-warning"> no-codes </span>
                            }
                        </p>
                    </div>
                </div>
            ))
        }
      </div>
      <div className="row mt-4">
        <div className="col d-flex justify-content-between">
          <div className="d-flex flex-column">
            <p className="text-body">
              customer:
              <span className="text-dark mx-2">{element.customer.name}</span>
            </p>
            <p className="text-body">
                CC:
              <span className="text-dark mx-2">{element.customer.CC}</span>
            </p>
            <p className="text-body">
                RUT:
              <span className="text-dark mx-2">{element.customer.RUT}</span>
            </p>
          </div>
          <div className="d-flex flex-column">
            <p className="text-body">
              total price:
              <span className="text-success mx-2">$ {element.totalPrice}</span>
            </p>
            <p className="text-body">
              discount:
              <span className="text-danger mx-2">
                -{element.discount * 100}%
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
