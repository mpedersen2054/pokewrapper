
### creating a new npm package

If you've ever written code in nodejs, you surely know what a package is. A package is a modularized container of code you can download from npm, which adds it to ./node_modules of the current directory, to use anywhere in your code.

#### create a new repo in github (this assumes you already know how to do this)

#### set the npm credentials (located in ~/.npmrc)

If you know your '~/.npmrc' file is on point, you can skip the next 2 steps.

```
$ npm set init-author-name 'Your Name Here'
$ npm set init-author-email 'your@email.com'
$ npm set init-author-url 'a website?'
$ npm set init-author-license 'MIT'
$ npm set save-exactly true
```

All are pretty self-explainatory. save-exactly make its so when you download a package it will download an exact version, versus something like `package@^1.0.0`

#### create an account with npm

after you create an account with npm, we will run:

```
$ npm adduser
> Username: <your-username-here>
> Password: <your-password-here>
> Email: <your-email-here>
```

This is used to create your authToken in your .npmrc, keep this private/secret.

#### create your package.json

To create a package.json, in your root directory type in the command line `$ npm init` and it will prompt you with a bunch of questions and eventually spit out a scaffolded package.json file for you. It would be smart to use "version": "1.0.0".

#### create your library!

In the project root you specified when scaffolding the package.json, make sure it `module.exports = xxx` the methods you want to be outward facing for your library.

### publish your package to npm

all you need to do to publish to npm now is run `$ npm publish` in the root directory and it will go out and publish the package to npm.

We can run `$ npm info <package-name>` and it should show a config object that looks similar to package.json.

Try going into a different directory and install your package. Use the methods exposed in your package inside of the new directory and it should work!

A good way to play with your new package is to enter the node REPL, make sure the module is installed in the directory you are in, and require it & test it out.

### updating the module

version: X.Y.Z , ex: 4.2.0
X = major version change
Y = minor release, associated to new features, no breaking api changes
Z = patch release, bug fix

In your `package.json` 'version' should be '1.0.0'. Since we made a minor change, and the change doesn't break the 1.Y.Z version, we will update 'version' to be '1.1.0'

package.json
```javascript
{
  // ...
  "version": "1.1.0"
  // ...
}
```

commit to github:
```
$ git add .
$ git commit "updating package version"
$ git tag 1.1.0
$ git push
$ git push --tags
$ npm publish
$ npm info <package-name>
```

npm info <package-name> should show you the current version of the package, 1.1.0