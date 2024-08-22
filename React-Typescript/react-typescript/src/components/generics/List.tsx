type listProps<T> = {
    list :T[]
    onClick : (item :T) => void
}

export const List =<T  extends {id : number,name : string} > ({list,onClick}:listProps<T>) => {

    return (
        <div>
            {list.map((item)=> {
                 return <li key={item.id} onClick={()=>onClick(item)}>{item.name}</li>
            })}
        </div>
    )

}