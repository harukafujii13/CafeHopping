import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link href={"/search"}>Search</Link>
        </li>
        <li>
          <Link href={"/bookmark"}>Bookmark</Link>
        </li>
        <li>
          <Link href={"/favorite"}>Favorite</Link>
        </li>
        <li>
          <Link href={"/logout"}>Logout</Link>
        </li>
      </ul>
    </div>
  );
}
export default Homepage;
