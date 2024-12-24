import { useContext, useEffect } from "react"
import { MyContext } from "../../App"
import { getProducts } from "../../reducers/products/productsFetchs"
import ProductsItem from "./ProductsItem"
import {useDispatch, useSelector} from "react-redux"

function ProductsList() {

    //let {stateProducts, dispatchProducts} = useContext(MyContext)
    let dispatch = useDispatch()
    let stateProducts = useSelector((state)=> state.products)

    useEffect(() => {
         dispatch(getProducts)
    }, [dispatch])

    return(
        <ul>
          {stateProducts.products.map((item) => <ProductsItem key={item.id} {...item}/>)}
        </ul>
    )
}

export default ProductsList