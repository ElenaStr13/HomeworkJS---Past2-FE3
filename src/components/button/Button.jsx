import "./index.css";

function Button({children, color, isLink}) {
    if (isLink) {
        return <a href='#' className = {`${color} button`}>{children}</a>
    }
    return <div className = {`${color} button`}>{children}</div>
}

export default Button;