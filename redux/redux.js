let data = {
	list:[{
		key:0,
		name:"aaa",
		gender:2,
		birthday:"1999-07-23",
		hobby:['篮球']
	},
	{
		key:1,
		name:"bbb",
		gender:2,
		birthday:"1999-10-02",
		hobby:['王者荣耀']
	}]
}

const counter = (state = data, action) => {
    switch (action.type) {
	  	case "DELETE_MEMBER":
	  		let list = state.list.filter((item,index)=>{
	  			return index != action.idx
	  		})
	  		return Object.assign({}, state, {list:list});
	  	case "ADD_MEMBER":
	  		return Object.assign({}, state, {list:[...state.list,action.newItem]});
	  	case "EDIT_MEMBER":
	  		let editList = state.list.map((item,index)=>{
	  			if(index == action.idx){
	  				return action.newItem
	  			}else{
	  				return item
	  			}
	  		})
	  		return Object.assign({}, state, {list:editList}); 
	    default:
	      return state;
  }
}

export default counter
