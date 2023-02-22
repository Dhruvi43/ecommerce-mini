import React, { useState, useCallback } from "react";
import List from "./List";

import Container from "react-bootstrap/Container";
import data from "./Data";
import "../../src/main.scss";

export default function ProductList() {
  // This state can be stored also for example in Redux
  const [currentView, setCurrentView] = useState("list");

  const handleToggleCurrentView = useCallback((view) => {
    setCurrentView(view);
  }, [setCurrentView]);

  return (
    <Container>
        <div className="App-ProductList">
      <List
        items={data}
        currentView={currentView}
        onToggleCurrentView={handleToggleCurrentView}
      />
      </div >
    </Container>
  );
}