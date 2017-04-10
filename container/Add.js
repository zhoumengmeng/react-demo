import { connect } from 'react-redux'
import Add from '../component/add'

const mapStateToProps = (state, ownProps) => ({
    list:state.list
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    add: (obj) => {
        dispatch({type:"ADD_MEMBER",newItem:obj})
    }
})

const ContainAdd = connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)

export default ContainAdd
