import React from 'react';

export default function SmurfCard({smurf}) {
  const {name, height} = smurf;

  return (
    <div>
      <p>{name}</p>
      <p>{height}</p>
    </div>
  )
}















// const SmurfCard = (props) => {
//     return(
//         <div>
//             <h2>
//                 {props.smurfs.name}
//             </h2>


//             <h3>
//                 {props.smurfs.age}
//             </h3>


//             <h3>
//                 {props.smurfs.height}
//             </h3>
//             {/* <button onClick={fetchAll}>fetch smurf</button> */}
//         </div>
//     )

// }

// export default SmurfCard




















// export default Smurf;
// const Smurf = (props) => {
//   const {loading, fetchAll, error} = props;

//   if (error) {
//     console.error(error);
//   }

//   if (loading) {
//     return <div>** fetchin smurf data **</div>
//   };
//   return <button onClick={fetchAll}>fetch smurf</button>
  
// };


// // const mapStateToProps = state => {
// //   return {
// //     loading: state.isFetching,
// //     error: state.error
// //   };
// // }

// const mapStateToProps = (state) => {
//     return{
//         smurfs: state.smurfs,
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }
// export default connect(
//   mapStateToProps,
//   { fetchAll }
// )(Smurf);