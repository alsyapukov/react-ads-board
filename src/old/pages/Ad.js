import React, { useParams } from "react";

import Header from "../components/Header";
import Ad from "../components/Ad";

const AdPage = ({match}) => {
  // let { id } = useParams();

  return (
    <React.Fragment>
      <Header />
      <Ad id={match.params.id} />
    </React.Fragment>
  );
}
export default AdPage;