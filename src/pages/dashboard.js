import styles from "../styles/Dashboard.module.css";
import requests from "../requests";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

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

      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row
        title='Trending on Notflix'
        fetchUrl={requests.fetchTrendingOnNetflix}
        isLargeRow
      />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export default Dashboard;
