## Content :twisted_rightwards_arrows:

Using this Javascript class you can switch the Content of a Span, Div or really anything.

# Example
If you add the Following to an Website with the Javascript file, it will switch the text with `one`, `two`, `three`, `four`.

All Elements with the Class of `testingSwitch` will be updated.

```html
  <span class="testingSwitch"></span><br>
  <span class="testingSwitch"></span><br>
  <span class="testingSwitch"></span><br>
  <span class="testingSwitch"></span><br>
```
```javascript
  var Testing = new contentSwitcher("testingSwitch", 800, ["one", "two", "three", "four" ] );
  Testing.startSwitching();
```
