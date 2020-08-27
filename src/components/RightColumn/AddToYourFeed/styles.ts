import styled from 'styled-components';

export const Container = styled.div`
  &:nth-child(2) {
    position: sticky;
    top: 64px;
  }

  > div {
    padding: 12px;

    .title {
      font-size: 16px;
    }

    ul {
      list-style: none;
      margin-top: 8px;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
          display: flex;
          align-items: center;

          .avatar-img {
            display: inline-flex;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: var(--color-link);
          }

          .description {
            display: flex;
            flex-direction: column;
            margin-left: 10px;

            .username {
              font-size: 14px;
              font-weight: 600;
              color: var(--color-black);
            }

            .role {
              font-size: 12px;
              color: var(--color-gray);
            }
          }
        }

        & + li {
          margin-top: 10px;
        }

        button {
          height: 28px;
          width: 86px;
          background: var(--color-white);
          border: 1px solid var(--color-linkedin);
          color: var(--color-linkedin);
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;

          &:hover {
            border: 2px solid var(--color-linkedin);
            background: var(--color-input);
          }
        }
      }
    }

    p {
      margin-top: 32px;
      font-size: 14px;
      font-weight: bold;
      color: var(--color-link);
      cursor: pointer;
    }
  }
`;
