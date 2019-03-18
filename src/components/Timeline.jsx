import React from 'react';
import InsertChirp from './InsertChirp';
import Chirps from './Chirps';



class Timeline extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className='row'>
                <h3 className="text-center col-md-12 mb-3">Timeline</h3>
                <div className='col-3'>
                    <InsertChirp />
                </div>
                <div className='col-6 border border-primary rounded'>
                    <Chirps chirptext="Run With The Wind" user="Zishan" />
                    <Chirps chirptext="Winter is Coming!" user="Zishan" />
                    <Chirps chirptext="In a galaxy far far away" user="Zishan" />
                </div>
                <div className='col-3'></div>
            </div>
        );
    }
};

export default Timeline;