import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  useColorMode,
  Spacer,
} from '@chakra-ui/react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Spacer />
      <Box>
        <IconButton
          aria-label='dark mode'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          rounded='full'
          size='lg'
          margin={4}
        />
      </Box>
    </HStack>
  );
};

export default DarkModeSwitch;
