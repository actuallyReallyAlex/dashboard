import * as React from "react";
import { Configuration, Profile } from "./@types";
import { defaultConfiguration } from "./constants";
import useLocalStorage from "./hooks/useLocalstorage";
import Dashboard from "./views/Dashboard";
import Walkthrough from "./views/Walkthrough";

const App: React.FunctionComponent = () => {
  const [profile, setProfile] = useLocalStorage<Profile | null>(
    "profile",
    null
  );
  const [configuration, setConfiguration] = useLocalStorage<Configuration>(
    "configuration",
    defaultConfiguration
  );

  if (!profile) {
    return <Walkthrough setProfile={setProfile} />;
  }

  return (
    <Dashboard
      configuration={configuration}
      setConfiguration={setConfiguration}
    />
  );
};

export default App;
