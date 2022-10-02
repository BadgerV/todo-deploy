import { updateStart, updateSuccess, updateError } from "./todoListSlice";
import axios from 'axios';


export const addTodo = async ( user, dispatch ) => {
    const { task, time } = user;
    const isDone = false;
    dispatch(updateStart());

    
   

    try {
        var output = await axios.get("/api/todo")
        const post = await axios.post("/api/todo", {id : output.data.length, task, time, isDone })
        
        
        const res = await axios.get("/api/todo")
        dispatch(updateSuccess(res.data))
    } catch (error) {
        dispatch(updateError())
    }
}

// dispatch(
//             addTodo({
//               id: getTodo.length,
//               taskName: task,
//               time: time,
//               isDone: false,
//             })
//           )

export const deleteTodo = async (id, dispatch) => {
    dispatch(updateStart());

    try {
        const res = await axios.delete(`/api/todo/${id}`)
        var output = await axios.get("/api/todo")

        dispatch(updateSuccess(output.data))
    } catch (err) {
        dispatch(updateError())
        
    }
}

export const getTodos = async (dispatch) => {
    dispatch(updateStart());

    try {
        const res = await axios.get(`/api/todo/`)

        dispatch(updateSuccess(res.data))
    } catch (err) {
        dispatch(updateError())
        
    }
}

export const makeIsDone = async (id, isDone, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.patch(`/api/todo/${id}`, { setIsDone: !isDone })
        var output = await axios.get("/api/todo")
        dispatch(updateSuccess(output.data))
    } catch(err) {
        dispatch(updateError())

    }
}