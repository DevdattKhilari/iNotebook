import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.message}
        It gives the alert message
      </div>
    </div>
  );
};

export default Alert;
