import axios  from 'axios'
import Link from 'next/link';
import { Typography } from '@mui/material'


export default function VehiclesHome(props) {
    if(props) {
        return(
            <div>
                <Typography variant="h6" align="center" component="h6">Vehicles Home</Typography>
                <Link href="/vehicles/create">Create</Link>
                <ul>
                    { props.vehicles.map((vehicle, index) => {
                        return (
                            <li key={index}>
                                <ul style={{ listStyle: 'none', paddingBottom: '50px'}}>
                                    <li>
                                        <Typography variant="h6" align="left" component="h6">{vehicle.colour + " " + vehicle.modelYear + " " + vehicle.manufacturer + " " + vehicle.model}</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1" align="left" component="p">VIN: {vehicle.vin}</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1" align="left" component="p"> Trim Level: {vehicle.trimLevel} </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1" align="left" component="p"> Purchase Date: {vehicle.purchaseDate} </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body1" align="left" component="p"> Purchase Amount: {vehicle.purchaseAmount} </Typography>
                                    </li>
                                    {vehicle.saleDate &&
                                        <>
                                            <li>
                                                <Typography variant="body1" align="left" component="p"> Sale Date: {vehicle.saleDate} </Typography>
                                            </li>
                                            <li>
                                                <Typography variant="body1" align="left" component="p"> Sale Amount: {vehicle.saleAmount} </Typography>
                                            </li>
                                        </>       
                                    }
                                    <li>
                                        <Link href={{pathname: "/vehicles/view/", query: { id: vehicle.vehicleId}}}>View</Link> <Link href={{pathname: "/vehicles/update", query: {id: vehicle.vehicleId} }}>Update</Link> <Link href={{pathname: "/vehicles/delete", query: { id: vehicle.vehicleId }}}>Delete</Link>
                                    </li>
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }else{
        return(
            <Typography variant="h6" align="center" component="h6">Loading...</Typography>
        )
    }
}

export async function getServerSideProps() {
    
    const vehicles = await (axios.get('http://localhost:3000/api/vehicle/getall').then(res => res.data.vehicles));
    return { 
        props: { 
            vehicles: vehicles 
        }
    }
}