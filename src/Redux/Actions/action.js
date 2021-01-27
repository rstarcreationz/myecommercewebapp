import {ADD_TO_CART} from "./type";

export const AddtoCart = (data)=>{
    console.log("action", data)
    return{
        type: ADD_TO_CART,
        data:data
    };
}



// import {BUY_BOOK} from "./type";

// export const buyBook = (number) =>{
//     return{
//         type:BUY_BOOK,
//         paylaod: number
//     }
// }