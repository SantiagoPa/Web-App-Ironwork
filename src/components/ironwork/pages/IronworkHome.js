import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userStartLoading } from "../../../actions/user";
import { Chart } from "../utilities/chart/Chart";
import { FeaturedInfo } from "../utilities/featuredinfo/FeaturedInfo";
import { userData } from "../../../dummyData";
import { WidgetSm } from "../utilities/widgetsm/WidgetSm";
import { Widgetlg } from "../utilities/widgetlg/Widgetlg";
import "../../../styles/components/ironwork/pages/ironworkhome.css";
import { transactionStartLoading } from "../../../actions/transactions";
import {
  balanceStartLoading,
  chartYearStartLoading,
} from "../../../actions/analytic";

export const IronworkHome = () => {
  const dispatch = useDispatch();
  const { transaction, analytic } = useSelector((state) => state);
  const event = transaction.eventsTransaction;
  const cardSemester = analytic.salesForSemestes;

  useEffect(() => {
    dispatch(userStartLoading());
    dispatch(transactionStartLoading());
    dispatch(balanceStartLoading(6));
  }, [dispatch]);

  const topPila = event.slice(event.length - 10);

  const dataSemester = cardSemester.map((element) => {
    const lineName = `${element.year} month: ${element.month + 1}`;
    const utility = element.income - element.outgoins
    return {
      name: lineName,
      utility: utility,
    };
  });

  return (
    <div className="home mt-3">
      <FeaturedInfo  cardSemester={cardSemester}/>
      <Chart
        data={dataSemester}
        title="utility analytic"
        grid
        dataKey="utility"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <Widgetlg topPila={topPila} />
      </div>
    </div>
  );
};
