import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    logger.log(error);

    toast.error("somethisng went wrong");
  }

  if (error.response.status === 459) {
    toast.error(" Email already used");
  }
  if (error.response.status === 535) {
    toast.error(" Email Not sent");
  }
  if (error.response.status === 469) {
    toast(
      " one store is already registerd with us . you can not add more than one store"
    );
  }
  if (error.response.status === 402) {
    toast.error(" invalid user name or password");
  }
  if (error.response.status === 409) {
    toast.error(" Ration no already userd. please try to log in");
  }
  if (error.response.status === 400) {
    toast.error("please fill all the fields ");
  }
  if (error.response.status === 810) {
    toast.error("time slot not available please select different timmings ");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
