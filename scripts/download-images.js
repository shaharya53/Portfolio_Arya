import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToDownload = [
  // --- Projects ---
  // CivicFix
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/civicfix-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/civicfix-problem.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/civicfix-solution1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/civicfix-solution2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/civicfix-summary.jpg'
  },

  // Real Estate
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/realestate-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/realestate-problem.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/realestate-solution1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/realestate-solution2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/realestate-summary.jpg'
  },

  // News Summary AI
  {
    url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/newssummary-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/newssummary-problem.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/newssummary-solution1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/newssummary-solution2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/newssummary-summary.jpg'
  },

  // Barricade Game
  {
    url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/barricade-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/barricade-problem.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/barricade-solution1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/barricade-solution2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/barricade-summary.jpg'
  },

  // IQ Test
  {
    url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/iqtest-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/iqtest-problem.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/iqtest-solution1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/iqtest-solution2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/iqtest-summary.jpg'
  },

  // Brewtopia
  {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/brewtopia-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/brewtopia-problem.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/brewtopia-solution1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/brewtopia-solution2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/projects/brewtopia-summary.jpg'
  },

  // --- Blogs ---
  // React vs Next.js
  {
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/react-nextjs-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/react-nextjs-sec1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/react-nextjs-sec2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/react-nextjs-sec3.jpg'
  },

  // TypeScript vs JavaScript
  {
    url: 'https://images.unsplash.com/photo-1516116211227-bbc13c744213?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/typescript-js-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/typescript-js-sec1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/typescript-js-sec2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/typescript-js-sec3.jpg'
  },

  // Tailwind CSS
  {
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/tailwind-css-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/tailwind-css-sec1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/tailwind-css-sec2.jpg'
  },

  // Storage & Cookies
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/storage-cookies-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/storage-cookies-sec1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/storage-cookies-sec2.jpg'
  },

  // Server Components
  {
    url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/server-components-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/server-components-sec1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/server-components-sec2.jpg'
  },

  // State Management
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/state-management-main.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/state-management-sec1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    dest: 'public/images/blogs/state-management-sec2.jpg'
  }
];

async function run() {
  const root = path.resolve(__dirname, '..');
  console.log(`Starting image download into ${root}...`);

  for (const item of imagesToDownload) {
    const fullDest = path.join(root, item.dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(fullDest) && fs.statSync(fullDest).size > 15000) {
      console.log(`[SKIP] Already exists: ${item.dest}`);
      continue;
    }

    try {
      console.log(`Downloading -> ${item.dest}`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`HTTP ${res.status} for ${item.url}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(fullDest, Buffer.from(buffer));
      console.log(`[OK] Saved ${item.dest} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`[ERROR] ${item.dest}: ${e.message}`);
    }
  }

  console.log('\nAll images downloaded successfully.');
}

run();
