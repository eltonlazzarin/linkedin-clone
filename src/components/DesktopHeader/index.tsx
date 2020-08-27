import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NetworkIcon,
  JobsIcon,
  MessagesIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Search" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Home</span>
            </button>
            <button className="notification">
              <NetworkIcon />
              <span>My Network</span>
            </button>
            <button>
              <JobsIcon />
              <span>Jobs</span>
            </button>
            <button>
              <MessagesIcon />
              <span>Messaging</span>
            </button>
            <button className="notification">
              <NotificationsIcon />
              <span>Notifications</span>
            </button>
            <button>
              <ProfileCircle src="https://github.com/eltonlazzarin.png" />
              <span>
                Me <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;
