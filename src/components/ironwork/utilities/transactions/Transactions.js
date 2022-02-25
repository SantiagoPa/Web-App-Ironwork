import { LocationSearching } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { CardPurchases } from "./CardPurchases";
import { CardTransaction } from "./CardTransaction";

export const Transactions = () => {
  const { transaction } = useSelector((state) => state);
  const transactions = transaction.eventsTransaction;
  const purchases = transaction.eventsPurchases;
  return (
    <div className="flex-4">
      <div className="d-flex">
        <div className="col shadow__chart">
          <span className="display-6 text-primary">
            Transacciones con los Clientes
          </span>
          <div className="h__60 overflow-auto mt-2">
            {transactions.map((element, index) => (
              <CardTransaction key={index} element={element} />
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="col shadow__chart">
          <span className="text-primary display-6">
            Transacciones con los Proveedores
          </span>
          <div className="h__60 overflow-auto">
            {
              purchases.map( (element, index) => (
                <CardPurchases key={index} element={element} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
