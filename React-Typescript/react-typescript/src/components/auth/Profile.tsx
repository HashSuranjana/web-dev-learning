export type profileProps = {
    name :string
}
export const Profile = ({name}:profileProps) => {
    return (
        <div>Private Profile Component. Name is {name}</div>
    )
}