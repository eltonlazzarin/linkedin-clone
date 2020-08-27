import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Trending</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">The Six Morning Habits</span>
              <span className="subtext">1h • 316 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Unconscious Bias</span>
              <span className="subtext">4h • 28 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Confronting</span>
              <span className="subtext">1d • 36 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">The Last Frontend</span>
              <span className="subtext">1d • 178 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Publishing Sites</span>
              <span className="subtext">2d • 83 readers</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">New Tecnologies</span>
              <span className="subtext">1w • 199 readers</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;
