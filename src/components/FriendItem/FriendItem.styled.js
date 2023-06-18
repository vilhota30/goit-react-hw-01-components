import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 2px solid blueviolet;;
  border-radius: 5px;
  background-color: yellow;
  box-shadow: 5px 5px 20px 10px rgba(75, 75, 75, 0.75);
  transition: transform 0.3s ease;

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ typeName }) => {
    return typeName ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: rotateY(180deg);
    transform-origin: center;
    transform-style: preserve-3d;

  }
`;

export const FriendName = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: blue;
`;
