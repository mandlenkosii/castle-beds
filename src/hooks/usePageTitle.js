import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Castle Beds` : 'Castle Beds — Designed for living'
  }, [title])
}
