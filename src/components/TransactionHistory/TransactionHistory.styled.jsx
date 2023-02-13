import styled from '@emotion/styled';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Tbody = styled.tbody`
  tr:nth-of-type(2n) {
    background-color: rgb(220 239 239);
  }
`;
export const Tr = styled.tr`
  width: 100%;
  display: flex;
  gap: 1px;
  align-items: center;
`;
export const Th = styled.th`
  width: 100px;
  padding: 20px;
  text-align: center;
  font-weight: 400;
  color: #fff;
  border: 1px solid rgb(255 255 255);
  background-color: rgb(92 191 205);
`;
export const Td = styled.td`
  width: 100px;
  padding: 20px;
  text-align: center;
  border: 1px solid rgb(255 255 255);
  opacity: 0.7;
`;
