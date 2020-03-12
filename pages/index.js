import { useContext, useEffect } from "react";
import Navbar from "./comps/navbar";
import { useEnv } from "./comps/contexts/envContext";

const Index = () => {
  const statusUrl = useEnv();

  useEffect(() => {
    console.log(statusUrl);
  }, [statusUrl]);

  return (
    <div>
      <Navbar />
      <h1>Hello from index</h1>
      <h3>This is statusUrl: {statusUrl}</h3>
    </div>
  );
};

export default Index;
