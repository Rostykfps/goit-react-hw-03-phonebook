import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  font-size: 18px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  margin-left: 15px;
  background-color: #fff;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  font-size: 12px;
  padding: 3px 6px;
  font-weight: 500;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #515ce6;
  }
`;
