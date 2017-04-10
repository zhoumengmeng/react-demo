import { connect } from 'react-redux'
import Edit from '../component/edit'

const mapStateToProps = (state, ownProps) => ({
    list:state.list
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    edit: (obj,index) => {
        dispatch({type:"EDIT_MEMBER",newItem:obj,idx:index})
    }
})

const ContainEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(Edit)

export default ContainEdit
