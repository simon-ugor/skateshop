
import Image from "next/image"

const Product = (props) => {
    return (
        <div id={props.id} className="product-main-div">
            <Image src={props.img} alt="Deck1" width="250px" height="300px" />
            <h2 className="product-name">{props.name}</h2>
            <h2>{props.price}</h2>
            <div className="underline-div"></div>
        </div>
    )
}

export default Product