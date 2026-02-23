import React, { useEffect, useState } from 'react'

const GitHubUserSearch = () => {
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true);
    setError(null); 
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`)
      if(!res.ok){
        throw new Error('User not found')
      }else{
        const data = await res.json(); 
        setUserData(data);
        setLoading(false);
      }

      
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }finally{
      setUserName("");
      setLoading(false);
    }
  }

  useEffect(()=>{
    handleSubmit();
  },[])

  return (
    <div>
      <h1>GitHub User Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && (
        <>
          <p>{error}</p>
        </>
      )}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <p>Followers: {userData.followers}</p>
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  )
}

export default GitHubUserSearch
