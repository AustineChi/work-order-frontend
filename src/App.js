import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/";
import Header from "./layout/header";
import Login from "./views/loginPage/index";
import ChangeLog from "./views/assetManagement/changeLog";
import Meters from "./views/assetManagement/meters";
import WorkOrders from "./views/workOrders/index";
import Locations from "./views/workOrders/locations";
import Teams from "./views/workOrders/teams";
import Assets from "./views/assetManagement/assets";
import Parts from "./views/assetManagement/parts";
import WorkOrderReport from "./views/workOrders/reports";
// Add all icons to the library so you can use it in your page

function App() {
  
  return (
    <Provider store={store}>
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/" component={ChangeLog} />
          <Route path="/change/log" component={ChangeLog} />
          <Route path="/meters" component={Meters} />
          <Route path="/login" component={Login} />
          <Route path="/work/orders" component={WorkOrders} />
          <Route path="/work/order/report" component={WorkOrderReport} />
          <Route path="/teams" component={Teams} />
          <Route path="/locations" component={Locations} />
          <Route path="/assets" component={Assets} />
          <Route path="/parts" component={Parts} />
        </main>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;