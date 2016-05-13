# tellmewhentovote
Dev repo for [tellmewhentovote.com](http://tellmewhentovote.com), a database of upcoming polling days by state and date.

![screencap](http://blackhole.impractic.al/down/tmwtv.png)

##usage

<b>tellmewhentovote</b> is built on the MEAN stack.

```
brew install mongodb
```

set up authentication, users, and roles; then mongoimport the dates into the database (fill in the values for each switch):

```
mongoimport --username --password --db  --collections  --type csv --headerline --file
```

```
npm install
```

Now, in one terminal window run `gulp`, and in another run `node server.js`.

These will in turn output:

```
[02:24:38] Starting 'sass'...
[02:24:38] Finished 'sass' after 14 ms
[02:24:38] Starting 'watch'...
[02:24:38] Finished 'watch' after 9.89 ms
[02:24:38] Starting 'default'...
[02:24:38] Finished 'default' after 30 μs
[02:28:55] Starting 'sass'...
[02:28:55] Finished 'sass' after 2.24 ms
```

```
Database connection ready
App now running on port 8080
```

<b>All client-side assets are located in </b>`public/`
