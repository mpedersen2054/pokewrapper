

### updating the module

version: X.Y.Z , ex: 1.0.0
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