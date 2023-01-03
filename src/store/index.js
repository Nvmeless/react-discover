import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = [
    {id:2, title: "Se Calcifier la glande pinéale", isDone: false},
    {id: 1, title:"Consideration a zeulé", isDone: false},
]; 

const todoSlice = createSlice(
    {
        name:"todo",
        initialState:initialState,
        reducers: {
            addTask: (state, action) => {
                //action = {type: "ADD_NEW_TASK", payload: "New task"}
                const newTask ={
                    id:Date.now(), 
                    title: action.payload, 
                    isDone: false
                }
                state.push(newTask);
            },
            toggleTask: (state, action) => {
                //action = {type: "TOGGLE_EXISTING_TASK", payload: 4}
                const task = state.find((t) => t.id === action.payload)
                task.isDone = !task.isDone 
            },
            deleteTask: (state, action) => {
                //action = {type: "DELETE_EXISTING_TASK", payload: 6}

                state = state.filter((t) => t.id !== action.payload )
                return state;
            } 
        }
    }
);
const playlistSlice = createSlice(
    {
        name:"playlists",
        initialState:{
            playlists:[],
            status: 'idle',
            error: null
        },
        reducers: {
        },
        extraReducers(builder){
            builder
            .addCase(fetchPlaylists.pending, (state, action) => {
                console.log("Pending")
                state.status = 'loading';
            })
            .addCase(fetchPlaylists.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.playlists = action.payload.items
                console.log("Succeeded ")
            })
            .addCase(fetchPlaylists.rejected, (state, action) => {
                console.log("FAILED ! U ROCK")
                state.status = 'failed';
            })
        }
    }
);

export const fetchPlaylists = createAsyncThunk('playlists/fetchPlaylists', async (payload) => {
    const token = 'BQCs1UXH_sNU7uqnAqBeilr3oqTx_EahESvJsJ7G5HhgtkaBVExo5URhM34cImOu-L3mAEuOi2HyK0BErm9gGMs2Uyd09-VZ1QfYxQiQLcxbH21CVm1PW4u1cSPR9Z_BniHijD6t4Fs1yXyQd6vfCUzjvECsIHjii-zjHg_BxQxQukpcftVBKqG1IQFpvUKeZDTTKyV_Xe8Xrv7P'
    const config = {
        url:'https://api.spotify.com/v1/me/playlists',
        method:'get',
        headers:{
            'Authorization': `Bearer ${token}`
        },
        // data:{}
    }
    console.log("Paylkoad", payload)

    const response = await axios(config).then((res) => {
        // this.getPlateformAdaptor(res)
        console.log("RESPONSE GOT", res)
        return res;
    }).catch((error) => {
        console.log("ERR: ", error);
        return error
    })


    return response.data;
})


export const createPlaylist = createAsyncThunk('playlists/fetchPlaylists', async (payload) => {
    const token = 'BQCs1UXH_sNU7uqnAqBeilr3oqTx_EahESvJsJ7G5HhgtkaBVExo5URhM34cImOu-L3mAEuOi2HyK0BErm9gGMs2Uyd09-VZ1QfYxQiQLcxbH21CVm1PW4u1cSPR9Z_BniHijD6t4Fs1yXyQd6vfCUzjvECsIHjii-zjHg_BxQxQukpcftVBKqG1IQFpvUKeZDTTKyV_Xe8Xrv7P'
    const config = {
        url:'https://api.spotify.com/v1/me/playlists',
        method:'get',
        headers:{
            'Authorization': `Bearer ${token}`
        },
        // data:{}
    }
    const response = await axios(config).then((res) => {
        // this.getPlateformAdaptor(res)
        console.log("RESPONSE GOT", res)
        return res;
    }).catch((error) => {
        console.log("ERR: ", error);
        return error
    })


    return response.data;
})



export const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer,
        playlists:playlistSlice.reducer
    }
})

export const {
    toggleTask,
    addTask,
    deleteTask,
} = todoSlice.actions