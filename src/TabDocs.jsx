import React from 'react';

class Docs extends React.Component {
  render() {
    return (
      <div>
        <div class="container mt-4">
          <h1 class="mb-4">Docs</h1>
          <h2>1. Introduction</h2>
          <p>
            Welcome to the documentation for the FlightAdmin Teams App. This
            guide will help you understand how to install, configure, and use
            the app within Microsoft Teams.
          </p>

          <h2>2. Installation</h2>
          <h3>Prerequisites</h3>
          <ul>
            <li>Microsoft Teams account</li>
            <li>Administrator access to install apps in Teams</li>
          </ul>

          <h3>Steps</h3>
          <ol>
            <li>Open Microsoft Teams and navigate to the Apps section.</li>
            <li>Search for "FlightAdmin Teams App".</li>
            <li>Click on the app and select "Install".</li>
            <li>
              Follow the on-screen instructions to complete the installation.
            </li>
          </ol>

          <h2>3. Configuration</h2>
          <p>
            After installing the app, you need to configure it to work with your
            organization's flight management system.
          </p>

          <h3>Steps</h3>
          <ol>
            <li>Open the FlightAdmin Teams App in Microsoft Teams.</li>
            <li>Go to the "Settings" tab.</li>
            <li>
              Enter the required information such as API keys, endpoint URLs,
              and any other necessary configuration details.
            </li>
            <li>Click "Save" to apply the settings.</li>
          </ol>

          <h2>4. Using the App</h2>
          <h3>Dashboard</h3>
          <p>
            The dashboard provides an overview of flight administration
            activities, including upcoming flights, crew schedules, and alerts.
          </p>

          <h3>Flight Management</h3>
          <p>
            Manage flights by adding, updating, or deleting flight information.
            You can access flight details, manage passenger lists, and update
            flight statuses.
          </p>

          <h3>Crew Management</h3>
          <p>
            Manage crew schedules and assignments. You can view crew
            availability, assign crew to flights, and manage crew certifications
            and training records.
          </p>

          <h2>5. Troubleshooting</h2>
          <p>
            If you encounter any issues while using the app, refer to the
            troubleshooting tips below:
          </p>

          <h3>Common Issues</h3>
          <ul>
            <li>
              <strong>App not loading:</strong> Ensure you have a stable
              internet connection and try restarting Microsoft Teams.
            </li>
            <li>
              <strong>Configuration errors:</strong> Double-check the
              configuration settings in the "Settings" tab.
            </li>
            <li>
              <strong>API errors:</strong> Verify that the API keys and endpoint
              URLs are correct and that your API service is operational.
            </li>
          </ul>

          <h3>Contact Support</h3>
          <p>
            If you need further assistance, please contact our support team at{' '}
            <a href="mailto:info@flightadmin.info">support@flightadmin.info</a>.
          </p>

          <h2>6. Frequently Asked Questions (FAQs)</h2>
          <h3>How do I reset my password?</h3>
          <p>
            To reset your password, go to the "Settings" tab and click on "Reset
            Password". Follow the on-screen instructions to complete the
            process.
          </p>

          <h3>How do I update flight information?</h3>
          <p>
            Navigate to the "Flight Management" section, select the flight you
            want to update, and make the necessary changes. Click "Save" to
            apply the updates.
          </p>

          <h3>Can I export flight data?</h3>
          <p>
            Yes, you can export flight data by going to the "Flight Management"
            section and clicking on "Export Data". Choose your preferred format
            and download the file.
          </p>
        </div>
      </div>
    );
  }
}

export default Docs;
