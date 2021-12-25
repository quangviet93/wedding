import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Detail from "./home/Detail";
import Banner from "./home/Banner";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Detail />
      <Footer />
    </div>
  );
}
