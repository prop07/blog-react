
import { MdLogout } from "react-icons/md";
import Button from "@/shared/components/ui/button/Button";
import useAuth from "../hooks/useAuth";

const LogoutButton = () => {
    const { isAuthenticated, logout } = useAuth();
    if (!isAuthenticated) {
        console.log("user not found")
        return null
    }
     return <Button onClick={logout} icon={<MdLogout size={18} />} />
}

export default LogoutButton