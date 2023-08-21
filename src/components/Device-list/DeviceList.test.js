import { screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithProviders } from "../Commons/test-utils";
import AppStore, { LogActions } from "../Commons/store/Store";
import DeviceListPage from "./DeviceListPage";

test('reders login form', () => {
    renderWithProviders(<BrowserRouter><DeviceListPage/></BrowserRouter>, {store: AppStore});

   // expect(screen.find)
});