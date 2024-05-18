import React from "react";

const AComplaints = ({ suppliersName, farmerName, content }) => {
  const containerStyle = {
    width: "1079px",
    height: "141px",
    backgroundColor: "white",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    marginLeft: '2rem'
  };

  const topSectionStyle = {
    height: "30%",
    fontSize: "25px",
    color: "#000",
    fontWeight: 700,
    marginLeft: "36px",
    marginBottom: "20px"
  };

  const bottomSectionStyle = {
    height: "70%",
    fontWeight: 400,
    marginBottom: "10px",
    fontSize: "20px",
    color: "black",
    marginLeft: "36px",
  };

  return (
    <div style={containerStyle}>
      <div style={topSectionStyle}>
        {`From ${suppliersName} to ${farmerName}`}
      </div>
      <div style={bottomSectionStyle}>{content}</div>
    </div>
  );
};

export default AComplaints;
