import { Route, Switch } from "react-router";
import Layout from "./Componets/Layout/Layout";
import Doctor from "./Container/Doctor/Doctor";
import Medicineformik from "./Container/Medicineformik/Medicineformik";
import Medicine from "./Container/Medicines/Medicine";
import { Provider } from 'react-redux'
import { configurStore } from "./Redux/Store";
import Counter from "./Redux/Reducer/Counter";

function App() {
  const store = configurStore();
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path={"/medicine"} component={Medicine} />
            <Route exact path={"/medicineformik"} component={Medicineformik} />
            <Route exact path={"/doctor"} component={Doctor} />
            <Route exact path={"/counter"} component={Counter} />
          </Switch>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
