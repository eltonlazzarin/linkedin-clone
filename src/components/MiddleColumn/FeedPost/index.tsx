/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  Comments,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

import api from '../../../api.json';

interface Users {
  avatar_url: string;
  user_name: string;
  header: string;
  time: string;
  post_img: string;
  reactions_counter: number;
  comments: number;
}

interface PropsType {
  api?: Array<Users>;
}

const FeedPost: React.FC<PropsType> = () => {
  const [reactions, setReactions] = useState(0);
  const [showComments, setShowComments] = useState(false);

  function handleReactions() {
    setReactions(reactions + 1);
    setShowComments(!showComments);
  }

  return (
    <>
      {api.map((user, index) => (
        <Panel key={index}>
          <Container>
            <Row className="heading">
              <Avatar src={user.avatar_url} alt="Avatar" />
              <Column>
                <h3>{user.user_name}</h3>
                <h4>{user.header}</h4>
                <time>{user.time}</time>
              </Column>
            </Row>

            <PostImage src={user.post_img} alt="Post Image" />

            <Row className="likes">
              <img
                className="circle blue"
                src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                alt="Thumb Reaction"
              />

              <img
                className="circle red"
                src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
                alt="Heart Reaction"
              />

              <img
                className="circle green"
                src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                alt="Clap Reaction"
              />

              <span className="number">
                {user.reactions_counter + reactions} · {user.comments} comments
              </span>
            </Row>

            <Row>
              <Separator />
            </Row>

            <Row className="actions">
              <button onClick={handleReactions}>
                <LikeIcon />
                <span>Like</span>
              </button>
              <button onClick={() => setShowComments(!showComments)}>
                <CommentIcon />
                <span>Comment</span>
              </button>
              <button>
                <ShareIcon />
                <span>Share</span>
              </button>
              <button>
                <SendIcon />
                <span>Send</span>
              </button>
            </Row>

            {showComments && (
              <>
                <Row className="comments-input">
                  <Avatar
                    className="avatar-comment"
                    src="https://github.com/eltonlazzarin.png"
                    alt="Avatar"
                  />
                  <input placeholder="Add a comment..." />
                </Row>
                <Row className="comments">
                  <span>Most Relevant ▼</span>
                  <Row className="comments-text">
                    <Avatar
                      className="avatar-comment"
                      src="https://randomuser.me/api/portraits/men/5.jpg"
                      alt="Avatar"
                    />
                    <Comments>
                      <h3>Dexur Ardyi</h3>
                      <h4>Software Developer at Bemindu</h4>
                      <p>
                        Nor again is there anyone who loves or pursues or
                        desires to obtain pain of itself, because it is pain,
                        but because occasionally circumstances occur in which
                        toil and pain can procure him. 👏🏻👏🏻👏🏻
                        <br />
                        <br />
                        But I must explain to you how all this mistaken idea of
                        denouncing.
                      </p>
                    </Comments>
                  </Row>

                  <Row className="comments-text">
                    <Avatar
                      className="avatar-comment"
                      src="https://randomuser.me/api/portraits/women/33.jpg"
                      alt="Avatar"
                    />
                    <Comments>
                      <h3>Dyecer Vuolon</h3>
                      <h4>Web Application Developer | Deloyt</h4>
                      <p>
                        No one rejects, dislikes, or avoids pleasure itself,
                        because it is pleasure, but because those who do not
                        know how to pursue pleasure rationally encounter
                        consequences that are extremely painful.
                        <br />
                        <br />
                        To take a trivial example, which of us ever undertakes
                        laborious physical exercise. 😄
                      </p>
                    </Comments>
                  </Row>

                  <Row className="comments-text">
                    <Avatar
                      className="avatar-comment"
                      src="https://randomuser.me/api/portraits/women/45.jpg"
                      alt="Avatar"
                    />
                    <Comments>
                      <h3>Glorri Harza</h3>
                      <h4>Team Architect | Full Stack Developer | DevOps</h4>
                      <p>Any right to find fault with a man. 🚀💜</p>
                    </Comments>
                  </Row>
                  <span>Load more comments...</span>
                </Row>
              </>
            )}
          </Container>
        </Panel>
      ))}
    </>
  );
};

export default FeedPost;
