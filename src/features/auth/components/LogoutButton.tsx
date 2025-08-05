
import { MdLogout } from "react-icons/md";
import Button from "@/shared/components/ui/button/Button";
import useAuth from "../hooks/useAuth";

const LogoutButton = () => {
    const { isAuthenticated, logoutUser } = useAuth();
    if (!isAuthenticated) {
        return null
    }
    return <Button onClick={logoutUser} icon={<MdLogout size={18} />} />
}

export default LogoutButton