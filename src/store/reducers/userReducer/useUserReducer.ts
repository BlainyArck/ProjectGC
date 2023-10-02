import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { UserType } from "../../../shared/types/userType";
import { setUserAction } from ".";

export const useUserReducer = () => {
    const dispath = useDispatch();
    const { user } = useAppSelector((state) => state.userReducer);
    const setUser = (currentUser: UserType) =>{
        dispath(setUserAction(currentUser));
    }

    return {
        user,
        setUser,
    }
}