import '../styles/ChartWidget.css';
import { AreaChart } from '@fluentui/react-charting';
import {
  Text,
  Button,
  ToggleButton,
  Spinner,
} from '@fluentui/react-components';
import {
  ArrowRight16Filled,
  DataTrending48Filled,
  MoreHorizontal32Regular,
} from '@fluentui/react-icons';
import { BaseWidget } from '@microsoft/teamsfx-react';

import {
  getChart1Points,
  getChart2Points,
  getTimeRange,
} from '../services/chartService';

export default class ChartWidget extends BaseWidget {
  async getData() {
    return {
      selectedRange: '7 days',
      chartProps: this.retriveChartsData('7 days'),
      timeRange: getTimeRange(),
    };
  }

  header() {
    return (
      <div>
        <DataTrending48Filled />
        <Text>Charts</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  body() {
    return (
      <div>
        <div className="time-span">
          {this.state.timeRange?.map((t, i) => {
            return (
              <ToggleButton
                key={`tb-time-range-${i}`}
                appearance="transparent"
                checked={this.state.selectedRange === t}
                onClick={() =>
                  this.setState({
                    chartProps: this.retriveChartsData(t),
                    selectedRange: t,
                  })
                }>
                {t}
              </ToggleButton>
            );
          })}
        </div>

        {this.state.chartProps && (
          <div className="area-chart">
            <AreaChart data={this.state.chartProps} />
          </div>
        )}
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

  footer() {
    return (
      <Button
        id="chart-footer"
        appearance="transparent"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        size="small">
        View details
      </Button>
    );
  }

  retriveChartsData(r) {
    const chartPoints = [
      {
        legend: 'Data 1',
        data: getChart1Points(r),
        color: '#6264A7',
      },
      {
        legend: 'Data 2',
        data: getChart2Points(r),
        color: '#D9DBDB',
      },
    ];
    const chartData = {
      lineChartData: chartPoints,
    };
    return chartData;
  }
}
