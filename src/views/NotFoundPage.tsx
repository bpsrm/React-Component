//router
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container-main pt-52 h-fit">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold">Oops...</h1>
        <h5 className="text-violet py-5">404 - Not Found Page</h5>
        <div className="container-btn">
          <Link to="/" className="btn-base">
            Return Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
