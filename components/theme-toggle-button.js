import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import confetti from 'canvas-confetti'

const ThemeToggleButton = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    console.log(colorMode)
    if(colorMode === 'dark'){
        confetti({
            zIndex:999,
            particleCount: 100,
            spread: 160,
            angles: -100,
            origin:{
                x:1,
                y:1,
            }
        })
    }
    return (
        <AnimatePresence mode='wait' initial={false}>
        <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            ></IconButton>
        </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton