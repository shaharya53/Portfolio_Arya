const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/civicfix-ai-reporting",
  "/projects/real-estate-web-app",
  "/projects/news-summary-ai",
  "/projects/barricade-game",
  "/projects/iq-test",
  "/projects/brewtopia",
  "/blogs",
  "/blogs/react-vs-nextjs-frontend-architecture",
  "/blogs/typescript-vs-javascript-modern-standard",
  "/blogs/tailwind-css-vs-vanilla-css-speed-vs-flexibility",
  "/blogs/local-storage-vs-session-storage-vs-cookies",
  "/blogs/server-components-vs-client-components-nextjs",
  "/blogs/server-vs-client-components-nextjs",
  "/blogs/state-management-zustand-redux-context",
  "/contact",
  "/non-existent-page"
];

async function testAll() {
  let passed = 0;
  for (const r of routes) {
    try {
      const res = await fetch("http://localhost:3000" + r);
      if (res.status === 200) {
        passed++;
        console.log(`[PASS] ${r} -> HTTP ${res.status}`);
      } else {
        console.log(`[FAIL] ${r} -> HTTP ${res.status}`);
      }
    } catch (e) {
      console.error(`[ERROR] ${r} -> ${e.message}`);
    }
  }
  console.log(`\nCompleted: ${passed}/${routes.length} routes returned HTTP 200 (SPA HTML shell).`);
}

testAll();
