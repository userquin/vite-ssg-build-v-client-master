// export const isDark = useDark()
export const isDark = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined' ? useDark() : ref(false)
export const toggleDark = useToggle(isDark)
