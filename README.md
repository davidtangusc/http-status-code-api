To get up and running:

```
npm install
node app.js
```

Sample `fetch` code that you can run in RunJS:

```js
fetch("http://localhost:5000/api/500")
  .then((response) => {
    if (response.status >= 400 && response.status < 600) {
      return response.json().then((data) => {
        throw data;
      });
    }

    return response.json();
  })
  .then(
    (data) => {
      console.log("resolved", data);
    },
    (error) => {
      console.log("rejected", error);
    }
  );
```
