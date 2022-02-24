import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const CardAnalitycsTrimester = ({ element, index }) => {
  return (
    <div className="d-flex">
      <span className="display-6">Sales</span>
      <div className="mt-5">
        <div className="featuredMoneyContainer d-flex flex-column">
          <span className="my-1 ">income: <em className="text-primary">{element.income}</em></span>
          <span className="my-1 ">outgoins: <em className="text-warning">{element.outgoins}</em></span>
          <span className=" my-2">utility: <em className="text-success">$ {element.income-element.outgoins}</em></span>
        </div>
        <span className="featuredSub">year {element.year} - month {element.month + 1}</span>
      </div>
    </div>
  );
};
