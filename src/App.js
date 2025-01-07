import "./App.css";
import Header from "./components/Header";
import Report from "./components/Report";
import Options from "./components/Options";

function App() {
  const { currentReportURL, reportName, reportOptions, handleReportChange } =
    Options();

  return (
    <div className="App">
      <Header
        options={reportOptions}
        onSelect={(url, name) => handleReportChange(url, name)}
      />
      <h2 className="reportName">{reportName}</h2>
      <Report embedURL={currentReportURL} />
    </div>
  );
}

export default App;
