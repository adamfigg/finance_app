import { GET_DATA, POST_DATA, DEL_DATA } from '../../Actions/types';

const initialState = [];

const dataReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_DATA:
			return payload;
		case POST_DATA:
			return payload;
		case DEL_DATA:
			return payload;
		default:
			return state;
	}
}

export default dataReducer;