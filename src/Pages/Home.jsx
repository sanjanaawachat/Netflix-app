import React from "react";
import Card from "../Components/Card";
import { movie_Data } from "./Data";

// import Card from '../Component/Card'
export default function Home() {
  return (
    <div className="container mt-5 cards_container">
      {movie_Data.map((val, i) => {
        return (
          <Card
            name={val.name}
            time={val.time}
            img={val.img}
            desc={val.description}
            profile={val.profile_img}
            key={i}
          />
        );
      })}
    </div>
  );
}