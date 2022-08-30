import ChangeColorOnClick from "./components/ChangeColorOnClick";
import ChangeColorOnHover from "./components/ChangeColorOnHover";
import { Name } from "./components/contextname";
function App() {
  return (
    <div className="text-center">
      <Name.Provider value="Dr. Vipin Kumar">
        <ChangeColorOnClick />
      </Name.Provider>
      <ChangeColorOnHover name="Dr. Sachin Kumar" />
    </div>
  );
}

export default App;
