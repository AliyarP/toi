import Main from "../layout/Main";
import Address from "../section/Address";
import Come from "../section/Come";
import Form from "../section/Form";
import Path from "../section/Path";
import Welcome from "../section/Welcome";

import Gallery from "../section/Gallery";

export default function Home() {
  return (
    <div>
      <Main />
      <Gallery />
      <Welcome />
      <Address />
      <Path />
      <Form />
      <Come />
    </div>
  );
}
