import { useRouter } from "next/router";
import { useState } from "react";

const EventPage = () => {
  const router = useRouter()
//   const [slug,setSlug] = useState(()=>router.query)
  return (
    <div>
        <h1>My Event </h1>
        <h3>{router.query.slug}</h3>
        <button onClick={()=>router.push('/')}>Home Page</button>
    </div>
  )
}

export default EventPage;