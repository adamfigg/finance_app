import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delData } from '../../Redux/Actions';
import "react-table/react-table.css";
import MaterialTable from 'material-table';

const mapStateToProps = (state) => ({
	data: state.data
})

const mapDispatchToProps = {
	delData
};

export class Table extends Component {
	render() {

		const { data } = this.props;

		const columns = [{
			title: 'Name',
			field: 'name'
		}, {
			title: `Cost`,
			field: `cost`,
			type: `currency`,
			customSort: (a, b) => parseFloat(a.cost) - parseFloat(b.cost)
		}, {
			title: 'Purchase Type',
			field: 'type',
		}]

		return < MaterialTable
			title="Expenses Table"
			columns={columns}
			data={data}
			editable={
				{
					onRowDelete: async oldData => {
						this.props.delData(oldData.id)
					}
				}
			}
		/>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);