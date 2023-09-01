import { Box, BoxProps, ChakraProps, HTMLChakraProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import useThemeContext from '@/src/hooks/useThemeContext';
import { ThemeContextState } from '@/src/contexts/CustomThemeContext';

export default function chakraStyled<
  Props extends ChakraProps & HTMLChakraProps<any>,
  ComponentType extends BoxProps['as']
>(Component: ComponentType) {
  return function styles(cb: (theme: ThemeContextState) => Omit<Props, 'children'>) {
    return function StyledBox(props: Props) {
      const theme = useThemeContext();
      const mergedProps = Object.assign(cb(theme), props);

      if (typeof Component === 'string')
        return (
          <Box as={Component} {...mergedProps}>
            {props.children}
          </Box>
        );

      //@ts-ignore
      return <Component {...mergedProps}>{props.children}</Component>;
    };
  };
}
