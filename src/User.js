function User(props){
    console.log(props)
    return(
        <div>
            <h1>Hello {props.names}</h1>
            <h1>Email: {props.email} {props.address}</h1>
     
        </div>
    )
}
export default User