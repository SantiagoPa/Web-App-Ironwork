import { useEffect, useState } from 'react';
import './featuredinfo.css';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const FeaturedInfo = ({cardSemester}) => {

    const [perc, setPerc] = useState(0)

    const utilities = cardSemester.map((el)=>{
        return{
            utility: el.income-el.outgoins
        }
    })
    const porcentaje = (utilities[5].utility*100/utilities[4].utility-100)
    
    const mediaTrimestre1 = (utilities[5].utility + utilities[4].utility +utilities[3].utility)/3
    const mediaTrimestre2 = (utilities[2].utility + utilities[1].utility +utilities[0].utility)/3
   
    const porcentaje2 = (mediaTrimestre1*100/mediaTrimestre2-100)

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">utility</span>
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$ {utilities[5].utility}</span>
                <span className="featuredMoneyRate">
                    %{Math.floor(porcentaje)}{" "}
                    {
                        porcentaje < 0 ? (
                            <ArrowDownward  className="featuredIcon negative"/>
                        ) : (
                            <ArrowUpward  className="featuredIcon"/>
                        )
                    } 
                </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">utility</span>
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$ {Math.floor(mediaTrimestre1)}</span>
                <span className="featuredMoneyRate">
                    %{Math.floor(porcentaje2)}{" "}
                    {
                        porcentaje2 < 0 ? (
                            <ArrowDownward  className="featuredIcon negative"/>
                        ) : (
                            <ArrowUpward  className="featuredIcon"/>
                        )
                    } 
                </span>
                </div>
                <span className="featuredSub">Compared to last trimestes</span>
            </div>
        </div>
    )
}
