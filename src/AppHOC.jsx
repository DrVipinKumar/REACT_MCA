import ChangeColorOnClick from "./components/ChangeColorOnClick";
import ChangeColorOnHover from "./components/ChangeColorOnHover";
import { Name } from "./components/contextname";
function App() {
  return (
    <div className="text-center">
      <Name.Provider value="MCA React Context">
        <ChangeColorOnClick />
        <ChangeColorOnHover />
      </Name.Provider>
    </div>
  );
}

export default App;
