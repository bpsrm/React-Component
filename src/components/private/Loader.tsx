import "@/styles/loader.css";

//types
import { LoaderType } from "@/@types/global.types";
import { Fragment } from "react";

export default function Loader({ loading }: LoaderType) {
  return (
    <Fragment>
      {loading &&
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      }
    </Fragment>
  );
}
