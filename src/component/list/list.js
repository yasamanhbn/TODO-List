import React from 'react'
import classes from './list.module.css'

const list = (props) => {
    return (
        <div className={classes.list}>
            <p className={classes.text}>{props.children}</p>
            <div className={classes.icon}>
                <i className="fa fa-edit"
                   onClick={()=>props.onEdit(props.children)}
                />
                <i className="fa fa-trash" aria-hidden="true"
                   onClick={()=>props.onDelete(props.children)}/>
            </div>
        </div>
    )
};

export default list;
