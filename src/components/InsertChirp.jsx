import React from 'react';

class InsertChirp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            texttoinsert: "",
        }
    }

    handleonClick(){

    }

    render(){
        return(
            <React.Fragment>
            <h4>Insert New Chirps</h4>
            <input type="text" placeholder="Type Chirp Here" className="mt-3"/>
            <button onClick={this.handleonClick}>Click to Add</button>
            </React.Fragment>
        )
    }
}

export default InsertChirp;