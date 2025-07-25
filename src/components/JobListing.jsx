import { useState } from 'react';
//npm install react-icons for location asthetics
import {FaMapMarker} from 'react-icons/fa'
import { Link } from "react-router";

const cashFormatter = (cash) => {
   const formatter = new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  })
  return formatter.format(cash)
}
export {cashFormatter}

const JobListing = ({job}) => {
  //show full or less description
  const [showFull, setShowFull] = useState(false)
  let handleClick = () => setShowFull((prevstate) => !prevstate)
  let description = job.description
  if (!showFull) {
    description = description.substring(0, 90) + '...'
  }
  //need to receive job as a prop from a joblisting map.
  //organised the file in a manner that is ready for data.
 

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button onClick={handleClick} className="text-sky-500 mb-5 hover:text-sky-600">{showFull ? 'Less' : 'More'}</button>

        <h3 className="text-indigo-500 mb-2">{cashFormatter(job.salary)} / Month</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1"/>
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-sky-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
          Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobListing