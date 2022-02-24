import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { balanceStartLoading, cardsStartLoading, sellersStartLoading } from "../../../actions/analytic";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { Analitycs } from "../utilities/analitycs/Analitycs";


export const IronworkAnalitycs = () => {

  const dispatch = useDispatch();

  useEffect(() => {  
      dispatch( sellersStartLoading());
      dispatch( balanceStartLoading(3))
      dispatch( balanceStartLoading(6));
  }, [ dispatch ]);

  return (
    <>
        <div className="d-flex">
            <Sidebar />
            <Analitycs />
        </div>
    </>
  );
}
