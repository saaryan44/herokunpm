

const a=require('express'); const b=a();
const c=process.env.PORT || 3000; 




b.use(a.static("public"));

b.get("/",(d,e)=>e.send(`<html><body><h1>Index page</h1></body></html>`));

b.get("/link",(d,e)=>e.send(`<html><body><h1>Any other page</h1></body></html>`));

b.get("/weather",(d,e)=>e.send(f.readFileSync("public/weather.html").toString()));

b.get("*",(d,e)=>e.send(`<html><body><h1>Page not found</h1><h4>Only /link and index (/) pages exist.</h4></body></html>`));

b.listen(c,()=>console.log(`listening on port #${c}`));

