import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userStartLoading } from "../../../actions/user";
import { Sidebar } from "../../ui/sidebar/Sidebar";
import { UserList } from "../utilities/userslist/UserList";

export const IronworkUsers = () => {
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userStartLoading(users.switchUser));
  }, [users.switchUser]);

  const role = localStorage.getItem('role')
  const allowedRole = ['SUPER_ADMIN', 'ADMIN_ROLE']
  if (!allowedRole.includes(role)) {
      navigate('/dashboard')
  }


  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <UserList />
      </div>
    </>
  );
};
