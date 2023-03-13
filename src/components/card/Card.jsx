import "./index.css";
import Button from "../button/Button";
import HeartButton from "../heartButton/HeartButton";

function Card({ src, title, text, price, oldPrice, hasSale, canBuy }) {
    return <div className="card">
        <img src={src} alt="photo" />
        <div className="heart-sale">
            {hasSale && <img src="/Sale.png" alt="Sale" className="sale" />}
            <HeartButton className={'heart move'}></HeartButton>
        </div>
        <div className="title">{title}</div>
        <div className="text">{text}</div>
        <div className="allPrice">
        <div className="price">$ {price}</div>
        {hasSale && <div className="old-price">$ {oldPrice}</div>}
        </div>
        <Button color="black" isLink={true}>LEARN MORE</Button>
        {canBuy && <Button color="white" isLink={true}>BUY NOW</Button>}
    </div>
}

export default Card;