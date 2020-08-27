import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const AddToYourFeed: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Add To Your Feed</span>

        <ul>
          <li>
            <div>
              <img
                className="avatar-img"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Avatar"
              />
              <span className="description">
                <span className="username">Luror Bolrur</span>
                <span className="role">CFO @Gytech</span>
              </span>
            </div>

            <button>+ Follow</button>
          </li>
          <li>
            <div>
              <img
                className="avatar-img"
                src="https://randomuser.me/api/portraits/women/16.jpg"
                alt="Avatar"
              />
              <span className="description">
                <span className="username">Zaziol Poemushnar</span>
                <span className="role">Backend Dev @Fyn</span>
              </span>
            </div>

            <button>+ Follow</button>
          </li>
          <li>
            <div>
              <img
                className="avatar-img"
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt="Avatar"
              />
              <span className="description">
                <span className="username">Pueho Roion</span>
                <span className="role">FullStack | TypeScrit</span>
              </span>
            </div>

            <button>+ Follow</button>
          </li>
          <li>
            <div>
              <img
                className="avatar-img"
                src="https://randomuser.me/api/portraits/men/38.jpg"
                alt="Avatar"
              />
              <span className="description">
                <span className="username">Neuten Hioal</span>
                <span className="role">DevOps @UlysTEch</span>
              </span>
            </div>

            <button>+ Follow</button>
          </li>
        </ul>
        <p>View all recommendations</p>
      </Panel>
    </Container>
  );
};

export default AddToYourFeed;
