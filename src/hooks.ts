import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "./store/store";
import { changeModalStatus } from "./store/slices/settingsSlice";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

export const useModalstatusChange = () => {
    const dispatch = useAppDispatch();
    const handleModalOpen = () => {
        dispatch(changeModalStatus());
    }
    const handleModalClose = () => {
        dispatch(changeModalStatus());
    }
    return [
        handleModalClose,
        handleModalOpen,
    ]
}