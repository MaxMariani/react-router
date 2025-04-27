import { useParams } from "react-router-dom"

export default function ProductDetail() {

    const param = useParams();
    const productId = param.productId;

    return <h1>Product Details! {productId}</h1>
}