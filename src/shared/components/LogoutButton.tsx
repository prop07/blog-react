import { MdLogout } from "react-icons/md";
import Button from "@/shared/ui/button/Button";
import { useAuthenticated } from "@/store/auth-slice";
import useAuth from "@/hooks/useAuth";

const LogoutButton = () => {
  const isAuthenticated = useAuthenticated();
  const { logoutUser } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return <Button onClick={logoutUser} icon={<MdLogout size={18} />} />;
};

export default LogoutButton;
