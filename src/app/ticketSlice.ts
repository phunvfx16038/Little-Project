import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataInput } from "../propType";
import axios from "axios";

type ticketState = {
    tickets:dataInput[],
    isLoading:boolean,
    isError:boolean
}

const initialState:ticketState = {
    tickets:[],
    isLoading:false,
    isError:false
}

export const getTickets = createAsyncThunk(
    'ticket/getTickets',
    async () =>{
        try{
            const res = await axios.get('https://little-c9df5-default-rtdb.firebaseio.com/ticket.json')
            return res.data
        }catch(err){
            console.log(err)
        }
    }
)

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {},
    extraReducers:builder =>{
        builder
            .addCase(getTickets.pending,(state,action)=>{
                state.isLoading = true;
            });
        builder.addCase(getTickets.fulfilled,(state,action)=>{
                state.isError = false;
                state.isLoading = false;
                state.tickets = [action.payload];
            })
        builder.addCase(getTickets.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true
                state.tickets = []
            })

    }
})

export default ticketSlice.reducer;