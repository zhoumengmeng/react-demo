import React from 'react';
import {Input, Select, Button, Table} from 'antd';

export default class List extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
			list:this.props.list
		}
		this.filterName = "";
		this.filterGender = 0;
		this.columns = [{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
		},{
			title: '性别',
			dataIndex: 'gender',
			key: 'gender',
			render:(text,record,index) => {
				if(text == 1){
					return "男"
				}else{
					return "女"
				}
			}
		},{
			title: '出生年月',
			dataIndex: 'birthday',
			key: 'birthday',
		},{
			title: '爱好',
			dataIndex: 'hobby',
			key: 'hobby',
			render:(text,record,index) => {
				return text.join(",");
			}
		},{
			title: '操作',
			dataIndex: 'operate',
			key: 'operate',
			render:(text,record,index) => {
				return (
					<div>
						<Button size="small" type="primary" onClick={this.editMember.bind(this,index)}>编辑</Button>&nbsp;&nbsp;&nbsp;&nbsp;
						<Button size="small" type="danger" onClick={this.deleteMember.bind(this,index)}>删除</Button>
					</div>
				)
			}
		}]
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			list:nextProps.list
		})
	}
	editMember(index) {
		 this.context.router.push(`/edit/${index}`)
	}
	deleteMember(index) {
		this.props.onChange(index);
	}
	changeName(e) {
		this.filterName = e.target.value;
	}
	selGender(value) {
		this.filterGender = value;
	}
	search() {
		let filterName = this.filterName.trim();
		let list = this.props.list.filter((item)=>{
			if(filterName){
				if(this.filterGender == 0){
					return item.name.indexOf(filterName) != -1
				}else{
					return item.name.indexOf(filterName) != -1 && item.gender == this.filterGender;			
				}
			}else{
				if(this.filterGender == 0){
					return item
				}else{
					return item.gender == this.filterGender;			
				}
			}			
		})
		this.setState({list:list})
	}
	render() {
		return (
			<div>
				<div>
					姓名：<Input type="text" style={{width:150}} onChange={this.changeName.bind(this)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					性别：<Select defaultValue="0" style={{ width: 120 }} onChange={this.selGender.bind(this)}>
						      <Select.Option value="1">男</Select.Option>
						      <Select.Option value="2">女</Select.Option>
						      <Select.Option value="0">无</Select.Option>
						    </Select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    <Button type="primary" onClick={this.search.bind(this)}>搜 索</Button>
				</div>
				<Table dataSource={this.state.list} columns={this.columns} className="mTop20" />
			</div>
		)
	}
}

List.contextTypes = {
    router: React.PropTypes.object.isRequired
}