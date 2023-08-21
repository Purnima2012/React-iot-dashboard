import Card from "../Commons/Card";
import { useSelector } from "react-redux";
import './HomePage.css';

function HomePage () {
    const isLoggedIn = useSelector((state) => state.logState.isLoggedIn)
    return (
        isLoggedIn && <div className='card-wrapper align-middle'>
            <Card title='Onboard Devices' 
            details='Onboard your device here' 
            imageurl="/images/add-image-icon-png-22.jpg"
            targetPage='/onboard-device'
            navText='ADD'></Card>
            <Card title='Device Listing Page' 
            details='View list of all onboarded devices' 
            imageurl='/images/listIcon.jpg'
            targetPage='/device-list'
            navText='VIEW'></Card>
        </div>
    )

}

export default HomePage;