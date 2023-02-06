import React from "react";

export function Grid(props) {
    const { canvasWidth, canvasHeight, pixelSize, selectedColor } = props;

    const gridCells = [];
    for (let i = 0; i < canvasWidth ** 2; i++) {
        gridCells.push(React.createElement('div', {key: i, style: {border: '1pt solid rgba(0, 0, 0, 0.2)'}}));
    }

    const gridStyles = {
        display: 'grid',
        textAlign: 'center',
        width: canvasWidth * pixelSize,
        height: canvasHeight * pixelSize,
        pointerEvents: 'none',
        position: 'absolute',
        gridTemplateColumns: `repeat(${canvasWidth}, 1fr)`,
        gridTemplateRows: `repeat(${canvasHeight}, 1fr)`
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={gridStyles}>
                {gridCells}
            </div>
        </div>
    )
}

export default Grid;
