import { useState } from 'react';
import sampleDeviceData from './../Commons/constant'; 
import OnBoardModal from '../Commons/OnboardModal';
import { useDispatch} from 'react-redux';
import { DeviceListActions } from './../Commons/store/Store';
import './OnboardFormPage.css'


const OnboardFormPage = () => {
    const dispatch = useDispatch();

    const [typeValue, setTypeValue] = useState('');
    const [inputdeviceId, setInputDeviceId] = useState('');
    const [showModalType, setShowModalType] = useState({showModal : false, modalType : '' });

    const typeChangeHandler = (event) => {
        setTypeValue(event.target.value)
    }

    const inputDeviceChangeHandler = (event) => {
        setInputDeviceId(event.target.value);
    }

    const searchDevice = (event) => {
        event.preventDefault();
        const selectedDevice = sampleDeviceData.filter(data => data.id === inputdeviceId && data.type === typeValue);
        if(selectedDevice.length === 1) {
            setShowModalType({showModal : true, modalType : 'success' }) 
            dispatch(DeviceListActions.add(selectedDevice) );
        }
        else { 
            setShowModalType({showModal : true, modalType : 'error' }) ;
        }
    }

    const handleCloseModal = () => {
        setShowModalType({showModal : false, modalType : '' });
        setInputDeviceId('');
        setTypeValue('');
    }

    return(
        <>
            <div className="form-wrapper">
                <form onSubmit={searchDevice}>

                    <div className='form-element-wrapper form-group'>
                        <label className='input-label'>
                            Device ID
                        </label>
                        <input  className='form-control' value={inputdeviceId} onChange={inputDeviceChangeHandler} onBlur={inputDeviceChangeHandler} type='text'>
                        </input>
                    </div>
                    <div className='form-element-wrapper form-group'>

                        <label className='input-label'>Device Type</label>

                        <select className='form-control' value={typeValue} onChange={typeChangeHandler}>
                            <option>---Select---</option>
                            {sampleDeviceData.map((data) => (
                                <option key={data.id} value={data.type}>{data.type}</option>
                            ))}
                        </select>
                    </div>
                    <div className='btn-wrapper m-4'>
                    <button type='submit' className='nav-btn'> ADD DEVICE</button>
                    </div>
                </form>

            </div>
            {(showModalType.showModal && showModalType.modalType === 'success') && 
            <OnBoardModal 
            onClose = {handleCloseModal}
            show={showModalType} title={'Device Found'} 
            infoMsg={'Device is successfully Onboarded, Now you can check yur device in device list.'}
            btnText={'ADD MORE DEVICE'}
            modalClass={'onBoardModal'}>
            </OnBoardModal>
            }
            {(showModalType.showModal && showModalType.modalType === 'error') &&
            <OnBoardModal 
            onClose = {handleCloseModal}
            show={true} title={'Device Not Found !'} 
            infoMsg={'Device not found in available devices. Please try to add some other device or check id and name.'}
            btnText={'TRY WITH OTHER DEVICE'}
            modalClass={'onBoardModal error-modal'}>
            </OnBoardModal>
            }
        </>
    )
}

export default OnboardFormPage;