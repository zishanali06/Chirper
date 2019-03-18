// import React from 'react';

// class InsertChirp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             texttoinsert: "",
//         }
        
//     }

//     handleonChange(e) {
//         let newtext = e.target.value;
//         this.setState({texttoinsert: newtext});
//     }

//     handleonClick(){
//         console.log(this.state.texttoinsert);
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <h4>Insert New Chirps</h4>
//                 <input type="text" placeholder="Type Chirp Here" className="mt-3" onChange={(e) => this.handleonChange(e)} />
//                 <button onClick={this.handleonClick}>Click to Add</button>
//             </React.Fragment>
//         )
//     }
// }

// export default InsertChirp;