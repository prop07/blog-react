import toast, { Toaster } from "react-hot-toast";

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

// Utility functions for triggering toasts
export const successToast = (message: string) => {
  toast.success(message);
};

export const errorToast = (message: string) => {
  toast.error(message);
};
