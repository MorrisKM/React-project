import { useParams, useLoaderData, useNavigate, Link} from 'react-router';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { toast } from 'sonner';
import { deleteJob } from '../hooks/useFetch';
import { cashFormatter } from '../components/JobListing';



//default fn
const JobPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const job = useLoaderData();

  const handleDelete = async (jobId) => {
    toast(`Delete: ${job.title}`, {
      action: {
        label: 'Yes',
        onClick: () => {
          toast.success('Job deleted successfully')
          setTimeout(() => {
            deleteJob(jobId);
            navigate('/jobs')
          }, 500)
        }
      }
    })
  };

  
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className='mr-2'/> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="flex w-full gap-6">
            <main className='w-7/10'>
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                  {job.title}
                </h1>
                <div
                  className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                  <FaMapMarker className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"/>
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">
                {job.description}
                </p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4">{cashFormatter(job.salary)}/ Month</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside className='w-3/10'>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">
                  {job.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >Edit Job</Link>
                <button 
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export {JobPage as default}