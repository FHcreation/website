/* eslint-disable no-param-reassign */
import _Breakpoint from './utils/breakpoints' // eslint-disable-line no-restricted-imports

export default {
  install: (app) => {
    const microStore = {
      isMobile: _Breakpoint.isMobile(),
      isTabletPortrait: _Breakpoint.isTabletPortrait(),
      isTabletLandscape: _Breakpoint.isTabletLandscape(),
      isTabletLandscapeAndUp: _Breakpoint.isTabletLandscapeAndUp(),
      isDesktop: _Breakpoint.isDesktop(),
      isDesktopLarge: _Breakpoint.isDesktopLarge(),
      isDesktopExtraLarge: _Breakpoint.isDesktopExtraLarge(),
      isDesktopExtraLarger: _Breakpoint.isDesktopExtraLarger(),
      isTabletAndBigger: _Breakpoint.isTabletPortraitAndUp(),
      isDesktopAndUp: _Breakpoint.isDesktopAndUp(),
      isTabletPortraitAndDown: _Breakpoint.isTabletPortraitAndDown()
    }

    _Breakpoint.onChange(() => {
      microStore.isMobile = _Breakpoint.isMobile()
      microStore.isTabletPortrait = _Breakpoint.isTabletPortrait()
      microStore.isTabletLandscape = _Breakpoint.isTabletLandscape()
      microStore.isTabletLandscapeAndUp = _Breakpoint.isTabletLandscapeAndUp()
      microStore.isDesktop = _Breakpoint.isDesktop()
      microStore.isDesktopLarge = _Breakpoint.isDesktopLarge()
      microStore.isDesktopExtraLarge = _Breakpoint.isDesktopExtraLarge()
      microStore.isDesktopExtraLarger = _Breakpoint.isDesktopExtraLarger()
      microStore.isTabletAndBigger = _Breakpoint.isTabletPortraitAndUp()
      microStore.isDesktopAndUp = _Breakpoint.isDesktopAndUp()
      microStore.isTabletPortraitAndDown = _Breakpoint.isTabletPortraitAndDown()
    })

    app.provide('viewport', { viewport: microStore })
  }
}
