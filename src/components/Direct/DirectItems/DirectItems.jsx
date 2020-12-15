import React from 'react'
import { NavLink } from 'react-router-dom';
import s from '../Direct.module.css'

function DirectItems(props) {
    let path = "/direct/" + props.id;
    return (
        <div>
            <NavLink activeClassName={s.activeLink} to={path} title={props.name}>
                <div className={s.userLine}>
                    <img className={s.userImages} src={props.imageUrl} />
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DirectItems
