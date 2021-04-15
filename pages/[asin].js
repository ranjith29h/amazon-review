import Head from "next/head";
import { Header } from "../components/Header";
import useReviews from "../components/APIHandling/useReviews";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Loader } from "../components/Loader";

import { ReviewCard } from "../components/ReviewCard";
import ProductDetails from "../components/ProductDetails";

import style from "../styles/Asin.module.css";

const ASIN = ({ asin }) => {
  // B088DXSTNW
  const { data, error, isLoading } = useReviews(asin);
  console.log(data);
  console.log(isLoading);
  console.log(error);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={style.review_holder}>
        <div className={style.review_container}>
          <Tabs defaultActiveKey="reviews" id="tab">
            <Tab eventKey="reviews" title="All Reviews">
              {isLoading ? (
                <Loader />
              ) : (
                <div>
                  <ProductDetails response={data} />
                  <ReviewCard response={data} />
                </div>
              )}
            </Tab>
            <Tab eventKey="seller" title="All Sellers">
              {isLoading ? (
                <Loader />
              ) : (
                <div>
                  <ProductDetails response={data} />
                  <div className="text-center p-4 bg-white">
                    <p>Empty Data</p>
                  </div>
                </div>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

function Sonnet() {
  return <p>Sonnet</p>;
}

ASIN.getInitialProps = async ({ query }) => {
  const { asin } = query;

  return {
    asin,
  };
};

export default ASIN;
