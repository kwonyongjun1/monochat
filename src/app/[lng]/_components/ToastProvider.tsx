import { Slide, ToastContainer } from "react-toastify";

const ToastProvider = () => {
  return (
    <ToastContainer
      transition={Slide}
      autoClose={2000}
      hideProgressBar={true}
      pauseOnHover
      draggable
    />
  );
};

export default ToastProvider;
