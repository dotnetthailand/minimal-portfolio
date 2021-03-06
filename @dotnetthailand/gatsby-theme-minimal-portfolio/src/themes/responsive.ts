// responsive.ts from https://thadaw.com/s/ne5q3pt/
import { useMediaQuery } from 'react-responsive';

export const breakpoints: Record<string, number> = {
  small: 768,
  large: 1170,
};

// For JS
export function useResponsive() {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.small })
  const isTablet = useMediaQuery({
    minWidth: breakpoints.small + 1,
    maxWidth: breakpoints.large - 1 })
  const isDesktop = useMediaQuery({ minWidth: breakpoints.large })
  return { isMobile, isTablet, isDesktop};
}

// For CSS media query
const mediaQuery = (bp: number) => `@media (max-width: ${bp}px)`;
export const onMobile = mediaQuery(breakpoints.small);
export const onTablet = mediaQuery(breakpoints.large);