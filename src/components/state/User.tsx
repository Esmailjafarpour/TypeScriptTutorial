import { useState } from 'react';

type AuthUser ={
     name : string ,
     email : string
}

export const User = () => {

     const [user , setUser] = useState<AuthUser | null >(null)
     const handleLogin = () => {
          setUser({
               name : "esmail",
               email : "esmailJafarpour29@gmail.com",
          })
     }
      
     const handleLogOut = () => {
          setUser(null)
     }

     return(
          <div>
               <button onClick={handleLogin}>Login</button>
               <button onClick={handleLogOut}>LogOut</button>
               <div>User name is {user?.name} </div>
               <div>User email is {user?.email} </div>
          </div>
     )
}