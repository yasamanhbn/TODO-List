import React from "react";
import List from '../list/list'
const lists=(props)=>{
    let lists;
     lists = props.texts.map(ctr=>{
        return <List key={ctr} onDelete={props.onDelete} onEdit={props.onEdit}>{ctr}</List>
    });
    return(
        <div>
            {lists}
        </div>
    )
};

export default lists;