import React, { useEffect, useState } from 'react'

const UserProfileLoader = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async (signal) => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users/3',
        { signal }
      )

      if (!res.ok) {
        throw new Error('Failed to fetch user data')
      }

      const userData = await res.json()
      setData(userData)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchData(controller.signal)

    return () => controller.abort()
  }, [])


  // this useEffect hook is responsible for fetching user data when the component mounts.
  // It creates an AbortController to manage the fetch request and prevent memory leaks if the component unmounts before the request completes.
  // The fetchData function is defined to handle the asynchronous data fetching logic, including error handling and state updates for loading and error states.
  // The component renders different UI elements based on the current state: a loading message while fetching, an error message with a retry button if an error occurs, and the user profile information once the data is successfully loaded.
  // This implementation ensures a robust and user-friendly experience when loading user profiles, with proper handling of asynchronous operations and potential errors.

  return (
    <div>
      <h1>User Profile Loader</h1>

      {loading && <h2>Loading... 🔃</h2>}

      {error && (
        <>
          <p>{error}</p>
          <button onClick={() => fetchData()}>Retry</button>
        </>
      )}

      {data && (
        <div>
          <h2>Name: {data.name}</h2>
          <h3>Email: {data.email}</h3>
          <h4>
            Address: {data.address.street}, {data.address.city}
          </h4>
        </div>
      )}
    </div>
  )
}

export default UserProfileLoader
