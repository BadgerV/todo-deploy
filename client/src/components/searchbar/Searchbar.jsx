import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../../app/apiCalls";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 50%;
  justify-content: center;
`;

const Input = styled.input`
  outline: none;
  flex: 3;
  border: none;
  padding: 0px 10px;
  background-color: #3e3e3e;
  color: white;
  margin-right: 5px;
  border-radius: 5px 10px;
`;

const TimeInput = styled.input`
  outline: none;
  flex: 1;
  border: none;
  padding: 0px 10px;
  background-color: #3e3e3e;
  color: white;
  margin-right: 5px;
  border-radius: 5px 10px;
`;

const Button = styled.button`
  outline: none;
  height: 100%;
  flex: 1;
  border: none;
  background-color: #3e3e3e;
  color: white;
  border-radius: 5px 10px;
`;

const Searchbar = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();
  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    addTodo({ task, time }, dispatch);
    setTask("");
    setTime("");
  };

  return (
    <Container>
      <Input placeholder="Task" onChange={(e) => handleChangeTask(e)} value={task} />
      <TimeInput placeholder="Time" onChange={(e) => handleChangeTime(e)} value={time} />
      <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
    </Container>
  );
};

export default Searchbar;
