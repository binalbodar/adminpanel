import { Route,Switch } from "react-router";
import Layout from "./Componets/Layout/Layout";
import Doctor from "./Container/Doctor/Doctor";
import Medicine from "./Container/Medicines/Medicine";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={"/medicine"} component={Medicine}/>
          <Route exact path={"/doctor"} component={Doctor}/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
