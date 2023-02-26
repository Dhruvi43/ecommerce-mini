import React, { useState, useCallback } from "react";
import List from "./List";

import Container from "react-bootstrap/Container";
import "../../src/main.scss";

export default function ProductList(props) {
  // This state can be stored also for example in Redux
  const [currentView, setCurrentView] = useState("list");

  const handleToggleCurrentView = useCallback((view) => {
    setCurrentView(view);
  }, [setCurrentView]);

  return (
    <Container>
        <div className="App-ProductList">
      <List
        items={props.product}
        currentView={currentView}
        onToggleCurrentView={handleToggleCurrentView}
        addToCartFunc = {props.addToCartFunc}
      />
      </div >
    </Container>
  );
}
