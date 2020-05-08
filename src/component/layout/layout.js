import React, {Component} from "react";
import Lists from '../lists/lists'
import classes from './layout.module.css'
import axios from 'axios'
class Layout extends Component {

    state = {
        texts: [],
        newText: "",
        editText:""
    };

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        axios.get('https://todo-list-3af2f.firebaseio.com/')
            .then(responds=> {
                    console.log(responds)
                }
            )
    }

    submitToDo = () => {
        if (this.state.newText === "")
            return;
        let lists = this.state.texts;
        lists.push(this.state.newText);
        this.setState({texts: lists, newText: ""});
        if(this.state.editText!=="")
            this.deleteState(this.state.editText);
        let notes = this.myRef.current;
        notes.value = "";
    };

    setList = (event) => {
        event.preventDefault();
        this.setState({newText: event.target.value});
    };
    deleteState = (myText) => {
        let oldState = this.state.texts;
        let newState = [];
        oldState.forEach(text => {
            if (myText !== text) {
                newState.push(text);
            }
        });
        this.setState({texts: newState});
    };
    editState = (myText) => {
        let note = this.myRef.current;
        note.value = myText;
        this.setState({editText:myText})
    };
    render() {
        return (
            <div className={classes.layout}>
                <div>
                    <textarea className={classes.input} ref={this.myRef} onChange={this.setList}/>
                    <button className={classes.submitBtn}
                            onClick={this.submitToDo}>Submit
                    </button>
                </div>
                <h1>{this.state.texts.length ?
                    this.state.texts.length === 1 ? this.state.texts.length + " TODO" :
                        this.state.texts.length + " TODOS" : ""} </h1>
                <Lists texts={this.state.texts} onDelete={this.deleteState}
                       onEdit={this.editState}
                />
            </div>
        )
    }
}

export default Layout