const fs = require('fs');
const path = require('path');
const spawn = require('cross-spawn');

if (!fs.existsSync(path.resolve(__dirname, '/src/refactor-this/node_modules'))) {
  
  const result = spawn.sync(
    'npm',
    ['--cwd', path.resolve(__dirname, '/src/refactor-this'), 'install'],
    {
      stdio: 'inherit'
    }
  );
  console.log(result+'wade');
}