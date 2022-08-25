import DisplayName from "./components/DisplayName";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="text-center">
      <ErrorBoundary>
        <DisplayName name="MCA React" />
      </ErrorBoundary>
      <ErrorBoundary>
        <DisplayName name="REACT APP" />
      </ErrorBoundary>
      <ErrorBoundary>
        <DisplayName name="djkda111" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
