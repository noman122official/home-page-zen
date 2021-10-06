import React from 'react'
import { Container, Links, Link, Button, Image, ImageContainer, LinkContainer} from './styles/Navbar.styled'

function Navbar() {
    return (
        <Container >
        <ImageContainer>
        <Image src="/logo.svg" />
        </ImageContainer>
        <LinkContainer>
          <Links>
            <Link>
            Post an Internship
            </Link>
            <Link>
            Find Internships
            </Link>
            <Link>
            Sign In
            </Link>
            <Button>
            Sign Up
            </Button>
          </Links>
          </LinkContainer>
        </Container>
    )
}

export default Navbar



