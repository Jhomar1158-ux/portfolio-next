import Link from 'next/link'
import {Button} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { WsppIcon } from './WsppIcon'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }
`
const Logo = () => {

    return (
        <Link href='https://wa.link/2l4hkc'>
            <LogoBox>
                <Button 
                    leftIcon={<WsppIcon/>}
                    colorScheme='teal'
                    >
                    Conversemos
                </Button>
            </LogoBox>
        </Link>
    )
}

export default Logo;