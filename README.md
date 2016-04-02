# YepWrap

## Fast examples
### With actual none-falsy var's (named `class` here) value
```js
var tpl = '<${ name } $[[class="${ class }"]]>${ content }</${ name }>';

import t from 'yepwrap';

t(tpl, {name:'section',class:'zone-51',content:'42'});
```

result:
```html
<section class="zone-51">42</section>
```

At first glance it available in ES2015:
```js
`<${ name } class="${ class }">${ content }</${ name }>`
```

ok, see next exapmles:

### With actual **falsy** var's (named `class` here) value
```js
import { templateNoSpace as ts } from 'yepwrap'; // likes t, but removes **all** spaces around

ts(tpl, {name:'section',class:null,content:'42'});
```

result:
```html
<section>42</section>
```

```js
import { templateOneSpace as t1s } from 'yepwrap'; // likes t, but removes **extra** spaces around

t1s(tpl, {name:'section',class:null,content:'42'});
```

result (focus on space):
```html
<section >42</section>
```
