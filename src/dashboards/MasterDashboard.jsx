import { BaseDashboard } from "@microsoft/teamsfx-react";

import ChartWidget from "../widgets/ChartWidget";
import FlightWidget from "../widgets/FlightWidget";

export default class MasterDashboard extends BaseDashboard {
  layout() {
    return (
      <>
        <FlightWidget />
        <div className="one-column">
            <ChartWidget />            
        </div>
      </>
    );
  }
}
