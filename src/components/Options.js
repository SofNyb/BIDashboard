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
      label: "Testrapport",
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
