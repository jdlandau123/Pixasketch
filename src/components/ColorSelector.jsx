import { useState } from "react";

export function ColorSelector(props) {
    const { changeSelectedColor, color } = props;

    const [isHover, setIsHover] = useState(false);

    const styles = {
        backgroundColor: color,
        border: isHover ? '1pt solid black' : 'transparent',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        cursor: isHover ? 'pointer' : null
    }

    return <div style={styles}
        onClick={() => changeSelectedColor(color)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}></div>
}

export default ColorSelector;
