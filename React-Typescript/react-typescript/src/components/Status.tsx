type statsProp = {

    status :'Loading' | 'Success' | 'Error'
}

export const Status = (props :statsProp) => {

    let stat
    
    if (props.status.toLowerCase() === 'loading') {
        stat =  'Loading'
    } else if (props.status.toLowerCase() === 'success') {
        stat = 'success' ;
    } else if (props.status.toLowerCase() === 'error') {
        stat = 'error'
    }

    return (
        <div>
            <h2>Status : {stat}</h2>
        </div>
    )

}