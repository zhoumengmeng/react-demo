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
		var list = state.list.slice();
    switch (action.type) {
	  	case "DELETE_MEMBER":
	  		list.splice(action.idx,1);
	  		return Object.assign({}, state, {list:list});
	  	case "ADD_MEMBER":
	  		return Object.assign({}, state, {list:[...state.list,action.newItem]});
	  	case "EDIT_MEMBER":
	  		list.splice(action.idx,1,action.newItem)
	  		return Object.assign({}, state, {list:list}); 
	    default:
	      return state;
  }
}

export default counter
