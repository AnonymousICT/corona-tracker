import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

export default function CountryPicker({ }) {
    const [countriesArray, setCountriesArray] = useState([])

    useEffect(()=>{
        const fetchAPI = async() => {
            setCountriesArray(await fetchCountries())
        }

        fetchAPI()
    }, [setCountriesArray])


    return (
        <FormControl className="styles.formControl">
            <NativeSelect>
                <option value="global">Global</option>
                {countriesArray.map((country, i) => <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}