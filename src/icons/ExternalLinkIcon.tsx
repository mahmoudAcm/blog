import { createIcon } from '@chakra-ui/icons';

export const ExternalLinkIcon = createIcon({
  displayName: 'ExternalLinkIcon',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: '24px',
    height: '24px'
  },
  path: (
    <path d='M7 17L17 7M17 7H7M17 7V17' stroke='#1A1A1A' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  )
});
