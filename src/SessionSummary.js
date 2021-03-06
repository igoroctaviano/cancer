import { Component } from 'react';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { withRouter } from 'react-router-dom';

import './SessionSummary.css';

import ProgressSection from './shared/ProgressSection.js';
import PropTypes from 'prop-types';
import Logo from './shared/Logo';
import AchievementBadge from './shared/AchievementBadge.js';
import NotificationService from './notifications/NotificationService';

import animateNumber from './shared/animateNumber';

class SessionSummary extends Component {
  constructor(props) {
    super(props);

    this.preventAnimations = false;

    this.state = {
      score: this.props.current,
      sessionTotal: 0
    };

    this.sessionTotalRef = React.createRef();
  }

  getBadgeBox(key, img, description, progressValue) {
    let progressStyle;
    if (progressValue !== undefined) {
      progressStyle = { width: `${progressValue}%` };
    }

    return (
      <div className="badgeWrapper col-16 col-xs-8 col-sm-third" key={key}>
        <div className="badge">
          <AchievementBadge img={img} description={description} />
          <div className="progress">
            {progressStyle ? (
              <div className="badgeProgress">
                <div className="badgeProgressValue" style={progressStyle} />
              </div>
            ) : (
              <div className="badgeEarned">Badge earned</div>
            )}
            <div className="badgeDescription">{description}</div>
          </div>
        </div>
      </div>
    );
  }

  getSessionBadges(current) {
    const badges = [];
    const earnedBadges = NotificationService.dumpSessionEarned();

    earnedBadges.forEach(details => {
      const { description, img } = details;
      const badgeBox = this.getBadgeBox(img, img, description);
      badges.push(badgeBox);
    });

    const achievementAlerts = NotificationService.getAchievementAlerts();
    achievementAlerts.forEach(details => {
      const { description, img } = details;
      const { percent } = NotificationService.getAchievementProgress(details);
      const badgeBox = this.getBadgeBox(img, img, description, percent);
      badges.push(badgeBox);
    });

    return badges;
  }

  componentDidMount() {
    const element = this.sessionTotalRef.current;
    const valueFrom = this.state.sessionTotal;
    const valueTo = this.props.measurementsInCurrentSession;
    animateNumber(element, valueTo, valueFrom, 1000, () => {
      if (this.preventAnimations) {
        return;
      }

      this.setState({ sessionTotal: valueTo });
    });
  }

  componentWillUnmount() {
    this.preventAnimations = true;
  }

  handleClickDashboard = () => {
    this.props.history.push('/');
  };

  performLogout() {
    window.auth.logout();
  }

  render() {
    return (
      <div className="SessionSummary">
        <Logo />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-15 col-sm-14 col-md-12 col-lg-10">
              <div className="pageHeader">
                <h1>
                  <span className="d-none d-sm-inline">Session </span>
                  Summary
                </h1>
                <div className="controlButtons">
                  <button className="logout" onClick={this.performLogout}>
                    Logout
                  </button>
                  <button
                    className="dashboard"
                    onClick={this.handleClickDashboard}
                  >
                    <span className="d-none d-sm-inline">Back to </span>
                    Dashboard
                  </button>
                </div>
              </div>
              <div className="sessionTotalSection cardSection">
                <h2>Session Total</h2>
                <div className="sessionTotalValue">
                  <span className="prefix">+</span>
                  <span className="value" ref={this.sessionTotalRef}>
                    0
                  </span>
                </div>
              </div>
              <div className="scoreSection cardSection">
                <h2>Score</h2>
                <ProgressSection
                  current={this.props.current}
                  measurementsInCurrentSession={
                    this.props.measurementsInCurrentSession
                  }
                />
              </div>
              <div className="earnedBadgesSection row justify-content-center">
                {this.getSessionBadges()}
              </div>
            </div>
          </div>
        </div>
        <ReactTooltip className="DashboardTooltip" effect="solid" />
      </div>
    );
  }
}

SessionSummary.propTypes = {
  current: PropTypes.number.isRequired,
  measurementsInCurrentSession: PropTypes.number.isRequired
};

export default withRouter(SessionSummary);
