import { useSelector } from "react-redux";
import { userData } from "../../../../dummyData";
import { Chart } from "../chart/Chart";
import { CardAnalitycsSemester } from "./CardAnalitycsSemester";
import { CardAnalitycsTrimester } from "./CardAnalitycsTrimester";

export const Analitycs = () => {
  const { analytic } = useSelector((state) => state);
  const topSellers = analytic.topSellers;
  const cardTrimester = analytic.salesForTrimester;

  console.log(cardTrimester)

  const dataAnalytic = cardTrimester.map((element)=>{
    const lineName = `year: ${element.year}, month: ${element.month+1}`
    const utility = element.income - element.outgoins
    return{
      name: lineName,
      utility: utility
    }
  });

  return (
    <div className="flex-4">
      <div className="row mt-4 mx-1">
        {cardTrimester.map((element, index) => (
          <div className="col p-4 shadow__chart">
          <CardAnalitycsTrimester element={element} index={index} key={index} />
        </div>
        ))}
      </div>
      <div className="row">
        <div className="col-12">
          <Chart data={dataAnalytic} title="Analytics" grid dataKey="utility" />
        </div>
      </div>
      <div className="row mx-1">
        <div className="col p-4 h__50 shadow__chart overflow-auto">
          <span className="display-6">best selled products</span>

          {topSellers.map((element, index) => (
            <div className="shadow__chart" key={index}>
              <div className="row">
                <div className="col d-flex flex-column">
                  <span>product name: {element[0]}</span>
                  <span>sales: {element[1]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
