const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(`${req.method} -> ${req.url}`);
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    return res.end('<h1>Home</h1>');
  }

  if (method === "GET" && url === "/puppy") {
    const temp = `<script>console.log(\`${req.method} -> ${req.url}\`)</script>`;
    res.setHeader("Content-Type", "text/html");

    res.write(
      '<div style="background-color: blue;"><h1 style="color: white">Hello World</h1></div>',
    );

    res.write(
      '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnP5Zs8flbGJglqn4RGRLQiywJLb0tToLyywFrM6Ib9g&s"></img>',
    );

    res.write(temp);
    return res.end();
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('404 page not found');
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`listening at port: ${PORT}`);
});
