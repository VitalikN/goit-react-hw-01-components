import styled from '@emotion/styled';

export const BoxProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Img = styled.img`
  border-radius: 50%;
  outline: 1px solid black;
`;

export const TextName = styled.p`
  font-size: 24px;
`;
export const TextInfo = styled.p`
  opacity: 0.6;
  margin: 5px;
`;

export const List = styled.ul`
  display: flex;
  margin: 10px;
  gap: 5px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  padding: 20px;
  outline: 1.5px solid rgb(213, 208, 208);
  background-color: rgb(239 239 239);
  border-radius: 8px;
`;
export const ChipInfo = styled.span`
  opacity: 0.6;
  margin: 5px;
`;
export const Chip = styled.span`
  font-weight: 500;
  font-size: 18px;
`;
