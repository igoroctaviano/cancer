import { Component } from 'react';
import React from 'react';
import RankingItem from './RankingItem.js';
import './RankingSection.css';
import PropTypes from 'prop-types';
import { getTopAnnotators, getTopTeams } from './getTopAnnotators';
import TEAM_LABELS from './teams';

class RankingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topItems: [{}, {}, {}]
    };

    let topPromise;
    switch (this.props.type) {
      case 'individual':
        topPromise = getTopAnnotators(3);
        break;
      case 'team':
        topPromise = getTopTeams(3);
        break;
    }

    if (!topPromise) {
      return;
    }

    topPromise.then(topItems => {
      this.setState({
        topItems
      });
    });
  }

  render() {
    const { type } = this.props;
    const { topItems } = this.state;
    const items = topItems.map((item, index) => {
      let name;
      switch (type) {
        case 'individual':
          name = item.name;
          break;
        case 'team':
          name = TEAM_LABELS[item.name] || '';
          break;
      }
      const score = item.value;
      return <RankingItem key={index} number={score} text={name} />;
    });

    return (
      <div className="RankingSection">
        <span className="title">{this.props.name}</span>
        <ul className="list">{items}</ul>
      </div>
    );
  }
}

RankingSection.propTypes = {
  name: PropTypes.string.isRequired
};

export default RankingSection;
