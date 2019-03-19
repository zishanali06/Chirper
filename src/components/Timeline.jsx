import React from 'react';
import Chirps from './Chirps';



class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chirpsArray: [],
            chirptext: "",
            user: "",
            reuse: false
        }
    }

    componentDidMount() {
        let chirpsArray = [
            {
                user: "Zishan",
                chirptext: "Run With The Wind"
            },
            {
                user: "Zishan",
                chirptext: "Winter is Coming!"
            },
            {
                user: "Zishan",
                chirptext: "In a galaxy far far away"
            },
        ];

        // this.state.chirpsArray = chirpsArray; NONONONO bad

        this.setState({ chirpsArray: chirpsArray });

    }

    handleonClick = e => {

        e.preventDefault();

        let chirp = {
            user: this.state.user,
            chirptext: this.state.chirptext
        };

        // this.state.chirpsArray.push(chirp); BAD nonononono

        this.setState({
            chirpsArray: [chirp, ...this.state.chirpsArray],
            chirptext: ""
        });

        if(this.state.reuse === true){
            this.setState({ user: chirp.user })
        } else {
            this.setState({ user: "" })
        };
    }

    handleCheckbox = e => {
        if(this.state.reuse === true){
            this.setState({ reuse: false })
        } else {
            this.setState({ reuse: true })
        };
    };

    render() {
        return (
            <div className='row'>
                <h3 className="text-center col-md-12 mb-3">Timeline</h3>
                <div className='col-3'>
                    <h4>Insert New Chirps</h4>
                    <form className="form-group p-3 border border-info rounded">
                        <input
                            type="text"
                            placeholder="Type Chirp Here"
                            className="my-3 form-control"
                            value={this.state.chirptext}
                            onChange={e => this.setState({ chirptext: e.target.value })} />
                        <input
                            type="text"
                            placeholder="Type Username Here"
                            className="my-3 form-control"
                            value={this.state.user}
                            onChange={e => this.setState({ user: e.target.value })} />
                        <label>Check for same User on next Chirp
                        <input type="checkbox" name="reuse" checked={this.state.reuse} onChange={this.handleCheckbox}/>
                        </label>
                        <br/>
                        <button className="btn btn-outline-primary btn-sm" onClick={this.handleonClick}>Click to Add</button>
                    </form>
                </div>
                <div className='col-6 border border-primary rounded'>
                    <ul>
                        {this.state.chirpsArray.map((chirp, index) => {
                            return <Chirps key={index} chirp={chirp} />
                        })}
                    </ul>
                </div>
                <div className='col-3'></div>
            </div>
        );
    }
};

export default Timeline;