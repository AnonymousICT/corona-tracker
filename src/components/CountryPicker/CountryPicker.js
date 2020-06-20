import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

export default function CountryPicker() {
    const [countriesArray, setCountriesArray] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountriesArray(await fetchCountries())
        }
        fetchAPI();
    },[])
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value='global'>Global</option>
                {countriesArray.map((country, i)=> 
                    <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
