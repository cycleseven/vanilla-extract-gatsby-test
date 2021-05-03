import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Good from "../components/good";

// Uncomment this import to break the build
// import Bad from "../components/bad";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Good />
  </Layout>
)

export default IndexPage
