import React from "react";
import { Loader } from "lucide-react";

const App: React.FC = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <Loader color="white" size={48} />
    </div>
  );
};

export default App;
