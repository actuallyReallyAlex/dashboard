import * as React from "react";
import { Profile } from "./@types";
import useLocalStorage from "./hooks/useLocalstorage";
import Dashboard from "./views/Dashboard";
import Walkthrough from "./views/Walkthrough";

const App: React.FunctionComponent = () => {
  const [profile, setProfile] = useLocalStorage<Profile | null>(
    "profile",
    null
  );

  if (!profile) {
    return <Walkthrough setProfile={setProfile} />
  }

  return <Dashboard />;
};

export default App;
