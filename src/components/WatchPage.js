import { useEffect } from "react";
import WatchCard from "./WatchCard";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="col-span-11 grid-flow-col ">
      <WatchCard idinfo={params.get("v")} />
    </div>
  );
};
export default WatchPage;
