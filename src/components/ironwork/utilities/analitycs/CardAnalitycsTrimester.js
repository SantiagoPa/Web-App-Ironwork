import { ArrowDownward, ArrowUpward, TrendingUp } from "@material-ui/icons";

export const CardAnalitycsTrimester = ({ element, index }) => {
  return (
    <div className="d-flex">
      <span className="display-6">
        <TrendingUp className="" />
        <em className="ms-4">{index+1}</em>
      </span>
      <div className="mt-5">
        <div className="featuredMoneyContainer d-flex flex-column">
          <span className="my-1 ">ingreso: <em className="text-primary">{element.income}</em></span>
          <span className="my-1 ">egreso: <em className="text-warning">{element.outgoins}</em></span>
          <span className=" my-2">utilidad: <em className="text-success">$ {element.income-element.outgoins}</em></span>
        </div>
        <span className="featuredSub">año {element.year} - mes {element.month + 1}</span>
      </div>
    </div>
  );
};
