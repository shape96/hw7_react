import React, { useEffect, useState } from 'react';
import User from '../../components/user/User';

function UsersPage(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)

    const getUsers = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
            })
    }

    useEffect(() => {
        getUsers()
    }, [status])


    return (
        <>
            <h1>Users</h1>
            <button onClick={() =>setStatus (!status)}>reload</button>
            {
                loading === true 
                    ?
                    <div>Загрузка</div>
                    :
                    users.map(user => <User info={user}/>)
            }
        </>
    );
}

export default UsersPage;