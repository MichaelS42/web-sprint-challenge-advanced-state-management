import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAll } from './Actions';
import {useSelector} from 'react-redux';
import SmurfCard from './SmurfCard';

// export default function SmurfList(){
//     const smurfs = useSelector(state => state.smurfs);

//     return (
//         <div>
//             {smurfs.map(smurf => <SmurfCard key={smurf._id} smurf={smurf} /> )}
//         </div>
//     )
// }









const SmurfList = (props) => {
    useEffect(() => {
        props.fetchAll()
    }, [])
    return(
        <div>
            {props.smurfs.map(smurf => (<SmurfCard smurf={smurf} />))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchAll})(SmurfList)




















// const facts = useSelector(state => state.facts);

// return (
//   <div>
//     {facts.map(fact => <Fact key={fact._id} fact={fact} />)}
//   </div>
// )
// const SmurfList = (props) => {
    //     useEffect(() => {
//         props.fetchAll()
//     }, [])
//     return(
//         <div>
//             {/* <Smurf /> */}
//             {/* {props.smurfs.map(smurf => (<Smurf smurf={smurf}/>))} */}
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return{
//         smurfs: state.smurfs,
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps, {fetchAll})(SmurfList)
