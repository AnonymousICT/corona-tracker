import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

export default function CountryPicker({ handleCountryChange }) {
    const [countriesArray, setCountriesArray] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountriesArray(await fetchCountries())
        }
        fetchAPI();
    },[])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {countriesArray.map((country, i)=> 
                    <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
