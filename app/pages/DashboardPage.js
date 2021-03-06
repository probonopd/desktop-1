import React from 'react';

const DashboardPage = () => (
  <div id="dashboard" className="container">
    <div className="jumbotron">
      <div className="row">
        <div className="col-md-4">
          <img src="./img/logo.jpg" width="240" alt="logo" />
        </div>
        <div className="col-md-8">
          <h1>
            Welcome to the 360 Life Stream Desktop Application.
          </h1>
        </div>
      </div>
      <div className="row">
        <h2>
          This application is meant for police officers to use in their cars,
          and it provides the following functionality:
        </h2>
        <h3>
          <ol>
            <li>
              Display of one camera feed locally.
            </li>
            <li>
              Recording of one camera feed locally with upload to server.
            </li>
            <li>
              Streaming from one camera feed to hosted Wowza web
              service for later consumption.
            </li>
            <li>
              DVR playback of videos saved on the server post-recording.
            </li>
          </ol>
        </h3>
      </div>
    </div>
  </div>
);

export default DashboardPage;
