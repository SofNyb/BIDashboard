import { useState } from "react";

const Options = () => {
  const [currentReportURL, setCurrentReportURL] = useState(
    "https://lookerstudio.google.com/embed/reporting/00db76df-9684-4433-992f-aeba8d33164e/page/jJ8YE"
  );
  const [reportName, setReportName] = useState("Bareen");

  const reportOptions = [
    {
      label: "Bareen",
      value:
        "https://lookerstudio.google.com/embed/reporting/00db76df-9684-4433-992f-aeba8d33164e/page/jJ8YE",
    },
    {
      label: "Les Deux",
      value:
        "https://lookerstudio.google.com/embed/reporting/09cc061d-5b2e-45c6-a9c0-bb7a0fca0c72/page/XJoUE",
    },
    {
      label: "ÅBEN",
      value:
        "https://lookerstudio.google.com/embed/reporting/ab7a5abd-acd8-4db8-ad1c-8e2eab393422/page/WHoUE",
    },
  ];

  const handleReportChange = (url, name) => {
    setCurrentReportURL(url);
    setReportName(name);
  };
  return { currentReportURL, reportName, reportOptions, handleReportChange };
};

export default Options;
