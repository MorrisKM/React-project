
import { useState } from "react"
import { toast } from 'sonner';
import { useNavigate } from "react-router"

const EditJobPage = () => {
  const navigate = useNavigate()
   const job = {
    id: 1,
      title: "Senior React Developer",
      type: "Full-Time",
      description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
      location: "Boston, MA",
      salary: "$70K - $80K",
      company: {
        name: "NewTek Solutions",
        description: "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
        contactEmail: "contact@teksolutions.com",
        contactPhone: "555-555-5555"}
}
  const [jobAdded, setJobAdded] = useState({
    title: job.title,
    type: job.type,
    location: job.location,
    description: job.description,
    salary: job.salary,
    companyName: job.company.name,
    companyDescription: job.company.description,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone,
  })
console.log (jobAdded)
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
    console.log(newJobObj)

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
            <h2 className="text-3xl text-center font-semibold mb-6">Update Job</h2>

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
                value={jobAdded.title}
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
                value={jobAdded.description}
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
              <select
                id="salary"
                name="salary"
                value={jobAdded.salary}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
                required
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                value={jobAdded.location}
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
                value={jobAdded.companyName}
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
                value={jobAdded.companyDescription}
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
                value={jobAdded.contactEmail}
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
                value={jobAdded.contactPhone}
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
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditJobPage