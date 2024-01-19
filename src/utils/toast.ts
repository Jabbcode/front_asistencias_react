import toast from "react-hot-toast";

export const SuccessAlert = (msg: string) =>
  toast.success(msg, {
    duration: 2000,
    style: {
      minWidth: 400,
    },
  });

export const WarningAlert = (msg: string) =>
  toast(msg, {
    duration: 2000,
    style: {
      minWidth: 400,
    },
    icon: "⚠️",
  });
