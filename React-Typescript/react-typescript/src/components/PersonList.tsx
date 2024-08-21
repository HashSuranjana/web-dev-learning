type personListType = {
    listing : 
        {
            first:string
            last :string
        }[],
        
    
}

export const PersonList = (props : personListType) => {
    return (
        <div>
           <hr />
           {props.listing.map(person =>(
            <h2>{person.first} {person.last}</h2>
           ))}
        </div>
    );
}