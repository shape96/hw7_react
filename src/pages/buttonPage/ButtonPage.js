import React, { useEffect, useState } from 'react';

function ButtonPage(props) {
    const [status, setStatus] = useState(false)

    useEffect(() => {
        console.log('clicked');
    },[status])
    return (
        <div>
            <button onClick={() => setStatus(true)}>On</button>
            <button onClick={() => setStatus(false)}>Off</button>
        </div>
    );
}

export default ButtonPage;