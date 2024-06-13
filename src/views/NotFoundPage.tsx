//router
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container-main pt-32 h-fit">
      <div className="flex flex-col items-center justify-center py-20 px-32 bg-white rounded-[10px]">
        <h1 className="font-bold">Oops...</h1>
        <h5 className="text-blue py-5">404 - Not found page OR Developing</h5>
        <div className="container-btn">
          <Link to="/" className="btn-base btn-sub">Return Homepage</Link>
        </div>
      </div>
    </div>
  );
}
