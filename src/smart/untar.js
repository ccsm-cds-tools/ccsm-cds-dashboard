export function untar(raw) {
  let out = [];
  const _parsed = raw
    .split('\u0000')
    .filter(t => t.indexOf('{') == 0 || t.indexOf('[') == 0)
    .map( c => {
      try {
        out.push(JSON.parse(c));
      } catch(e) {
        // console.log(e);
      }
    });

  return out;
}