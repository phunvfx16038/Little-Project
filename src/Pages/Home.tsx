import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import BookTickets from "../Components/BookTickets";
import Cover from "../Components/Cover";
import { getTickets } from "../app/ticketSlice";
import { useAppDispatch, useAppSelector } from "../app/store";
import { onSnapshot } from "firebase/firestore";
import { ticketCollection } from "../firebase/controller";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    //get all events data from firebase
    onSnapshot(ticketCollection, (snapshot) => {
      let data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      //save event data to redux
      dispatch(getTickets(data));
    });
  }, [dispatch]);

  const tickets = useAppSelector((state) => state.ticket);

  return (
    <Cover>
      <Banner />
      <BookTickets />
    </Cover>
  );
};

export default Home;
