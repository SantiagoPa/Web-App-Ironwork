import React from 'react';
import '../../../styles/components/ironwork/pages/ironworkhome.css';
import { Chart } from '../utilities/chart/Chart';
import { FeaturedInfo } from '../utilities/featuredinfo/FeaturedInfo';
import { userData } from '../../../dummyData';
import { WidgetSm } from '../utilities/widgetsm/WidgetSm';
import { Widgetlg } from '../utilities/widgetlg/Widgetlg';

export const IronworkHome = () => {
    return (
        <div className="home mt-3">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <Widgetlg />
            </div>
        </div>
    )
}
