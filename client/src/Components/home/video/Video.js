import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./video.css";
const Video = () => {
  return (
    <div className="videoContainer">
      <div className="grid-container-video">
        <div className="right">
          <h1>Video</h1>
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
        <div className="">
          <iframe
            className="Ytvideo"
            src="https://www.youtube.com/embed/iGpuQ0ioPrM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
