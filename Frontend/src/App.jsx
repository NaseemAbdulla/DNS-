import { useEffect, useState } from "react";
import Domains from "./Domains";
import Records from "./Records";

function App() {
  const [element, setElement] = useState("records");
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {
    if (selectedDomain !== null) setElement("records");
  }, [selectedDomain]);

  return (
    <div className="flex flex-col space-y-8 px-6 py-8">
      {element === "domain" ? (
        <Domains setSelectedDomain={setSelectedDomain} />
      ) : (
        <Records />
      )}
    </div>
  );
}

export default App;
