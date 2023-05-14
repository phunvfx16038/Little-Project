import React from "react";
import Banner from "../Components/Banner";
import BookTickets from "../Components/BookTickets";
import Cover from "../Components/Cover";

const Home = () => {
  return (
    <Cover>
      <Banner />
      <BookTickets />
    </Cover>
  );
};

export default Home;
