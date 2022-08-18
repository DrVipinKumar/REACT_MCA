import HeaderOne from "./components/HeaderOne";
import HeaderTwo from "./components/HeaderTwo";

function App() {
  const userName = "KIET";
  const dept = "MCA";
  const displayMsg = (msg) => {
    console.log("You ", msg);
  };
  return (
    <div>
      <HeaderOne
        user={userName}
        dept={dept}
        clicked={() => displayMsg("Clicked...")}
      />
      <HeaderTwo
        user={userName}
        dept={dept}
        clicked={() => displayMsg("Clicked...")}
      />
    </div>
  );
}

export default App;
