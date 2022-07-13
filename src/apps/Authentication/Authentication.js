import { useEffect, useState } from "react";
import getAuthenticatedUser from "../../apis/getAuthenticatedUser";
import AuthenticationContext from "./AuthenticationContext";

const Authentication = ({
  children,
}) => {
  const xAuthToken = localStorage.getItem('xAuthToken')

  const [loading, setLoading] = useState(!!xAuthToken)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    getAuthenticatedUser()
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false))
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{
        loading,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export default Authentication;
