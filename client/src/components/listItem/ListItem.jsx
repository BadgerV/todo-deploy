import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getTodos, makeIsDone } from "../../app/apiCalls";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  min-height: 50px;
  width: 80%;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px 10px;
`;

const RightSide = styled.div`
  margin-left: 20px;
  flex: 4;
`;

const TaskName = styled.h3`
  color: white;
`;

const CenterSide = styled.div`
  color: white;
  flex: 1;
`;

const LeftSide = styled.div`
  margin-right: 10px;
  display: flex;
  flex: 1;
`;

const DeleteButton = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  border-radius: 5px;
  height: 35px;
  width: 35px;
  margin-right: 15px;

  &:hover {
    background-color: #e3e3e3;
    color: black;
    scale: 1.1;
  }
`;
const AnotherBut = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isDone == true ? "#e3e3e3" : "transparent"};
  border-radius: 5px;
`;

const ListItem = () => {
  const getTodo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(dispatch);
  }, []);
  return (
    <>
      {getTodo.map((item) => (
        <Container key={item.id}>
          <RightSide>
            <TaskName>{item.task}</TaskName>
          </RightSide>
          <CenterSide>{item.time}</CenterSide>
          <LeftSide>
            <DeleteButton>
              <AnotherBut isDone={item.isDone}>
                <DoneIcon
                  onClick={(e) => makeIsDone(item.id, item.isDone, dispatch)}
                />
              </AnotherBut>
            </DeleteButton>
            <DeleteButton>
              <DeleteIcon onClick={(e) => deleteTodo(item.id, dispatch)} />
            </DeleteButton>
          </LeftSide>
        </Container>
      ))}
    </>
  );
};

export default ListItem;

//onClick={() => dispatch(makeDone(item.id))}

//onClick={() => dispatch(deleteTodo(item.id))}
