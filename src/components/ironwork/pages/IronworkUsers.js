import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userStartLoading } from "../../../actions/user";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { UserList } from "../utilities/userslist/UserList";

export const IronworkUsers = () => {
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userStartLoading(users.switchUser));
  }, [users.switchUser]);

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <UserList />
      </div>
    </>
  );
};
