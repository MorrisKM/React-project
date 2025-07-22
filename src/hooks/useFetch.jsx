import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController();
    let db = async() => {
      try{
        let res = await fetch(url, {signal: abortCont.signal})
        if(!res.ok){
          throw new Error('could not fetch the data')
        }
        let dbData = await res.json();
        setData(dbData);
        setIsPending(false);
        setError(null)
      }catch(error) {
        if(error.name === 'AbortError') {
          console.log('fetch aborted')
        }else{
          setIsPending(false)
          setError(error.message)
        }
      }
    }
    db();

    return () => abortCont.abort()
  }, [url])


  return{data, isPending, error}
}
export default useFetch

const deleteJob = async (id) => {
  let url = `http://localhost:3000/jobs/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete job');
  }
  return true; // deletion succeeded
};

//updating jobs
const updateJob = async (obj) => {
  let url = `http://localhost:3000/jobs/${obj.id}`
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(obj)
  });
}

//updating jobs
const addJob = async (obj) => {
  let url = `http://localhost:3000/jobs`
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(obj)
  });
}

export { deleteJob, updateJob, addJob };


//data loader
const jobLoader = async({params}) => {
  const res = await fetch(`http://localhost:3000/jobs/${params.id}`);
  const data = await res.json();
  return data
}
export{jobLoader}