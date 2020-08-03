import React, {useEffect} from 'react';
import Smurf from './Smurf'
import { connect } from 'react-redux';
import { fetchAll } from './Actions';

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchAll()
    }, [])
    return(
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchAll})(SmurfList)
