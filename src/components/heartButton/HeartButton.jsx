import { useState } from "react";
import "./index.css";

function HeartButton() {
    const [isLight, setClickedBtn] = useState();
    let clickedBtn = false;
    return < img src="/heart.svg" alt="heart" className={`heart ${isLight ? 'clicked' : ''}`} onClick={() => setClickedBtn(!isLight)} />
}

export default HeartButton;

