import { AutoComplete } from "antd";
import { useState } from "react";


export default function Search(){

    const [value, setValue]=useState('')

    const onSelect = (data) =>{


        setValue(data)


    }

    return (
        <>
        
        <h3>Search:</h3>
        <AutoComplete value={value} onChange={onSelect} placeholder={'Search by name'} style={{width:200}} />
        <h1>{value}</h1>
        </>

    );
}