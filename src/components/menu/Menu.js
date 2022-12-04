import React from 'react';
import{NavLink} from 'react-router-dom'

function Menu(props) {
    return (
        <ul>
        <li>
            <NavLink to='/'
            className={({isActive}) => isActive &&"active"}
            >users</NavLink>
        </li>
            <li>
                <NavLink to='/button'
                className={({isActive}) => isActive &&"active"}
                >button</NavLink>
            </li>
            <li>
                <NavLink to='/button2'
                className={({isActive}) => isActive &&"active"}
                >postPage</NavLink>
            </li>
        </ul>
    );
}

export default Menu;