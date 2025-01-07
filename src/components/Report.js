import React from "react";

const Report = ({ embedURL }) => {
  return (
    <div className="reportContainer">
      <iframe
        className="report"
        title="Looker Studio Report"
        src={embedURL}
        frameborder="0"
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default Report;
