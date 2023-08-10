import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import NextLink from 'next/link'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
        <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
            <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)


export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox
        as={NextLink}
        href={`/projects/${id}`}
        scroll={false}
        cursor="pointer"
        >
        <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            style={{ width: "300px", height: "auto", margin: "0 auto" }}
        />
        <LinkOverlay as="div" href={`/projects/${id}`}>
            <Text mt={2} fontSize={14}>
            {title}
            </Text>
        </LinkOverlay>
        <Text fontSize={10}>{children}</Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
        `}
    />
)