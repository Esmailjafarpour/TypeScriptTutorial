type PersonListProps ={
     names : {
          firstName:string
          lastName:string
     }[]
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