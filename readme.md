## read, edit, publish new comments using node.js

this project is a very simple, playground for learning how express/backend works.

no data is persistent right now

# how to use:

-   clone it.
-   run `yarn`.
-   run yarn build
-   open `localhost:5000` in your browser

# how does it work?

The plan is to learn how to make a CRUD program with it but for now:

using templating language and API end points, user gets redirected around the application to read, edit existing comments or create new ones.

Comments are separated using universally unique identifiers, a package called `UUID`. Those IDs are recreated each time the server restarts, as I said nothing is persistent right now
