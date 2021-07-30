import Link from "next/link"
import styles from "../styles/Dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>This is where Movies and TV Shows will show up. Coming Soon</h1>
      <Link href='/'>
        <a>
          <h2>Back to Home Page</h2>
        </a>
      </Link>
    </div>
  )
}

export default Dashboard
