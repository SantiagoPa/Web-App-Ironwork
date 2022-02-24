import { Sidebar } from "../../ui/sidebar/Sidebar";
import { Reports2 } from "../utilities/reports2/Reports2";

export const IronworkReports2 = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Reports2 />
    </div>
  );
};
