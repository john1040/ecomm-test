import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Card, Container, Navbar, Text, Link, Image } from '@nextui-org/react';
import NavbarComponent from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { shopifyClient, parseShopifyResponse } from '../lib/shopify'
export default function Home({ products }) {
  return (
    <Container fluid>
      <NavbarComponent />
      <Image width={1000}
        height={600}
        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
        alt="Default Image"
        objectFit="cover" />
      <ProductGrid products={products} />

      {/* <Footer /> */}

    </Container>
  )
}
export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  console.log(parseShopifyResponse(products))
  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
}