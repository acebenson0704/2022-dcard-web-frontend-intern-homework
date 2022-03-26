import { extendTheme } from '@chakra-ui/react';
import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#0D1117', '#0D1117')(props)
    }
  })
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({ styles, config });
export default theme;
