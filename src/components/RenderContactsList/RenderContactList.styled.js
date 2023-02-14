import styled from 'styled-components';

export const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: red;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
