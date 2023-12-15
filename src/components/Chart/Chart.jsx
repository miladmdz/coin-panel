import { Tooltip } from 'bootstrap';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { dataChart } from '../../datas';

function Chart({dataChart}) {

    return (
    <LineChart width={70} height={50} data={dataChart}>
    <Line type="monotone" dataKey="uv" stroke="green" dot={false}/>
  </LineChart>
  )
}

export default Chart