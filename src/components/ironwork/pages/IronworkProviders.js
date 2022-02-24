import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { providerStartLoading } from "../../../actions/provider";
import { Sidebar } from "../../ui/sidebar/Sidebar"
import { ProviderList } from "../utilities/prodviderslist/ProviderList"

export const IronworkProviders = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { provider } = useSelector((state) => state);

  useEffect(() => {
    dispatch(providerStartLoading(provider.switchProvider));
  }, [provider.switchProvider]);

  const role = localStorage.getItem('role')
  const allowedRole = ['SUPER_ADMIN', 'ADMIN_ROLE']
  if (!allowedRole.includes(role)) {
      navigate('/dashboard')
  }

  return (
    <div className="d-flex">
        <Sidebar />
        <ProviderList />
    </div>
  )
}
