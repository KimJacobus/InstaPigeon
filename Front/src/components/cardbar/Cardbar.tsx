import { useFetch } from "../../hooks/useFetch"
import Likes from "./Likes"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Box } from "@mui/system"
import { Account } from "./Account"
import { Comments } from "./Comments"

const Cardbar = () => {
  // am I supposed to get the number of likes from the json file here ? but that would mean two fetch requests...
  // on refresh we're reinstallizing to 999
  // am I already getting the data ?

  const { id } = useParams()
  const url = "http://localhost:3000/posts/" + id
  const [likes, setLikes] = useState<number>(999)

  function postLikes(e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log("click love")

    setLikes((prevLikes) => prevLikes + 1)

    const putLikes = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ likes }),
    }
    fetch(url, putLikes)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  // fetch and post to db

  function postFollows() {
    console.log("click follows")
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0px 20px",
      }}
    >
      <div>
        <Account />
      </div>

      <div style={{ display: "flex" }}>
        <Likes like={postLikes} />
        <div style={{ marginLeft: "10px" }}>
          <Comments />
        </div>
      </div>
    </Box>
  )
}

export default Cardbar
