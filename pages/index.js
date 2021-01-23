import Layout from "../components/Layout"

import Head from "next/head"

import Product from "../components/Product.js"

import Footer from "../components/Footer.js"

const index = () => {
    return (
        <Layout>
            <Head>
            <title>Bjarčo Sk8</title>
                <meta name="description" content="Značka Brajčo Sk8"></meta>
            </Head>
            <div className="homepage-div">
                <Product img="/deck1.png" id="first" name="Doska dizajn 1" price="45&euro;" />
                <Product img="/tshirt1.png" id="second" name="Tričko dizajn 1" price="45&euro;" />
                <Product img="/deck2.png" id="third" name="Doska dizajn 2 - predobjednávka" price="45&euro;" />
                <Product img="/tshirt2.png" id="last" name="Doska dizajn 1" price="45&euro;" />
                <Footer />
            </div>
        </Layout>
    )
}

export default index