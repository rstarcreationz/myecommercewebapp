import React, { useState } from "react";
import {connect} from "react-redux";
import {buyBook} from "../Redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Book = (props) =>{
    const [number, setNumber] = useState(1);
    return(
        <div className="container mt-5">
            <h3>Number of books {props.numberofbooks} </h3>
            <input type="text" value={number} onChange={event=>setNumber(event.target.value)}/>
            <button type="button" className="btn btn-outline-primary ml-2" onClick={()=>props.buyBook(number)}>click {number} </button>
        </div>
    );
}

const mapStatetoProps = (state) =>{
    return{
        numberofbooks:state.numberofbooks
    }
}

const mapDispatchtoProps = (dispatch) =>{
    return{
        buyBook:function (number){
            dispatch(buyBook(number));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps) (Book);



// import React from "react";
// import {useSelector,useDispatch} from "react-redux";
// import {buyBook} from "../Redux";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const Book = () =>{
//     const numberofbooks = useSelector(state=>state.numberofbooks);
//     const dispatch = useDispatch();
//     return(
//         <div className="container mt-5">
//             <h3>Number of books {numberofbooks} </h3>
//             <button type="button" className="btn btn-outline-primary" onClick={()=>dispatch(buyBook())}>click</button>
//         </div>
//     );
// }

// export default Book;