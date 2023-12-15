import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";


import "./AllList.css"
import Chart from '../Chart/Chart';
import { dataChart } from '../../datas';



function AllList() {



    const [logo, setLogo] = useState()
    const [dataList, setDataList] = useState(dataChart)
    const [isPending, setIsPending] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [paginatedData, setPaginatedData] = useState([])

    let pagesNumber
    let pageSize = 5
  

    const pageCount = Math.ceil(dataList.length / pageSize)
    pagesNumber = Array.from(Array(pageCount).keys())


    const logoColorHandler = (e) => {
        e.target.classList.toggle("gold")
    }
    const changePageHandler=(newPage)=>{
        setCurrentPage(newPage)
    }

    useEffect(()=>{
        let indexEnd = pageSize * currentPage
        let indexStart = indexEnd - pageSize
        let allShowData=dataChart.slice(indexStart,indexEnd)
        setPaginatedData(allShowData)
    },[currentPage])

    useEffect(() => {

        fetch(`https://api.bgcrypto.io/logo/sol.png`)
            .then(res => {
                setLogo(res.url)
                setIsPending(false)
            })

            let indexEnd = pageSize * currentPage
            let indexStart = indexEnd - pageSize
            let allShowData=dataChart.slice(indexStart,indexEnd)
            setPaginatedData(allShowData)
    }, [])

    return (
        <>
            {isPending ? (<p className='loading'> Loading...</p>) : (
                <div className="container">

                    <table className="list">
                        <thead>
                            <tr className='tr-heade'>
                                <th className='th-heade'>Product</th>
                                <th className='th-heade'>Price</th>
                                <th className='th-heade'>24h Changes</th>
                                <th className='th-heade'>Market</th>
                                <th className='th-heade'>24 baseVolume</th>
                                <th className='th-heade'>quoteVolume</th>
                                <th className='th-heade'>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {paginatedData.map(item => (
                                <tr key={item.id} className='tr-body'>
                                    <td className='td-body'>
                                        <FaStar className='logo-star' onClick={(e) => logoColorHandler(e)} />
                                        <img src={logo} alt="" className='logo-list' />
                                        <p className='name-coin'>{item.name}</p>
                                    </td>
                                    <td className='td-body'><p className='name-coin'>{item.price}</p></td>
                                    <td className={item.changes > 0 ? "td-body green" : "td-body red"}><p className='name-coin'>{item.changes}%</p></td>
                                    <td className='td-body'><Chart dataChart={item.market} /></td>
                                    <td className='td-body'><p className='name-coin'>{item.base}</p></td>
                                    <td className='td-body'><p className='name-coin'>{item.quote}</p></td>
                                    <td className={item.action ? "td-body green" : "td-body red"} style={{ fontWeight: "bold" }}><p className='name-coin'>{item.action ? "Trade" : "Untrade"}</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='pagination'>
                        {pagesNumber.map((num) => (
                            <div 
                            key={num+1} 
                            className={ num + 1 === currentPage ? " holder-number active" : "holder-number"}
                            onClick={()=>changePageHandler(num+1)}
                            >
                                <p className='number-page'>{num+1}</p>
                            </div>
                        ))}


                    </div>
                </div>
            )}
        </>
    )
}

export default AllList