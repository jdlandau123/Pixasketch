export function NumberInput(props) {
    const { label, value, updateValue, max, min } = props;

    const incrementValue = () => {
        if (value < max) {
            updateValue(value + 4);
        }
    }

    const decrementValue = () => {
        if (value > min) {
            updateValue(value - 4);
        }
    }

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
        },
        valueContainer: {
            padding: '10px',
            border: '0.5pt solid grey',
            borderRadius: '8px'
        },
        arrowsContainer: {
            display: 'flex',
            flexDirection: 'column',
        }
    }

    return (
        <div style={styles.container}>
            <p>{label}</p>
            <div style={styles.valueContainer}>
                {value}
            </div>
            <div style={styles.arrowsContainer}>
                <img className="arrows" src="arrow-up.png" alt="pixel size up arrow" onClick={incrementValue} />
                <img className="arrows" src="down-arrow.png" alt="pixel size down arrow" onClick={decrementValue} />
            </div>
        </div>
    )
}

export default NumberInput;