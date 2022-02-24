import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { purchasesStartLoading, transactionStartLoading } from "../../../actions/transactions";
import { Sidebar } from "../../ui/sidebar/Sidebar"
import { Transactions } from "../utilities/transactions/Transactions"

export const IronworkTransactions = () => {

  const dispatch = useDispatch();

  useEffect(() => {  
    dispatch( transactionStartLoading() );
    dispatch( purchasesStartLoading() );
}, [ dispatch ]);

  return (
    <div className="d-flex">
        <Sidebar />
        <Transactions />
    </div>
  )
}
