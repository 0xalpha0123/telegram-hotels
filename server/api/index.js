

export default function handler(request, response) {
  import('../dist/index.js')

  return response.send(`Hello test!`);
}
