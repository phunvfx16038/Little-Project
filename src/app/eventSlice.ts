
import { createSlice } from "@reduxjs/toolkit"
import { eventDetailProp } from "../propType"


type eventState = {
    events:eventDetailProp[],
}

const initialState:eventState = {
    events:[],
}

export const eventSlice = createSlice({
    name:'event',
    initialState,
    reducers:{
        getEvents: (state, action) => {
            state.events = action.payload;
          },
    },
    
})
export const { getEvents } = eventSlice.actions;
export default eventSlice.reducer;