import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { cancelMeetingsThunk } from '../store/meetings';

import AllMeetings from './AllMeetings';

const Home = ({ cancelMeetings }) => {
  return (
    <div id="landing-page">
      <div id="launch-buttons">
        <Link to="/minions">
          <div id="minions-launch" className="button launch-button">
            <img className="button launch-icon" src="public/img/81aWNRsH89L._AC_SL1500_.jpg" alt=""/>
            <div className="button label launch-label">
              Minions Database
            </div>
          </div>
        </Link>
        <Link to="/ideas">
          <div id="ideas-launch" className="button launch-button">
            <img className="button launch-icon" src="public/img/minions-rise-of-gru.webp" alt="" />
            <div className="button label launch-label">
              Million Dollar Ideas
            </div>
          </div>
        </Link>
      </div>
      <AllMeetings />
      <div id="meetings-cancel" className="button" onClick={cancelMeetings}>
        Cancel All
      </div>
    </div>
  )
};

const mapDispatch = dispatch => ({
  cancelMeetings: () => {
    dispatch(cancelMeetingsThunk());
  }
})

export default connect(null, mapDispatch)(Home);
