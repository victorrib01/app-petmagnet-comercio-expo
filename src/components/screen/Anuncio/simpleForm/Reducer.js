function Reducer(state,action){
    switch (action.type) {
        case 'UPDATE_URI':{
            return { 
                ...state,
                image: action.payload
            }
        }
    }
}
export default Reducer;