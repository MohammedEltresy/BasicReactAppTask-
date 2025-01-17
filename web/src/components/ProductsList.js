import { useEffect, useState } from "react"
import Product from "./product"

function ProductsList () {

    const api_url = "https://fakestoreapi.com/products";     
    const[products, setProducts ] = useState([]);



useEffect(()=>{

fetch(api_url).then((res) => res.json()).then((data)=>setProducts(data));

},[]);

    return (
<>

<h2 className="text-center p-3">
Our Factory Products
</h2>

<div className="container">
<div className="row">

{products.map((product)=>{
    return (
        
<div className="col-3" key={product.id}>
<Product product={product} />
</div>

    );
})}




</div>
</div>




</>

    )


}
export default  ProductsList