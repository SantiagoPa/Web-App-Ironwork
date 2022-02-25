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
    const lineName = `año: ${element.year}, mes: ${element.month+1}`
    const utility = element.income - element.outgoins
    return{
      name: lineName,
      utilidad: utility
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
          <Chart data={dataAnalytic} title="Utilidad Trimestral" grid dataKey="utilidad" />
        </div>
      </div>
      <div className="row mx-1">
        <div className="col p-4 h__50 shadow__chart overflow-auto">
          <span className="display-6">Top producto mas vendidos</span>

          {topSellers.map((element, index) => (
            <div className="shadow__chart" key={index}>
              <div className="row">
                <div className="col d-flex flex-column">
                  <span>nombre del Producto: <em className="text-primary">{element[0]}</em></span>
                  <span>ventas: <em className="text-body">{element[1]}</em></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
