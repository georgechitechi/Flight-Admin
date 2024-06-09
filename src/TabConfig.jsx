import React, { useState, useEffect } from 'react';
import { app, pages } from '@microsoft/teams-js';

const TabConfig = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    // Initialize the Microsoft Teams SDK
    app.initialize().then(() => {
        // Register the save handler
        pages.config.registerOnSaveHandler((saveEvent) => {
          const baseUrl = `https://apps.flightadmin.info`;
          const contentUrl = `${baseUrl}/index.html#/config?name=${encodeURIComponent(
            name
          )}`;

          pages.config
            .setConfig({
              suggestedDisplayName: 'My Tab',
              entityId: 'entity1',
              contentUrl: contentUrl,
              websiteUrl: contentUrl,
            })
            .then(() => {
              saveEvent.notifySuccess();
            })
            .catch((error) => {
              saveEvent.notifyFailure(error.message);
            });
        });

        // Indicate that the configuration is valid to enable the save button
        pages.config.setValidityState(false);
      })
      .catch((error) => {
        console.error('Error initializing Microsoft Teams SDK:', error);
      });
  }, [name]);

  return (
    <div className='container mt-4'>
      <h2>Configuration Tab</h2>
      <div>
        This is where you will add your tab configuration options that the user
        can choose when the tab is added to your team/group chat.
      </div>
      <div className='gap-2'>
        <label >Enter List Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter List Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TabConfig;
