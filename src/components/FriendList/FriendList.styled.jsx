import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.li`
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 8px;
  background-color: rgb(239 239 239);
`;
export const Chip = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
//   outline: none;
//   border-radius: 50%;
//   width: 10px;
//   height: 10px;
//   background-color: ${props => {
//     switch (props.isOnline) {
//       case 'online':
//         return 'green';
//       case 'offline':
//         return 'red';
//       default:
//         return 'red';
//     }
//   }};

export const Img = styled.img`
  padding: 10px;
`;
export const TextName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
