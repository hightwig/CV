import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function toastError(a: string) {
  toast(a, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
