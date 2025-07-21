import JobListing from './JobListing'

const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]) //initailized state to hold fetch data from db
  let fetching //No end point yet but initialized a variable to represent data fetch
  //check if jobs has data if not return an empty array
  const jobListings = jobs ? jobs : [];
  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Recent Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/*<!-- Job Listings map -->*/}
            {jobListings && jobListings.map((job) => (
              <JobListing key={job.id} job={job}/>
            ))}
          </div>
        </div>
      </section>
  )
}

export default JobListings