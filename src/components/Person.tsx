import { PersonProps } from "./Person.Type";

export const Person = (props : PersonProps) => {
     return( <h1>{props.name.firstName} {props.name.lastName} </h1>)
}