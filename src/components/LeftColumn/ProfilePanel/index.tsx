import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/eltonlazzarin.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Elton Lazzarin</h1>

        <h2>
          Fullstack Developer | Node.js | ReactJS | React Native | IT
          Infrastructure Analyst
        </h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Who viewed your profile</span>
          <span className="value">1.928</span>
        </div>
        <div className="key-value">
          <span className="key">Views of your post</span>
          <span className="value">998</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
