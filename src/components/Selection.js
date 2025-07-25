import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(setSelectionStyle)}
    >
      <h3>Selection</h3>
    </div>
  );
};

export default Selection;




