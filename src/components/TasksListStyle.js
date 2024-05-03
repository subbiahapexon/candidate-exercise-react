import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TaskTitle = styled.span`
  font-weight: bold;
`;

export const TaskDescription = styled.span`
  color: #666;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
`;
