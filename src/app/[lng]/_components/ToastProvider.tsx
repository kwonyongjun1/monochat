import { Slide, ToastContainer } from "react-toastify";

const ToastProvider = () => {
  return (
    <ToastContainer
      transition={Slide}
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      pauseOnHover
      draggable
    />
  );
};

export default ToastProvider;
