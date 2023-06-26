import axios  from 'axios'
import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material'
import Link from 'next/link';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Update(props) {
    const [colour, setColour] = useState(props.vehicle.colour);
    const [modelYear, setModelYear] = useState(props.vehicle.modelYear);
    const [manufacturer, setManufacturer] = useState(props.vehicle.manufacturer);
    const [model, setModel] = useState(props.vehicle.model);
    const [vin, setVin] = useState(props.vehicle.vin);
    const [trimLevel, setTrimLevel] = useState(props.vehicle.trimLevel);
    const [purchaseAmount, setPurchaseAmount] = useState(props.vehicle.purchaseAmount);
    const [saleAmount, setSaleAmount] = useState(props.vehicle.saleAmount);
    const [purchaseDate, setPurchaseDate] = useState(new Date(props.vehicle.purchaseDate));
    const [saleDate, setSaleDate] = useState(props.vehicle.saleDate === null ? new Date() : new Date(props.vehicle.saleDate));

    async function UpdateAll() {
        const purchDate = purchaseDate.getDate() + "-" + purchaseDate.getMonth() + "-" + purchaseDate.getFullYear();
        const salDate = saleAmount === null ? "" : saleDate.getDate() + "-" + saleDate.getMonth() + "-" + saleDate.getFullYear()
        if(saleDate && saleAmount){
            await axios.post(`http://localhost:3000/api/vehicle/update?vehicleId=${props.vehicle.vehicleId}&vin=${vin}&modelYear=${modelYear}&colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchDate}&purchaseAmount=${purchaseAmount}&saleDate=${salDate}&saleAmount=${saleAmount}`);
        }else{
            await axios.post(`http://localhost:3000/api/vehicle/update?vehicleId=${props.vehicle.vehicleId}&vin=${vin}&modelYear=${modelYear}&colour=${colour}&manufacturer=${manufacturer}&model=${model}&trimLevel=${trimLevel}&purchaseDate=${purchDate}&purchaseAmount=${purchaseAmount}`);
        }    
    }
    if(props) {
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

                <Link href="/vehicles"><Button onClick={UpdateAll}>Update</Button></Link>
            </>
        )
    }else {
        return(
            <Typography variant="h6" align="center" component="h6">Loading...</Typography>
        )
    }
    
}
// 
export async function getServerSideProps(context) {

    const{ id }= context.query;
    
    const vehicleData = await axios.get(`http://localhost:3000/api/vehicle/get?id=${id}`).then(res => res.data.vehicle);
    return {
        props: {
            vehicle: vehicleData
        }
    };
}
