import React, {useState} from 'react';

const Boxes = props =>{
    const [listBox, setListBox] = useState([])
    return(
        <div>
        style={{display: 'flex'}}>
        {listbox.map(box,i)(
        <Box key={bx.color} color={bx.color} x={bx.x}/>
        ))}
        </div>
)
    












export default Boxes