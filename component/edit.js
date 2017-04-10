import React from 'react';
import {Input, Radio, Checkbox , DatePicker, Button, message } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

export default class Edit extends React.Component {
	constructor(props,context) {
		super(props,context);
		if(this.props.isAdd){
			this.state = {
				key:this.props.list.length,
				hobby:['篮球'],
				birthday:'2000-01-01',
				name:''
			}
		}else{
			let id = parseInt(this.props.params.id);
			this.state = this.props.list[id];
		}
		this.hobbies = ['篮球','足球','王者荣耀'];
	}
	changeHobby(value) {
		this.setState({hobby:value});
	}
	changeName(e) {
		this.setState({name:e.target.value});
	}
	changeGender(e) {
		this.setState({gender:e.target.value});
	}
	selBirthday(date,dateString) {
		this.setState({birthday:dateString});
	}
	addMember() {
		this.props.add(this.state);
	}
	editMember() {
		this.props.edit(this.state,parseInt(this.props.params.id));
	}
	validateForm() {
		if(!this.state.name.trim()){
			message.error('姓名不能为空');
			return false;
		}
		if(!this.state.gender){
			message.error('请选择一个性别');
			return false;
		}
		if(!this.state.birthday){
			message.error('请输入您的生日');
			return false;
		}
		if(this.state.hobby.length < 1){
			message.error('请至少选择一个爱好');
			return false;
		}
		return true;
	}
	handleSubmit() {
		if(!this.validateForm()){
			return;
		}
		if(this.props.isAdd){
			this.addMember();
		}else{
			this.editMember();
		}
		this.context.router.push('/list');
	}
	render() {
		let birthday = moment(this.state.birthday,'YYYY-MM-DD');
		return (
			<div>
				<ul className="info-form">
					<li>
						<label className="label"><span className="red">*</span>姓名：</label>
						<Input type="text" className="text" value={this.state.name} onChange={this.changeName.bind(this)} />
					</li>
					<li>
						<label className="label"><span className="red">*</span>性别：</label>
						<RadioGroup value={this.state.gender} onChange={this.changeGender.bind(this)}>
			        <Radio value={1}>男</Radio>
			        <Radio value={2}>女</Radio>
			      </RadioGroup>
					</li>
					<li>
						<label className="label"><span className="red">*</span>生日：</label>
						<DatePicker value={birthday} onChange={this.selBirthday.bind(this)} />
					</li>
					<li>
						<label className="label"><span className="red">*</span>兴趣：</label>
						<CheckboxGroup options={this.hobbies} value={this.state.hobby} onChange={this.changeHobby.bind(this)} className="inline" />
					</li>
				</ul>
				<div className="btn-group">

					<Button onClick={this.handleSubmit.bind(this)}>{this.props.isAdd?'新增':'修改'}</Button>
				</div>
			</div>
		)
	}
}

Edit.contextTypes = {
    router: React.PropTypes.object.isRequired
}
