import React, { Component, useState } from "react";
function Answer(props) {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}
export default Answer;
