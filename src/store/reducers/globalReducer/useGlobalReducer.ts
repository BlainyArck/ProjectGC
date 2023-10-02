import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks"
import { setModalAction } from ".";
import { GlobalModalType } from "../../../shared/components/modal/globalModal/GlobalModal";

export const useGlobalReducer = () => {
    const dispath = useDispatch();
    const { modal } = useAppSelector((state) => state.globalReducer);

    const closeModal = () => {
        dispath(
            setModalAction({
                ...modal,
                visible: false,
            }),
        );
    };

    const setModal = (currentModal: GlobalModalType) => {
        dispath(setModalAction(currentModal));
    }

    return {
        modal,
        closeModal,
        setModal,
    };
};
