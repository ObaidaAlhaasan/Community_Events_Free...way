A website and user system starter. Implemented with Express and Backbone.
## Technology

Server side, Drywall is built with the [Express](http://expressjs.com/)
framework. We're using [MongoDB](http://www.mongodb.org/) as a data store.

The front-end is built with [Backbone](http://backbonejs.org/).
We're using [Grunt](http://gruntjs.com/) for the asset pipeline.

| On The Server | On The Client  | Development |
| ------------- | -------------- | ----------- |
| Express       | Bootstrap      | Grunt       |
| Jade          | Backbone.js    |             |
| Mongoose      | jQuery         |             |
| Passport      | Underscore.js  |             |
| Async         | Font-Awesome   |             |
| EmailJS       | Moment.js      |             |
## Live demo

| Platform                       | Username | Password |
| ------------------------------ | -------- | -------- |
| https://drywall.herokuapp.com/ | root     | 123456   |

__Note:__ Event Community _ users_management sysytem and Event management ADD || DELETE || EDIT

Nice Home page  



## Running the app

```bash
$ npm start

# > Drywall@0.0.0 start /Users/jedireza/projects/jedireza/drywall
# > grunt

# Running "copy:vendor" (copy) task
# ...

# Running "concurrent:dev" (concurrent) task
# Running "watch" task
# Running "nodemon:dev" (nodemon) task
# Waiting...
# [nodemon] v1.3.7
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching: *.*
# [nodemon] starting `node app.js`
# Server is running on port 3000
```

Now just use the reset password feature to set a password.

 - Go to `http://localhost:3000/login/forgot/`
 - Submit your email address and wait a second.
 - Go check your email and get the reset link.
 - `http://localhost:3000/login/reset/:email/:token/`
 - Set a new password.

Login. Customize. Enjoy.


## Philosophy

 - Create a website and user system.
 - Write code in a simple and consistent way.
 - Only create minor utilities or plugins to avoid repetitiveness.
 - Find and use good tools.
 - Use tools in their native/default behavior.


## Features

 - Basic front end web pages.
 - Contact page has form to email.
 - Login system with forgot password and reset password.
 - Signup and Login with Facebook, Twitter, GitHub, Google and Tumblr.
 - Optional email verification during signup flow.
 - User system with separate account and admin roles.
 - Admin groups with shared permission settings.
 - Administrator level permissions that override group permissions.



## License

MIT
