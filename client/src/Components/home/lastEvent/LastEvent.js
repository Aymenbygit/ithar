import React from "react";
import "./lastEvent.css";
import { EventData } from "../carousel/SliderData";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
const LastEvent = () => {
  return (
    <div className="eventContainer">
      <div className="grid-container">
        <div className="grid-item grid-item-1">
          <img src={EventData.image} className="eventImg" alt="event" />
        </div>
        <div className="grid-item grid-item-2 right">
          <h1>Event one</h1>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </p>
          <button>
            <Link to="/s" style={{ color: "white" }}>
              Discover all events <FiArrowRight />
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastEvent;