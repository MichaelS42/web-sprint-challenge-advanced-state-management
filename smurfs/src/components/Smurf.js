import React from 'react';
import { connect } from 'react-redux';
import { fetchAll } from './Actions';


const Smurf = (props) => {
    return(
        <div>
            <h2>
                {props.smurf}
            </h2>


            <h3>

            </h3>


            <h3>

            </h3>
        </div>
    )

}
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


// const mapStateToProps = state => {
//   return {
//     loading: state.isFetching,
//     error: state.error
//   };
// }

// export default connect(
//   mapStateToProps,
//   { fetchAll }
// )(Smurf);