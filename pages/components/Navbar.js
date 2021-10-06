import React from 'react'
import { Container, Links, Link, Button, Image} from './styles/Navbar.styled'

function Navbar() {
    return (
        <Container >
        <Image />
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
        </Container>
    )
}

export default Navbar



