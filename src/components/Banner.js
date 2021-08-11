import styles from "../styles/Banner.module.css";
import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import { FaPlay, FaTimes } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)),url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        // backgroundPosition: "center center",
      }}>
      <div className={styles.bannerContents}>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className={styles.description}>
          <h2>{truncate(movie?.overview, 250)}</h2>
        </div>

        <div className={styles.bannerButtons}>
          <button
            onClick={() => handleClick(movie)}
            className={`${styles.btn} ${styles.btnMain}`}>
            {trailerUrl ? (
              <>
                <FaTimes className={styles.icon2} /> Close{" "}
              </>
            ) : (
              <>
                <FaPlay className={styles.icon2} /> Play{" "}
              </>
            )}
          </button>
          <button className={`${styles.btn} ${styles.btnSecond}`}>
            <FiInfo className={styles.icon} />
            More Info
          </button>
        </div>
        <div className={styles.trailer}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>

        <div className={styles.fadeBottom}></div>
      </div>
    </header>
  );
};

export default Banner;
