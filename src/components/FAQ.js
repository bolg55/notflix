import styles from "../styles/FAQ.module.css"
import { FaTimes, FaPlus } from "react-icons/fa"
import { useState } from "react"

const data = [
  {
    id: 1,
    question: "What is Netflix?",
    desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    desc2:
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $18.99 a month. No extra costs, no contracts",
    desc2: "",
  },
  {
    id: 3,
    question: "What can I watch on Netflix?",
    desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    desc2: "",
  },
  {
    id: 4,
    question: "This doesn't look like Netflix to me?",
    desc: "You got me! This is Notflix, a Netflix clone that I am building, using Next.js",
    desc2: "",
  },
]
const FAQ = () => {
  const faq = data.map((d) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState()
    if (isOpen) {
      return (
        <div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            key={d.id}
            className={styles.qContainer}
          >
            <h2 className={styles.title}>{d.question}</h2>
            <FaTimes className={styles.btn} />
          </div>
          <div className={styles.answers}>
            <p>{d.desc}</p>
            <p>{d.desc2}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div
          onClick={() => setIsOpen(!isOpen)}
          key={d.id}
          className={styles.qContainer}
        >
          <h2 className={styles.title}>{d.question}</h2>
          <FaPlus className={styles.btn} />
        </div>
      )
    }
  })

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      {faq}
    </div>
  )
}

export default FAQ
