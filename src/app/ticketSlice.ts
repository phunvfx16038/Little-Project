
import { createSlice } from "@reduxjs/toolkit";
import { dataInput } from "../propType";

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

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        getTickets: (state,action)=>{
            state.tickets = action.payload
        }
    },
    
})
export const {getTickets} = ticketSlice.actions
export default ticketSlice.reducer;