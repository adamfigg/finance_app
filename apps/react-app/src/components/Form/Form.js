import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postData } from './../../Redux/Actions';
import NumberFormat from 'react-number-format';
import {
	FormControl,
	InputLabel,
	Input,
	MenuItem,
	FormGroup,
	Select,
	Button
} from '@material-ui/core';

function NumberFormatCustom(props) {
	const { inputRef, onChange, ...other } = props

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={values => {
				onChange({
					target: {
						value: values.value
					}
				})
			}}
			thousandSeparator
			prefix='$'
		/>
	)
}

export class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				name: ``,
				cost: ``,
				type: ``,
			},
			errors: {
				name: 'false',
				cost: 'false',
			}
		}
	}

	handleChange = keys => ({
		target: { value }
	}) => {
		this.setState({
			form: {
				...this.state.form,
				[keys]: value
			}
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.postData(this.state.form);
		this.setState({
			form: {
				name: ``,
				cost: ``,
				type: ``
			}
		})
	}

	render() {

		const { form } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<FormGroup>

					<FormControl>
						<InputLabel htmlFor={`name-input`}>Expense Name</InputLabel>
						<Input id={`name-input`} onChange={this.handleChange(`name`)} value={form.name} />
					</FormControl>

					<FormControl>
						<InputLabel htmlFor={`cost-input`}>Cost</InputLabel>
						<Input
							id={`cost-input`}
							onChange={this.handleChange(`cost`)}
							value={form.cost}
							inputComponent={NumberFormatCustom}
						/>
					</FormControl>

					<FormControl>
						<InputLabel htmlFor={`type-input`}>Type</InputLabel>
						<Select inputProps={{ id: `type-input` }} onChange={this.handleChange(`type`)} value={form.type}>
							<MenuItem value={`Living`}>Living</MenuItem>
							<MenuItem value={`Food`}>Food</MenuItem>
							<MenuItem value={`Entertainment`}>Entertainment</MenuItem>
							<MenuItem value={`Bills`}>Bills</MenuItem>
							<MenuItem value={`Other`}>Other</MenuItem>
						</Select>
					</FormControl>

					<Button type={`submit`}>Add Expense</Button>

				</FormGroup>

			</form>
		)
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
	postData
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
