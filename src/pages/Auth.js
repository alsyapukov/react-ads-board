import React, { useParams } from "react";

import Header from "../components/Header";
import Auth from "../components/Auth";

const AuthPage = ({match}) => {
  // let { id } = useParams();

  return (
    <React.Fragment>
      <Header />
      <Auth id={match.params.id} />
    </React.Fragment>
  );
}
export default AuthPage;