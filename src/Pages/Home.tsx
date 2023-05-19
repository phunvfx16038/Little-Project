import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import BookTickets from "../Components/BookTickets";
import Cover from "../Components/Cover";
import { getTickets } from "../app/ticketSlice";
import { useAppDispatch, useAppSelector } from "../app/store";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  const tickets = useAppSelector((state) => state.ticket);
  console.log(tickets);

  return (
    <Cover>
      <Banner />
      <BookTickets />
    </Cover>
  );
};

export default Home;
