
import { Provider } from 'react-redux';

import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";

function IronworkApp() {

  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}

export default IronworkApp;
