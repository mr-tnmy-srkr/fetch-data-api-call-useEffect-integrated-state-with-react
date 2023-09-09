// import "./Friends.css";
export default function Friend(friend) {
    // console.log(friend.friend.name)
    const{name,email} = friend.friend;
    // console.log(friend.friend)
  return (
    <div className="box">
        <h4>Name : {name}</h4>
        <p>Email : {email}</p>
    </div>
  )
}
