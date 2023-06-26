import axios  from 'axios'
import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material'
import Link from 'next/link';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Update() {
    const [colour, setColour] = useState();
    const [modelYear, setModelYear] = useState();
    const [manufacturer, setManufacturer] = useState();
    const [model, setModel] = useState();
    const [vin, setVin] = useState();
    const [trimLevel, setTrimLevel] = useState();
    const [purchaseAmount, setPurchaseAmount] = useState();
    const [saleAmount, setSaleAmount] = useState();
    const [purchaseDate, setPurchaseDate] = useState(new Date());
    const [saleDate, setSaleDate] = useState(new Date());

    async function CreateConfirm() {
        const purchDate = purchaseDate.getDate() + "-" + purchaseDate.getMonth() + "-" + purchaseDate.getFullYear();
        const salDate = saleAmount === null ? null : saleDate.getDate() + "-" + saleDate.getMonth() + "-" + saleDate.getFullYear()
        if(saleDate && saleAmount){
            await axios.post(`http://localhost:3000/api/vehicle/create?vin=${vin}&modelYear=${modelYear}&colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchDate}&purchaseAmount=${purchaseAmount}&saleDate=${salDate}&saleAmount=${saleAmount}`);
        }else{
            await axios.post(`http://localhost:3000/api/vehicle/create?vin=${vin}&modelYear=${modelYear}&colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchDate}&purchaseAmount=${purchaseAmount}`);
        }
    }
    return (
        <>                                                                                          
            <ul style={{ listStyle: 'none', paddingBottom: '50px'}}>
                <li style={{ paddingBottom: '10px'}}>
                    <TextField id="outlined-basic" label="Colour" variant="outlined" defaultValue={colour} onChange={(colour) => setColour(colour)} />
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    <TextField id="outlined-basic" label="Model Year" type="number" variant="outlined" defaultValue={modelYear} onChange={(modelYear) => setModelYear(modelYear)}/>
                </li>                               
                <li style={{ paddingBottom: '10px'}}>
                    <TextField id="outlined-basic" label="Manufacturer" variant="outlined" defaultValue={manufacturer} onChange={(manufacturer) => setManufacturer(manufacturer)}/>
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    <TextField id="outlined-basic" label="Model" variant="outlined" defaultValue={model} onChange={(model) => setModel(model)}/>
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    <TextField id="outlined-basic" label="VIN" variant="outlined" defaultValue={vin} onChange={(vin) => setVin(vin)}/>
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    <TextField id="outlined-basic" label="Trim Level" variant="outlined" defaultValue={trimLevel} onChange={(trimLevel) => setTrimLevel(trimLevel)}/>
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    Purchase Date: <DatePicker label="Purchase Date" selected={purchaseDate} onChange={(purchaseDate) => setPurchaseDate(purchaseDate)} />
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    <TextField
                        id="outlined-number"
                        label="Purchase Amount"
                        type="nucolourmber"
                        defaultValue={purchaseAmount}
                        onChange={(purchaseAmount) => setPurchaseAmount(purchaseAmount)}
                    />              
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    Sale Date <DatePicker label="Sale Date" selected={saleDate} onChange={(saleDate) => setSaleDate(saleDate)} />
                </li>
                <li style={{ paddingBottom: '10px'}}>
                    <TextField
                        id="outlined-number"
                        label="Sale Amount"
                        type="number"
                        defaultValue={saleAmount}
                        onChange={(saleAmount) => setSaleAmount(saleAmount)}
                    />                    
                </li>
            </ul>

            <Link href="/vehicles"><Button onClick={CreateConfirm}>Create</Button></Link>
        </>
    )    
}
