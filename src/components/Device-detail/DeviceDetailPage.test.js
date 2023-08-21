import { MemoryRouter } from "react-router-dom";
import DeviceDetailPage from "./DeviceDetailPage";
import { screen} from "@testing-library/react";


test('Loads Device Detail Page', () => {
    <MemoryRouter initialEntries={'device-detail/d001/Fan'}><DeviceDetailPage /></MemoryRouter>

})