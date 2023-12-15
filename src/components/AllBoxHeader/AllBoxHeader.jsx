import React, { useState } from 'react'

import "./AllBoxHeader.css"
import { categoryHeader } from '../../datas'

function AllBoxHeader() {

    const [categorys, setCategorys] = useState(categoryHeader)
    const [status,setStatus]=useState(false)

    const clickHandler = (cat) => {
        categorys.map(category => {
            category.active = false
            if (category.id === cat.id) {
                cat.active = true
            }
        })
        setCategorys([...categorys])
    }

    const checkHandler=()=>{
        setStatus(prevStat=>!prevStat)
    }

    return (
        <>
            <div className="container">

                <div className="holder-header-all">

                    <div className='all-category-holder'>
                        {categorys.map(category => (
                            <button
                                key={category.id}
                                className={category.active ? 'category-btn active' : "category-btn"}
                                onClick={() => clickHandler(category)}>{category.name}</button>
                        ))}
                    </div>
                    <div className="round">
                        <input type="checkbox" id="all-header-box"  onClick={checkHandler} />
                        <label htmlFor="all-header-box" className='checkbox-header-in'></label>
                        <label htmlFor="all-header-box" className={status ?"checkbox-header-out white" :"checkbox-header-out"}>Available for Trading</label>
                    </div>
                </div>
                <div className="title-header">
                    <h2> BG Market Watch</h2>
                    <p>Find promising coins and great opportunities</p>
                </div>
            </div>
        </>
    )
}

export default AllBoxHeader