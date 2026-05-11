// Inline script that runs synchronously before React hydrates.
// Reads the persisted theme preference and applies the data-theme attribute
// to <html> so the correct palette is painted on first paint (no flash).

const script = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else{document.documentElement.removeAttribute('data-theme')}}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
