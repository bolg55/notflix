import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
import requests from "../requests";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <Row
        title='Notflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Dashboard;
