import React, { useRef } from "react";
import AddProperty from "./components/AddProperty";
import PropertyList from "./components/PropertyList";

function App() {
  const listRef = useRef();

  return (
    <div>
      <h1>🏠 RentEase</h1>
      <AddProperty refresh={() => window.location.reload()} />
      <PropertyList ref={listRef} />
    </div>
  );
}

export default App;
