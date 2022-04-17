const _Breakpoint = (() => {
  const matches = []
  const breakpoints = {
    MOBILE: '0px',
    TABLET_PORTRAIT: '768px',
    TABLET_LANDSCAPE: '1024px',
    DESKTOP: '1280px',
    DESKTOP_LARGE: '1440px',
    DESKTOP_EXTRA_LARGE: '1600px',
    DESKTOP_EXTRA_LARGER: '1800px'
  }
  // deprecated
  const oldBreakpoints = {
    PHABLET: '(min-width: 600px) and (max-width: 799px)',
    TABLET: '(min-width: 800px) and (max-width: 1023px)'
  }

  Object.values(breakpoints).forEach((breakpoint, index) => {
    matches[index] = window.matchMedia(`(min-width: ${breakpoint})`).matches
    window.matchMedia(`(min-width: ${breakpoint})`).addListener((e) => {
      matches[index] = e.matches
    })
  })

  // Determines whether or not the screen width matches from the given breakpoint to the next.
  const only = (name) =>
    Object.keys(breakpoints).indexOf(name) === matches.lastIndexOf(true)
  // Determines whether or not the screen width matches the given breakpoint and wider
  const up = (name) => matches[Object.keys(breakpoints).indexOf(name)]
  // Determines whether or not the screen width matches the given breakpoint and narrower.
  const down = (name) =>
    Object.keys(breakpoints).indexOf(name) >= matches.lastIndexOf(true)

  return {
    // will be used for reactivity in vue-plugins, but never directly accessed
    // need to listen on these changes ? Use the reactivity of the plugin
    onChange (callback) {
      if (typeof callback !== 'function') return
      // deprecated
      Object.values(oldBreakpoints).forEach((mediaQuery) => {
        window.matchMedia(mediaQuery).addListener(() => {
          // note: if necessary, you can expose the name/query in the callback
          callback()
        })
      })
      Object.values(breakpoints).forEach((breakpoint, index) => {
        window.matchMedia(`(min-width: ${breakpoint})`).addListener((e) => {
          matches[index] = e.matches
          // note: if necessary, you can expose the name/query in the callback
          callback()
        })
      })
    },
    isMobile () {
      return only('MOBILE')
    },
    isTabletPortrait () {
      return only('TABLET_PORTRAIT')
    },
    isTabletPortraitAndUp () {
      return up('TABLET_PORTRAIT')
    },
    isTabletPortraitAndDown () {
      return down('TABLET_PORTRAIT')
    },
    isTabletLandscape () {
      return only('TABLET_LANDSCAPE')
    },
    isTabletLandscapeAndUp () {
      return up('TABLET_LANDSCAPE')
    },
    isDesktop () {
      return only('DESKTOP')
    },
    isDesktopAndUp () {
      return up('DESKTOP')
    },
    isDesktopLarge () {
      return only('DESKTOP_LARGE')
    },
    isDesktopLargeAndUp () {
      return up('DESKTOP_LARGE')
    },
    isDesktopExtraLarge () {
      return only('DESKTOP_EXTRA_LARGE')
    },
    isDesktopExtraLarger () {
      return only('DESKTOP_EXTRA_LARGER')
    },
    isPhablet () {
      return window.matchMedia(oldBreakpoints.PHABLET).matches
    },
    isTablet () {
      return window.matchMedia(oldBreakpoints.TABLET).matches
    }
  }
})()

export default _Breakpoint
