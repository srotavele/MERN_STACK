const boxData = [
    {
        color: 'red',
        x: '60px',
    },
    {
        color: 'blue',
        x: '43px',
    }
]

const Box = (props) => {
    return (
        <div style={{ backgroundColor: props.color, width: props.x, height: props.x, margin: '10px' }} />
    )
}

const App = () => {

    let [boxes, setBoxes] = React.useState(boxData)
    let [newColor, setNewColor] = React.useState('')
    let [newSize, setNewSize] = React.useState(100)

    const handleSubmit = (e) => {
        console.log(newColor)
        const newBox = {
            color: newColor,
            x: `${newSize}px`,
        }
        const newBoxes = boxes.concat(newBox);
        console.log(newBoxes)
        setNewColor('')
        setNewSize(100)
        setBoxes(newBoxes);
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={e => { handleSubmit(e) }}>
                <div>
                    color: <input
                        type="text"
                        value={newColor}
                        onChange={e => setNewColor(e.target.value)} />
                    <br />
                    size: <input
                        type="text"
                        value={newSize}
                        onChange={e => setNewSize(e.target.value)} />
                    <input type="submit" value="Add" />
                </div>

            </form>
            <div style={{ display: 'flex' }}>
                {boxes.map(b => (
                    <Box key={b.color} color={b.color} x={b.x} />
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
