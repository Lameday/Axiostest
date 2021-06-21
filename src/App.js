import React, { useState } from 'react'
import axios from 'axios'

let log = [[],[]];
if(true) {
  axios.interceptors.request.use( req => {
    log[0].push(req)
    return req
  })

  axios.interceptors.response.use( res => {
    log[1].push(res)
    return res
  })
}

export default function App() {
    const [users, setUsers] = useState([])
    
    const handleClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/ddd')
        .then((response) => setUsers(response.data))
        .catch((err) => console.log(err))
        console.log(log)
    }

      return (
          <div>
              <button onClick={handleClick}> Fetch </button>
              {users.map((user) => {return (<h2 key={user.id}>{user.name} {user.email}</h2>);
              })}
          </div>
        )
      }
