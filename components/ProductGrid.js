import { Grid, Card, Text, Row, Link } from "@nextui-org/react";

export default function ProductGrid({ products }) {
    console.log(products[5].images[0].src)
    return (
        <>
            <Grid.Container gap={2} justify="center">
                {products.map((item, index) => (
                    < Grid xs={6} sm={5} key={index} >
                        <Card isPressable>
                            <Link href={'products/' + item.handle}>
                                {item && item.images &&
                                    <Card.Image
                                        src={item.images[0]?.src}
                                        objectFit="cover"
                                        width="100%"
                                        height={140}
                                        alt={item.title}
                                    />
                                }

                                <Text>{item.handle}</Text>
                            </Link>
                        </Card>


                    </Grid>
                ))
                }
            </Grid.Container>
        </>


    )
}