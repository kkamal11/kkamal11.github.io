import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FloatingResumeButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      to="/resume"
      className={`hidden md:flex fixed right-5 bottom-1 -translate-y-1/2 z-50
      px-3 py-2 bg-black text-white rounded shadow-lg
      hover:bg-gray-900 transition-all duration-500
      ${
        show
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
      }`}
    >
      📄 Resume
    </Link>
  );
}
