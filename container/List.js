import { connect } from 'react-redux'
import List from '../component/list'

const mapStateToProps = (state, ownProps) => ({
    list:state.list
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (index) => {
        dispatch({type:"DELETE_MEMBER",idx:index})
    }
})

const ContainList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

export default ContainList
