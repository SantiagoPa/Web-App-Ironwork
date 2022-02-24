import { ArrowDownward } from "@material-ui/icons";
import { useEffect, useState } from "react";

export const CardAnalitycsSemester = ({ cardSemester }) => {

//   const [percPrev, setPercPrev] = useState(0);
//   const [perc, setPerc] = useState(0);

//   const utilidad1 = cardSemester[0].income - cardSemester[0].outgoins  
//   const utilidad2 = cardSemester[1].income - cardSemester[1].outgoins  
//   const utilidad3 = cardSemester[2].income - cardSemester[2].outgoins
  
//   const utilidad4 = cardSemester[3].income - cardSemester[3].outgoins  
//   const utilidad5 = cardSemester[4].income - cardSemester[4].outgoins  
//   const utilidad6 = cardSemester[5].income - cardSemester[5].outgoins
 
//   useEffect(() => {
//   setPercPrev((utilidad1 + utilidad2 + utilidad3)/3)
//   setPerc((utilidad4 + utilidad5 + utilidad6)/3)
//  }, [])
 


  console.log(cardSemester)

  return (
    <div className="d-flex">
      <span className="display-6">Sales</span>
      <div className="mt-5">
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last trimester</span>
      </div>
    </div>
  );
};
