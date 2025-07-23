import { useState } from "react"
import { toast } from 'sonner';
import { useNavigate } from "react-router"
import { addJob } from "../hooks/useFetch";

const AddJobPage = () => {
  const navigate = useNavigate()

  const [jobAdded, setJobAdded] = useState({
    title: '',
    type: 'Full-Time',
    location: '',
    description: '',
    salary: '60000',
    companyName: '',
    companyDescription: '',
    contactEmail: '',
    contactPhone: '',
  })

  function handleChange(e) {
    setJobAdded({
      ...jobAdded,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newJobObj = {
      title: jobAdded.title,
      type: jobAdded.type,
      location: jobAdded.location,
      description: jobAdded.description,
      salary: jobAdded.salary,
      company: {
        name: jobAdded.companyName,
        description: jobAdded.companyDescription,
        contactEmail: jobAdded.contactEmail,
        contactPhone: jobAdded.contactPhone
      }
    }
    addJob(newJobObj)
    toast.success('job added successfully')
    return navigate('/jobs')
  }

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
                id="type"
                name="type"
                value={jobAdded.type}
                className="border rounded w-full py-2 px-3"
                onChange={handleChange}
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
               <input
                id="salary"
                name="salary"
                value={jobAdded.salary}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                onChange={handleChange}
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required           
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="companyDescription"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="companyDescription"
                name="companyDescription"
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contactEmail"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactPhone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default AddJobPage