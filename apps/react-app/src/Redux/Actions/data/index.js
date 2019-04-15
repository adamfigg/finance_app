import { GET_DATA, POST_DATA, DEL_DATA } from './types';
import axios from 'axios';

export const getData = () => {
	return dispatch => {
		axios.get('http://localhost:4000/data').then((response) => {
			dispatch({ type: GET_DATA, payload: response.data.expenses })
		})
	}
}

export const postData = (formData) => {
	return dispatch => {
		axios(
			{
				method: 'post',
				url: `http://localhost:4000/data`,
				headers: {
					'Content-Type': `application/json`
				},
				data: {
					expenses: formData
				}
			}).then((response) => {
				dispatch({ type: POST_DATA, payload: response.data.expenses })
			})
	}
}

export const delData = (id) => {
	return dispatch => {
		axios.delete(`http://localhost:4000/data/${id}`).then((response) => {
			dispatch({ type: DEL_DATA, payload: response.data.expenses });
		})
	}
}