import "./App.css";

import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import {
  FluentProvider,
  Spinner,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
} from "@fluentui/react-components";
import { useTeams } from "@microsoft/teamsfx-react";

import MasterDashboard from "./dashboards/MasterDashboard";
import { TeamsFxContext } from "./internal/context";
import Privacy from "./Privacy";
import TabConfig from "./TabConfig";
import TermsOfUse from "./TermsOfUse";
import UserComponent from "./widgets/UserComponent";
import TabDocs from './TabDocs';
import AllUserComponent from "./widgets/AllUserComponent";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading, themeString } = useTeams()[0];
  return (
    <TeamsFxContext.Provider value={{ themeString }}>
      <FluentProvider
        id="fluent-provider"
        theme={
          themeString === "dark"
            ? teamsDarkTheme
            : themeString === "contrast"
            ? teamsHighContrastTheme
            : teamsLightTheme
        }
      >
        <Router>
          {loading ? (
            <Spinner size="huge" id="spinner" />
          ) : (
            <Routes>
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/termsofuse" element={<TermsOfUse />} />
              <Route path="/tab" element={<UserComponent />} />
              <Route path="/allusers" element={<AllUserComponent />} />
              <Route path="/flights" element={<MasterDashboard />} />
              <Route path="/config" element={<TabConfig />} />
              <Route path="/docs" element={<TabDocs />} />
              <Route path="*" element={<Navigate to={"/tab"} />} />
            </Routes>
          )}
        </Router>
      </FluentProvider>
    </TeamsFxContext.Provider>
  );
}
