
import { Sidebar } from '../ui/sidebar/Sidebar.js';
import { IronworkHome } from './pages/IronworkHome.js';


export const IronworkScreen = () => {

    return (
        <>    
            <div className="d-flex">
                <Sidebar />
                <IronworkHome />
            </div>    
        </>
    )
}
