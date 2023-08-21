import './DeviceDetailPage.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeviceListActions } from '../Commons/store/Store';

const DeviceDetailPage = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const DeviceListData = useSelector((state) => state.deviceListState.deviceList);

    const SelectedDevice = DeviceListData.find((device) => device.id === params.id && device.name === params.name)

    const btnHandler = () => {
        dispatch(DeviceListActions.update({...SelectedDevice, newActiveState: 'toggle'}));
    }

    const atrChangeHandler = (event) => {
        dispatch(DeviceListActions.update({...SelectedDevice, newAtr: JSON.parse(event.target.value)}));
    }

return(
    <div className='details-wrapper'>
        <div className='detail-container'>
            <img src={SelectedDevice.image} alt={SelectedDevice.name}></img>
        </div>
        <div className='detail-container'>
            <div className='info-feilds m-3 p-1'>
                <span className='m-2'>ID : </span>
                <span className='m-2'>{SelectedDevice.id}</span>
            </div>
            <div className='info-feilds m-3 p-1'>
                <span className='m-2'>TYPE : </span> 
                <span className='m-2'>{SelectedDevice.type}</span>
            </div>
            <div className='info-feilds m-3 p-1'>
                <span className='m-2'>NAME : </span>
                <span className='m-2'>{SelectedDevice.name}</span>
            </div>
            <div className='info-feilds m-3 p-1'>
                <span className='m-2'>Detail : </span>
                <span className='m-2'>{SelectedDevice.info}</span>
            </div>

            <div className='info-feilds m-3 p-1'>
             { Object.keys(SelectedDevice.controlAtr).map(atr => {
                return <div className='p-1'>
                <label  htmlFor='inputBox'>{atr} : </label>

                <select className='m-3 dropdown-box p-1' onChange={atrChangeHandler}>
                    <option className='selectedOption'>{SelectedDevice.controlAtr[atr].set}</option>
                    {SelectedDevice.controlAtr[atr].options.map((data) => (
                        SelectedDevice.controlAtr[atr].set !== data ?
                        <option key={data} value={JSON.stringify({atr , value: data})}>{data}</option>
                        : ''
                    ))}
                </select>
                </div>
             })
            }
            </div>
            <button className='nav-btn px-4 m-3' onClick={btnHandler}>{SelectedDevice.active ? 'TURN OFF' : 'TURN ON'}</button>
            <button className='nav-btn px-4 m-3'>
                <Link className='nav-btn' to='/device-list'>GO BACK</Link>
            </button>
        </div>
    </div>
    )
}

export default DeviceDetailPage;