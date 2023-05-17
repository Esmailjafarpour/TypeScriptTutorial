 import { Name } from "./Person.Type";

 type PersonListProps ={
     names : Name[]
}

export const PersonList = (props: PersonListProps) => {
     return(
          <div>
               {props.names.map(item =>(
                    <h1 key={item.firstName}>{item.firstName} {item.lastName}</h1>
               ))}
              
          </div>
     )
}