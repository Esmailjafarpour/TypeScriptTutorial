import { useContext } from 'react';
import { UserContext } from './UserContext';



export const User = () => {

     const userContext = useContext(UserContext);

     const handleLogin = () => {
          //  if(userContext){
          //      userContext.setUser({
          //           name : "esmail",
          //           email : "esmailjafarpour@gmail.com"
          //      })
          // }

          // //With this method, there is no need to check null in user
          // //export const UserContext = createContext({} as UserContextType);

          userContext.setUser({
               name : "esmail",
               email : "esmailjafarpour@gmail.com"
          })

     }

     const handleLogOut = () => {
          // if(userContext){
          //      userContext.setUser(null)
          // }

          // //With this method, there is no need to check null in user
          // //export const UserContext = createContext({} as UserContextType);

          userContext.setUser(null)

     }

     return(
          <div>
               <button onClick={handleLogin}>Login</button>
               <button onClick={handleLogOut}>LogOut</button>

               {/* <div>User name is {userContext?.user?.name} </div> */}
               {/* <div>User email is {userContext?.user?.email} </div> */}

               //With this method, there is no need to check null in user
               //export const UserContext = createContext({} as UserContextType);

               <div>User name is {userContext.user?.name} </div>
               <div>User email is {userContext.user?.email} </div>
          </div>
     )
}