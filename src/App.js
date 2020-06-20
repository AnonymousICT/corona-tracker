import React ,{useState, useEffect} from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css';

import {fetchData} from './api'
import image from './components/Images/covid19.png'

export default function App() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    useEffect(()=>{
        const fetchedData = async () => {
            setData(await fetchData())
        }
        fetchedData()
    }, [])

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        setData(fetchedData)
        setCountry(country)
        console.log(fetchedData)
    }

    return (
        <div className = {styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
            <Cards data={data} country={country}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
}
