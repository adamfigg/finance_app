import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './../Redux/Actions';
import Table from './Table/Table';
import Form from './Form/Form';
import {
	Typography,
	Toolbar,
	AppBar,
	Grid
} from '@material-ui/core';
import styled from 'styled-components'

const MainGrid = styled(Grid)`
    height: 80vh;
`

const mapDispatchToProps = { getData };

class App extends Component {

	componentDidMount = () => {
		this.props.getData()
	}

	render() {
		return (
			<div>
				<AppBar position='static' color='primary'>
					<Toolbar>
						<Typography variant='h6' color='inherit'>The Dosh Board</Typography>
					</Toolbar>
				</AppBar>
				<MainGrid container direction={`row`} justify={`space-around`} alignItems={`center`}>
					<Grid item xs={8}>
						<Table />
					</Grid>
					<Grid item xs={8}>
						<Form />
					</Grid>
				</MainGrid>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(App);