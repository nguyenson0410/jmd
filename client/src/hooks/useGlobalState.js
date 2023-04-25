import { useSelector } from "react-redux";

const useGlobalState = () => {
  const globalState = useSelector((state) => state);
  return globalState;
};
export default useGlobalState;
