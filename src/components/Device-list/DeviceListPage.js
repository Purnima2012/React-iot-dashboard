import Card from "../Commons/Card.js"
import './DeviceListPage.css';
import { useSelector, useDispatch } from "react-redux";
import { DeviceListActions } from "../Commons/store/Store.js";


const DeviceListPage = () => {

    const dispatch = useDispatch();

    const DeviceData = useSelector((state) => state.deviceListState.deviceList);

    const removeDeviceHandler = (device) => {
        dispatch(DeviceListActions.removeDevice({...device}));

    }

    const renderList = DeviceData.map((device) => {
        return (
            <Card key={device.id}  title={device.name}
                details={device.type}
                imageurl={device.image}
                targetPage={`/device-detail/${device.id}/${device.name}`}
                navText={device.id}
                showRemoveBtn = {true}
                removeCard = {() => removeDeviceHandler(device)}> 
            </Card>
        )
    })

    return (
        <>
            <div className="list-container text-center">
                    {renderList}
            </div>
        </>
    )
}

export default DeviceListPage;