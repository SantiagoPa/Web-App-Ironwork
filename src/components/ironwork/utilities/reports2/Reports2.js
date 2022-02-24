import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userData } from "../../../../dummyData";
import { Chart } from "../chart/Chart";

export const Reports2 = () => {
  return (
    <div className="flex-4">
      <div className="d-flex">
        <div className="col p-4">
          <div className="featuredItem">
            <span className="featuredTitle">title</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,415</span>
              <span className="featuredMoneyRate">
                -11.4
                <ArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
        </div>
        <div className="col p-4">
          <div className="featuredItem">
            <span className="featuredTitle">title</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,415</span>
              <span className="featuredMoneyRate">
                +5.4
                <ArrowUpward className="featuredIcon" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="col">
          <Chart data={userData} title="Analytics Customers" grid dataKey="Active User" />
        </div>
      </div>
      <div className="d-flex">
        <div className="col">
          <Chart data={userData} title="Analytics Providers" grid dataKey="Active User" />
        </div>
      </div>
    </div>
  );
};
