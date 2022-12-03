import { Button, Card, Container, Navbar, Text, Link } from '@nextui-org/react';

export default function NavbarComponent() {
    return (
        <Navbar isBordered>
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link href="">HOME</Navbar.Link>
                <Navbar.Link href="">STORE</Navbar.Link>
                <Navbar.Link href="">LOOKBOOK</Navbar.Link>
                <Navbar.Link color="inherit" href="#">
                    Login
                </Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>

                <Navbar.Item>
                    <Button auto flat as={Link} href="#">
                        CART
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )

}