import Hero from "../components/Hero"
import Homecards from "../components/Homecards"
import JobListings from "../components/JobListings"


const Homepage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <JobListings isHome = {true} />
    </>
  )
}

export default Homepage