const reducer = (state, action) => {
	// state almacena el estado anterior y action almaceda la accion actual que llamo a la funcion dispatch.
	// console.log(state, action); //
	// state = {people: Array(0), isModalOpen: false, modalContent: "hello world"}
	// action = {type: "TESTING"}

	// Esta funcion reducer siempre debe retornar algun valor o lanzara error undefined.

	switch (action.type) {
		case 'ADD_ITEM':
			const newPeople = [...state.people, action.payload];
			return {
				...state,
				people: newPeople,
				isModalOpen: true,
				modalContent: 'Item added',
			};
		case 'NO_VALUE':
			return {
				...state,
				isModalOpen: true,
				modalContent: 'Insert some character',
			};
		case 'CLOSE_MODAL':
			return {
				...state,
				isModalOpen: false,
			};
		case 'REMOVE_ITEM':
			const id = action.payload
			const NewPeople = state.people.filter(
				(person) => person.id != id
			);
			return {
				...state,
				people: NewPeople,
				isModalOpen: true,
				modalContent: 'Item removed'
			};
		default:
			throw new Error('no matching action type');
	}
};

export default reducer