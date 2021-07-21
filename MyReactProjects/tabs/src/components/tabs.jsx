import React from 'react';



const Tabs = props =>{
    const {tabs} = props
    const {idx, setIdx} = props

    const handleChange = (e,i) => {
        setIdx(i)
    console.log(i)
    console.log(idx)
    }




    return(
    <div className="">{
        tabs.map((tab,i) => {
            return <button onClick={ (e) => handleChange(e,i) }key={i}>{tab.title}</button>
        })
    }
        <div className="div">
            {
            tabs[idx].content
            }
        </div>
    </div>
    )
}










export default Tabs