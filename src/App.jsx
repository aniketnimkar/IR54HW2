import './App.css'
import useFetch from "./useFetch"

export default function App() {
  const { data, loading, error, fetchData } = useFetch('https://api.adviceslip.com/advice');
  console.log(data)
  return (
    <main className='text-center mt-3'>
      <h1 className='mb-4'>Advice Slip API</h1>
      <butoon className="btn btn-primary mb-4" onClick={fetchData}>Get Advice</butoon>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured while making a fetch request.</p>}
       <p>{data && <strong>{data.slip.advice}</strong>}</p>
    </main>
  )
}
