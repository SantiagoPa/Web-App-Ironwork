import React from "react";
import "./widgetlg.css";

export const Widgetlg = ({ topPila }) => {
  const formatDate = (date) => {
    // console.log(date)
    if (date) {
      let newDate = new Date(date);
      return [
        {
          day: newDate.getDate(),
          year: newDate.getFullYear(),
          month: newDate.getUTCMonth(),
        },
      ];
    }
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody className="overflow-auto">
          <tr className="widgetLgTr">
            <th className="widgetLgTh text-primary">index</th>
            <th className="widgetLgTh text-primary">Customer</th>
            <th className="widgetLgTh text-primary">Date</th>
            <th className="widgetLgTh text-primary">discount</th>
            <th className="widgetLgTh text-primary">Total price</th>
            <th className="widgetLgTh text-primary">Total to pay</th>
          </tr>
          {topPila.map((element, index) => (
            <tr key={index} className="widgetLgTr">
              <td>{index + 1}</td>
              <td className="widgetLgUser">
                <span className="widgetLgName">{element.customer.name}</span>
              </td>
              <td className="widgetLgDate">
                {element.date &&
                  formatDate(element.date).map((e, i) => (
                    <span key={i}>
                      {e.day} - {e.month + 1} - {e.year}
                    </span>
                  ))}
              </td>
              <td
                className="
                    widgetLgAmount 
                    text-info 
                  "
              >
                {element.discount * 100}%
              </td>
              <td className="widgetLgAmount text-success">
                $ {element.totalPrice}
              </td>
              <td className="widgetLgStatus text-success">
                $ {element.totalToPay}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
