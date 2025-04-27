import { useParams, Link } from "react-router-dom"

export default function ProductDetail() {

    const param = useParams();
    const productId = param.productId;

    return (
        <>
            <h1>Product Details!</h1>
            <p>{productId}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </>)
}