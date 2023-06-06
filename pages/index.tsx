import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBookmark,
  faHeart,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function Homepage() {
  return (
    <div className="h-[100vh] bg-light-green">
      <ul className="flex flex-row justify-end text-primary-gray bg-primary-rose h-[6%] items-center px-10">
        <li className="ml-5">
          <Link href={"/search"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-[27px]"
            />
          </Link>
        </li>
        <li className="ml-5">
          <Link href={"/bookmark"}>
            <FontAwesomeIcon
              icon={faBookmark}
              className="h-[27px]"
            />
          </Link>
        </li>
        <li className="ml-5">
          <Link href={"/favorite"}>
            <FontAwesomeIcon
              icon={faHeart}
              className="h-[27px]"
            />
          </Link>
        </li>
        <li className="ml-5">
          <Link href={"/logout"}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="h-[27px]"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Homepage;
