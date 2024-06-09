import "../styles/FlightWidget.css";
import { Button, Text, Spinner, Image } from "@fluentui/react-components";
import { MoreHorizontal32Regular, AirplaneFilled} from "@fluentui/react-icons";
import { BaseWidget } from "@microsoft/teamsfx-react";

import { getFlightData } from "../services/flightService";

export default class FlightWidget extends BaseWidget {
  async getData() {
    return { data: getFlightData() };
  }

  header() {
    return (
      <div>
        <AirplaneFilled />
        <Text>Flights</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  loading() {
    return (
      <div className="loading">
        <Spinner label="Loading..." size='huge' labelPosition="below" />
      </div>
    );
  }

  body() {
    let hasData = this.state.data && this.state.data.length > 0;
    return (
      <div>
        {hasData ? (
          <div className="list-body">
            {this.state.data?.map((t) => {
              return (
                <div key={`${t.id}-div`}>
                  <div className="divider" />
                  <Text className="title">{t.title}</Text>
                  <Text className="content">{t.date}</Text>
                  <Text className="content">{t.content}</Text>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src="no-item.png" height="200px" />
            <Text size={700} className="center">No data</Text>
          </div>
        )}
      </div>
    );
  }
}
