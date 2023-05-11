import { useCallback } from 'react'
export const useIconThemeHook = toggleTheme => {
  const handleTheme = useCallback(() => {
    toggleTheme()
  }, [toggleTheme])
  return { handleTheme }
}
