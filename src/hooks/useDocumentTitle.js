import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    const baseTitle = 'Arya Shah | Full-Stack Developer & Software Engineer';
    document.title = title ? `${title} | Arya Shah` : baseTitle;
  }, [title]);
}
