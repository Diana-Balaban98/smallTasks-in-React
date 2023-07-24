import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter =  React.memo(({count}: {count: number}) => {
    console.log("Rendered NewMessagesCounter")

    return <div>{count}</div>
})

const Users =  React.memo(({users}: {users: string[]}) => {
    console.log("Rendered Users")
    const allUsers =  users.map((u, i) => <div key={i}>{u}</div>)

    return <div>{allUsers}</div>
})

export const Example1 = () => {
    console.log("Rendered Example1")

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Alena", "Pasha", "Artem"]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers(["Masha", ...users])}>addUser</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}