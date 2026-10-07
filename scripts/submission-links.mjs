import { execFileSync } from 'node:child_process';
const files = ['README.md', 'src/AboutUs.jsx', 'src/App.css', 'src/App.jsx', 'src/CartSlice.jsx', 'src/ProductList.jsx', 'src/CartItem.jsx'];
let repository = process.argv[2];
if (!repository) {
  try { repository = execFileSync('git', ['remote', 'get-url', 'origin'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); }
  catch { console.error('Uso: pnpm submission:links https://github.com/TU_USUARIO/e-plantShopping'); process.exit(1); }
}
repository = repository.replace(/^git@github\.com:/, 'https://github.com/').replace(/\.git$/, '').replace(/\/$/, '');
if (!/^https:\/\/github\.com\/[\w-]+\/e-plantShopping$/.test(repository)) {
  console.error('El repositorio debe ser https://github.com/TU_USUARIO/e-plantShopping'); process.exit(1);
}
for (const file of files) console.log(`${file}: ${repository}/blob/main/${file}`);
console.log('\nEstos enlaces deben abrirse sin iniciar sesión antes de enviarlos.');
