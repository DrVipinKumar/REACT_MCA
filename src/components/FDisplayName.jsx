import React from "react";

function FDisplayName(props) {
  console.log("...Inside FDisplay Name");
  return (
    <div>
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default React.memo(FDisplayName);
