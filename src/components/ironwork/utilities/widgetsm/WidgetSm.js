import { Visibility } from "@material-ui/icons";
import { useSelector } from "react-redux";
import "./widgetsm.css";

export const WidgetSm = () => {

    const { eventsUser } = useSelector(state => state.users);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Members</span>
            <ul className="widgetSmList">
                {
                    eventsUser.map( (user, index) => (
                        <li key={index} className="widgetSmListItem">
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{ user.name }</span>
                                <span className="widgetSmUserTitle">{ user.email }</span>
                            </div>
                            <div className="widgetSmButton">
                               {user.role}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
