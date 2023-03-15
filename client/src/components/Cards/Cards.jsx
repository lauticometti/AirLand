import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";

function UserList() {
  const shoes = useSelector((state) => state.shoes.shoes);
  const status = useSelector((state) => state.shoes.status);
  const error = useSelector((state) => state.shoes.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return <div>
    <h1>Shoes from API</h1>
    {shoes.map(shoe=><p key={shoe.id}>{shoe.id}</p>)}
  </div>;
}

export default UserList;