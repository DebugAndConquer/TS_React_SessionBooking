import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import UpcomingSessions from "../Sessions/UpcomingSessions.jsx";
import Button from "../UI/Button.jsx";

const MainHeader = () => {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  const showUpcomingSessions = () => {
    setUpcomingSessionsVisible(true);
  };

  const hideUpcomingSessions = () => {
    setUpcomingSessionsVisible(false);
  };

  return (
    <>
      {upcomingSessionsVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
      )}
      <header id="main-header">
        <h1>DummyLogo</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
