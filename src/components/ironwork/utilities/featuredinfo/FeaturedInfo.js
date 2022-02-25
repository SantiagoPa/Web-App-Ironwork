import { useEffect, useState } from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const FeaturedInfo = ({ cardSemester }) => {
  const [utilities, setUtilities] = useState([]);

  useEffect(() => {
    if (cardSemester.length > 0) {
      const utility = cardSemester.map((el) => {
        return {
          utility: el.income - el.outgoins,
        };
      });
      setUtilities((utilities) => (utilities = utility));
    }
  }, [cardSemester]);

  let porcentaje1, porcentaje2, media1, media2;

  utilities[5]
    ? (porcentaje1 = (utilities[5].utility * 100) / utilities[4].utility - 100)
    : (porcentaje1 = 0);

  if(utilities[5]){
      media1 = utilities[5].utility + utilities[4].utility + utilities[3].utility/3;
      media2 = utilities[2].utility + utilities[1].utility + utilities[0].utility/3;
      porcentaje2 = media1*100/media2-100
  }else {
    porcentaje2 = 0;
  }

  return (
    <div className="featured">
      {utilities[5] ? (
        <div className="featuredItem">
          <span className="featuredTitle">Utilidad</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ {utilities[5].utility}</span>
            <span className="featuredMoneyRate">
              %{Math.floor(porcentaje1)}{" "}
              {porcentaje1 < 0 ? (
                <ArrowDownward className="featuredIcon negative" />
              ) : (
                <ArrowUpward className="featuredIcon" />
              )}
            </span>
          </div>
          <span className="featuredSub">Comparada con el mes anterior</span>
        </div>
      ) : (
        <div
          className="
                        alert alert-warning 
                        featuredItem
                        d-flex
                        justify-content-center 
                        align-items-center"
        >
          ...cargando
        </div>
      )}
      {utilities[5] ? (
        <div className="featuredItem">
          <span className="featuredTitle">Utilidad</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ {Math.floor(media1)}</span>
            <span className="featuredMoneyRate">
              %{Math.floor(porcentaje2)}{" "}
              {porcentaje2 < 0 ? (
                <ArrowDownward className="featuredIcon negative" />
              ) : (
                <ArrowUpward className="featuredIcon" />
              )}
            </span>
          </div>
          <span className="featuredSub">Comparada con el trimestre anterior</span>
        </div>
      ) : (
        <div
          className="
                        alert alert-warning 
                        featuredItem
                        d-flex
                        justify-content-center 
                        align-items-center"
        >
          ...cargando
        </div>
      )}
    </div>
  );
};
