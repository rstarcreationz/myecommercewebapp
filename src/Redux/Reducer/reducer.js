import {ADD_TO_CART} from "../Actions/type"

const initialstate = {
    cardData:[]
}

export default function cardItem(state=[], action)
    {
        switch (action.type) {
            case ADD_TO_CART:
                console.log("reducer",action)
                return[
                    ...state,
                    {cardData: action.data}
                ]
                default:
                    return state
        }
    }




// import {BUY_BOOK} from "../Actions/type";

// const initialState ={
// numberofbooks:10
// }

// const reducer = (state=initialState, action) =>{
//     switch (action.type) {
//         case BUY_BOOK: return{
//             ...state,
//             numberofbooks:state.numberofbooks-action.payload
//         }
//         default: return state;
//     }
// }

// export default reducer;