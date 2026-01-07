import React from 'react'
interface User {
  id: number;
  name:string;
  email:string;
}

const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users : User[] = await res.json();

  return (
    <div>
      <h1>UsersPage</h1>
      <table className='table text-shadow-blue-300 border-2 m-5 w-3xl '>
        <thead>
          <tr className='text-blue-400 text-center text-xl md:text-3xl font-bold'>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="text-center">
        {users.map(user=><tr key={user.id}> 
        <th>{user.name}</th>
        <th>{user.email}</th>
            
        </tr>)}
        </tbody>
     
      </table>

    </div>
  )
}

export default UsersPage