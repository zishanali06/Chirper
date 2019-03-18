import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center col-md-12">Chirper</h1>
                </div>
                <div className='row'>
                    <h3 className="text-center col-md-12">Timeline</h3>
                </div>
            </div>
        )

    }
}

export default App;