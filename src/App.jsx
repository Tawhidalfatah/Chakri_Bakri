import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App relative">
      <Header></Header>
      <div className="text-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
