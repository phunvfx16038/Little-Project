import { configureStore } from '@reduxjs/toolkit'
import { ticketSlice } from './ticketSlice'
import { TypedUseSelectorHook, useDispatch,useSelector } from 'react-redux';
import {eventSlice} from './eventSlice';


export const store =  configureStore({
    reducer:{
        ticket:ticketSlice.reducer,
        events:eventSlice.reducer,
    }

})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
