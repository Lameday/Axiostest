import React, { useState } from 'react'
import axios from 'axios'
import * as AxiosLogger from 'axios-logger';

let log = [[],[]];
const test = true

if(test) {
  axios.interceptors.request.use( req => {if(req) {
    log[0].push(req)
    return req
  } else {
    log[0].push('Request Fail')
    return req
  }})
  axios.interceptors.response.use( res => {if(res) {
    log[1].push(res)
    return res
  } else {
    log[1].push(res)
    return res
  }})
}

export default function App() {
    const [users, setUsers] = useState([])
    
    const handleClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
