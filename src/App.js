import Card from './components/card/Card';
import './App.css';
import cards from './components/product/product';

function App() {
   
    return <div className='page'>
        {cards.map((item, index) => <Card key={index}
            src={item.photo}
            title={item.title}
            text={item.text}
            price={item.price}
            hasSale={item.hasSale}
            canBuy= {item.canBuy}
            oldPrice= {item.oldPrice}
        ></Card>)}    

    </div>
}
export default App;

