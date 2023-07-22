import { useBreakpoint as useBreakpointNpm } from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export enum Breakpoint {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
}

export default function useBreakpoint() {
  const breakpointData = useBreakpointNpm(BREAKPOINTS, Breakpoint.Desktop);

  return {
    value: breakpointData.breakpoint as Breakpoint,
    mobile: breakpointData.breakpoint === Breakpoint.Mobile,
    desktop: breakpointData.breakpoint === Breakpoint.Desktop,
    tablet: breakpointData.breakpoint === Breakpoint.Tablet,
  };
}
