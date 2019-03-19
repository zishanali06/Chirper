import React from 'react';

const Chirps = (props) => {
    //ES6 descruturing an object
    const { user, chirptext } = props.chirp;

    return (
        <div className="text-left">
            <p className="border border-secondary rounded"><img src="http://joshi-ma.net/wp-content/uploads/e034.gif" alt=""/>{`  ${user}: ${chirptext}`}</p>
        </div>
    );
}

export default Chirps;

// class Chirps extends React.Component {
//     constructor(props) {
//         super(props);
//         this.chirptext = props.chirptext;
//         this.user = 'Anonymous';
//         this.user = props.user;
//         this.state = {
//             addChirp: false
//         }
//     }

//     componentDidMount(){
//         this.setState({addChirp: true});
//     }

//     render() {
//         if(this.state.addChirp === true){
//             return (
//                 <div>
//                     <p>{`${this.user}: ${this.chirptext}`}</p>
//                 </div>
//             )
//         }
//         return null;
//     };
// };

// export default Chirps;