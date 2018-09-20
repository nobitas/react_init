export default (state = {test: '0.0'}, action) => {
	switch (action.type) {
		case 'TEST':
			return {
				...state,
				test: action.test
			}
			break;
		default:
			return state; 
	}
}