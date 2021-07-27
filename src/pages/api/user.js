/* eslint-disable import/no-anonymous-default-export */
import { getSession } from "next-auth/client"

export default async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    res.send(session.user)
  } else {
    res.send({
      error: "You must be signed in to view the protected content",
    })
  }
}
