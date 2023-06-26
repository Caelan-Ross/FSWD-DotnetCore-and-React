import axios  from 'axios'
import { Typography } from '@mui/material'

export default function View(props) {
    if(props) {
        return (
            <ul style={{ listStyle: 'none', paddingBottom: '50px'}}>
                <li>
                    <Typography variant="h6" align="left" component="h6">{props.vehicle.colour + " " + props.vehicle.modelYear + " " + props.vehicle.manufacturer + " " + props.vehicle.model}</Typography>
                </li>
                <li>
                    <Typography variant="body1" align="left" component="p">VIN: {props.vehicle.vin}</Typography>
                </li>
                <li>
                    <Typography variant="body1" align="left" component="p"> Trim Level: {props.vehicle.trimLevel} </Typography>
                </li>
                <li>
                    <Typography variant="body1" align="left" component="p"> Purchase Date: {props.vehicle.purchaseDate} </Typography>
                </li>
                <li>
                    <Typography variant="body1" align="left" component="p"> Purchase Amount: {props.vehicle.purchaseAmount} </Typography>
                </li>
                {props.vehicle.saleDate &&
                    <>
                        <li>
                            <Typography variant="body1" align="left" component="p"> Sale Date: {props.vehicle.saleDate} </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" align="left" component="p"> Sale Amount: {props.vehicle.saleAmount} </Typography>
                        </li>
                    </>       
                }
            </ul>
        )
    }else {
        return(
            <Typography variant="h6" align="center" component="h6">Loading...</Typography>
        )
    }
    
}

export async function getServerSideProps(context) {

    const{ id }= context.query;
    const vehicleData = await axios.get(`http://localhost:3000/api/vehicle/get?id=${id}`).then(res => res.data.vehicle);

    return {
        props: {
            vehicle: vehicleData
        }
    };
}
