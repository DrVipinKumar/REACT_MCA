import ChildA from "./components/ChildA";
import { Name } from "./components/contextname";
function App() {
  const display = () => {
    return <h2>This is display function</h2>;
  };
  return (
    <div className="text-center">
      <Name.Provider
        value={{ name: "Dr. Vipin Classes", course: "PhD", onDisplay: display }}
      >
        <ChildA />
      </Name.Provider>
    </div>
  );
}

export default App;
