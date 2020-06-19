import React, {useState, useEffect} from 'react'

import {Cards, Chart, CountryPicker} from './components' 
import styles from './App.module.css'
import {fetchData} from './api'


export default function App() {
    const [data, setData] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')
    useEffect(() => {
        fetchData().then(res=>setData(res.data))
    }, [])

    return (

        <div className = {styles.container}>
            <Cards data={data}/>
            <CountryPicker />
            <Chart />
        </div>
    )
}
