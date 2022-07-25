import { Route, Switch } from "react-router";
import Layout from "./Componets/Layout/Layout";
import Doctor from "./Container/Doctor/Doctor";
import Medicineformik from "./Container/Medicineformik/Medicineformik";
import Medicine from "./Container/Medicines/Medicine";
import { Provider } from 'react-redux'
import { configurStore } from "./Redux/Store";
import Counter from "./Redux/Reducer/Counter";
import { PersistGate } from 'redux-persist/integration/react'
import PromicisesExampal from "./Container/promicisesExampal/PromicisesExampal";
import UseMemoExampal from "./Container/UseHookExampal/UseMemoExampal";
import UseCallbackExampal from "./Container/UseHookExampal/UseCallbackExampal";
import UseContextExampal from "./Container/UseContextExampal/UseContextExampal";

function App() {
  const {store, persistor} = configurStore();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Switch>
              <Route exact path={"/medicine"} component={Medicine} />
              <Route exact path={"/medicineformik"} component={Medicineformik} />
              <Route exact path={"/doctor"} component={Doctor} />
              <Route exact path={"/counter"} component={Counter} />
              <Route exact path={"/promicises_Exampal"} component={PromicisesExampal} />
              <Route exact path={"/memrise_Exampal"} component={UseMemoExampal} />
              <Route exact path={"/callback_Exampal"} component={UseCallbackExampal} />
              <Route exact path={"/Context_Exampal"} component={UseContextExampal} />
            </Switch>
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
