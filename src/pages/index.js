import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Good from "../components/good";
import Bad from "../components/bad";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Good />
    <Bad />
  </Layout>
)

export default IndexPage
