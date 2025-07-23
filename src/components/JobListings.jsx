import JobListing from './JobListing'
import useFetch from '../hooks/useFetch';
import { ClipLoader } from 'react-spinners';

const JobListings = ({isHome = false}) => {
  const {data: jobs, isPending, error} = useFetch('https://pc2-db.onrender.com/jobs')
  //knows if the call is from home or the jobs page
  const jobListings = jobs ? (isHome ? jobs.slice(0, 3) : jobs) : [];

  //cliploader stylings
  const override = {
    display: 'block',
    margin: '100px auto'
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          {isPending && <ClipLoader size={150} cssOverride={override} color='#232323' />}
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