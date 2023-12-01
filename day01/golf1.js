console.log(`${require('fs').readFileSync(0)}`.split`
`.map(c=>c.replace(/\D/g,'')).reduce((a,c)=>+`${c[0]}${c.at(-1)}`+a,0))