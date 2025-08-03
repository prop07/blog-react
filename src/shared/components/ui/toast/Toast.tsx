import { Toaster } from "react-hot-toast";

const Toast = () => {
  const style = {
    background: "#ffffff",
    color: "#262626",
  };

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{ style }}
    />
  );
};

export default Toast;
