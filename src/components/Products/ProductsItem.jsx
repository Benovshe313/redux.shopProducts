import { useContext } from "react"
import { MyContext } from "../../App"
import {useDispatch} from "react-redux"

function ProductsItem(props) {

    //let {dispatchProducts} = useContext(MyContext)
    let dispatch = useDispatch()

    return(
        <li>
           <p>{props.product_name}</p>
           <p>{props.product_description}</p>
           <p>{props.product_price}</p>
           <img src={props.url} alt={props.product_name} />
           <button onClick={() => dispatch({type:'ADD TO BAG', payload: props})}>ADD TO BAG</button>
        </li>
    )
}

export default ProductsItem