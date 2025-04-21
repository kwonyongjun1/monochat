import { toast as toastifyToast } from "react-toastify";

export interface ToastOptions {
  message: string;
  type: "success" | "error" | "info" | "warn";
  position?:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-left"
    | "bottom-right";
}

export const toast = ({
  message,
  type,
  position = "bottom-right",
}: ToastOptions) => {
  switch (type) {
    case "success":
      toastifyToast.success(message, { position });
      break;
    case "error":
      toastifyToast.error(message, { position });
      break;
    case "info":
      toastifyToast.info(message, { position });
      break;
    case "warn":
      toastifyToast.warn(message, { position });
      break;
    default:
      toastifyToast(message, { position });
  }
};
