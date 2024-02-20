import { useParams, Outlet, Link, useSearchParams } from "react-router-dom";
import { SortOrderForm } from "./SortOrderForm";

export function UserPage() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  let { username } = useParams();

  return (
    <>
      <h2>User ID: {username}</h2>
      <Link to={`/users/${username}`}>User's Profile</Link>{" "}
      <Link to={`/users/${username}/posts`}>User's Posts</Link>
      <Link to={`/users/${username}/likes`}>Likes</Link>
      <Outlet />
      <div>
        <hr />
        sort: {sort}
        <h2>Profile for {username}</h2>
        <Outlet />
      </div>
      <SortOrderForm />
    </>
  );
}
