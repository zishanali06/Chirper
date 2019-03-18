import React from 'react';

class Chirps extends React.Component {
    constructor(props) {
        super(props);
        this.chirptext = props.chirptext;
        this.user = props.user;
        this.state = {
            addChirp: false
        }
    }

    componentDidMount(){
        this.setState({addChirp: true});
    }

    render() {
        console.log(this.state.addChirp)
        if(this.state.addChirp === true){
            return (
                <div>
                    <p>{`${this.user}: ${this.chirptext}`}</p>
                </div>
            )
        }
        return null;
    };
};

export default Chirps;