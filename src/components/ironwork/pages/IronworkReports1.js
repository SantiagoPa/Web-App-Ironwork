import { Sidebar } from "../../ui/sidebar/Sidebar";
import { Reports1 } from "../utilities/reports1/Reports1";

export const IronworkReports1 = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Reports1 />
    </div>
  );
};
