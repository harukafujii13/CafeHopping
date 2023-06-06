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
    <div>
      <ul>
        <li>
          <Link href={"/search"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-[25px]"
            />
          </Link>
        </li>
        <li>
          <Link href={"/bookmark"}>
            <FontAwesomeIcon
              icon={faBookmark}
              className="h-[25px]"
            />
          </Link>
        </li>
        <li>
          <Link href={"/favorite"}>
            <FontAwesomeIcon
              icon={faHeart}
              className="h-[25px]"
            />
          </Link>
        </li>
        <li>
          <Link href={"/logout"}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="h-[25px]"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Homepage;
