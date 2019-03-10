var dynamizer=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";function r(e){return!(!e||"function"!=typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function i(e,t,n){return Object.keys(e).reduce(function(t,r){var i=""+r;return t.has(i)?t.set(i,n(t.get(i),e[i])):t},t)}n.r(t),n.d(t,"schema",function(){return k}),n.d(t,"normalize",function(){return w}),n.d(t,"denormalize",function(){return P});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(e){return function(t){return r(t)?t.get(e):t[e]}},p=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(u(this,e),!t||"string"!=typeof t)throw new Error("Expected a string key for Entity, but found "+t+".");var i=r.idAttribute,o=void 0===i?"id":i,a=r.mergeStrategy,f=void 0===a?function(e,t){return c({},e,t)}:a,s=r.processStrategy,p=void 0===s?function(e){return c({},e)}:s;this._key=t,this._getId="function"==typeof o?o:h(o),this._idAttribute=o,this._mergeStrategy=f,this._processStrategy=p,this.define(n)}return e.prototype.define=function(e){this.schema=Object.keys(e).reduce(function(t,n){var r,i=e[n];return c({},t,((r={})[n]=i,r))},this.schema||{})},e.prototype.getId=function(e,t,n){return this._getId(e,t,n)},e.prototype.merge=function(e,t){return this._mergeStrategy(e,t)},e.prototype.normalize=function(e,t,n,r,i){var u=this,a=this._processStrategy(e,t,n);return Object.keys(this.schema).forEach(function(e){if(a.hasOwnProperty(e)&&"object"===o(a[e])){var t=u.schema[e];a[e]=r(a[e],a,e,t,i)}}),i(this,a,e,t,n),this.getId(e,t,n)},e.prototype.denormalize=function(e,t){var n=this;return r(e)?i(this.schema,e,t):(Object.keys(this.schema).forEach(function(r){if(e.hasOwnProperty(r)){var i=n.schema[r];e[r]=t(e[r],i)}}),e)},a(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),y=function(){function e(t,n){u(this,e),n&&(this._schemaAttribute="string"==typeof n?function(e){return e[n]}:n),this.define(t)}return e.prototype.define=function(e){this.schema=e},e.prototype.getSchemaAttribute=function(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)},e.prototype.inferSchema=function(e,t,n){if(this.isSingleSchema)return this.schema;var r=this.getSchemaAttribute(e,t,n);return this.schema[r]},e.prototype.normalizeValue=function(e,t,n,r,i){var o=this.inferSchema(e,t,n);if(!o)return e;var u=r(e,t,n,o,i);return this.isSingleSchema||null==u?u:{id:u,schema:this.getSchemaAttribute(e,t,n)}},e.prototype.denormalizeValue=function(e,t){var n=r(e)?e.get("schema"):e.schema;return this.isSingleSchema||n?t((r(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):e},a(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),l=function(e){function t(n,r){if(u(this,t),!r)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return s(this,e.call(this,n,r))}return f(t,e),t.prototype.normalize=function(e,t,n,r,i){return this.normalizeValue(e,t,n,r,i)},t.prototype.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(y),d=function(e){function t(){return u(this,t),s(this,e.apply(this,arguments))}return f(t,e),t.prototype.normalize=function(e,t,n,r,i){var o=this;return Object.keys(e).reduce(function(t,n,u){var a,f=e[n];return null!=f?c({},t,((a={})[n]=o.normalizeValue(f,e,n,r,i),a)):t},{})},t.prototype.denormalize=function(e,t){var n=this;return Object.keys(e).reduce(function(r,i){var o,u=e[i];return c({},r,((o={})[i]=n.denormalizeValue(u,t),o))},{})},t}(y),m=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},b=function(e){return Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t]})},v=function(e,t,n,r,i,o){return e=m(e),b(t).map(function(t,u){return i(t,n,r,e,o)})},g=function(e,t,n){return e=m(e),t&&t.map?t.map(function(t){return n(t,e)}):t},j=function(e){function t(){return u(this,t),s(this,e.apply(this,arguments))}return f(t,e),t.prototype.normalize=function(e,t,n,r,i){var o=this;return b(e).map(function(e,u){return o.normalizeValue(e,t,n,r,i)}).filter(function(e){return null!=e})},t.prototype.denormalize=function(e,t){var n=this;return e&&e.map?e.map(function(e){return n.denormalizeValue(e,t)}):e},t}(y),O=function(e,t,n,r,i,o){var u=c({},t);return Object.keys(e).forEach(function(n){var r=e[n],a=i(t[n],t,n,r,o);null==a?delete u[n]:u[n]=a}),u},_=function(e,t,n){if(r(t))return i(e,t,n);var o=c({},t);return Object.keys(e).forEach(function(t){o[t]&&(o[t]=n(o[t],e[t]))}),o},S=function(){function e(t){u(this,e),this.define(t)}return e.prototype.define=function(e){this.schema=Object.keys(e).reduce(function(t,n){var r,i=e[n];return c({},t,((r={})[n]=i,r))},this.schema||{})},e.prototype.normalize=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return O.apply(void 0,[this.schema].concat(t))},e.prototype.denormalize=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return _.apply(void 0,[this.schema].concat(t))},e}(),k={Array:j,Entity:p,Object:S,Union:l,Values:d},w=function(e,t){if(!e||"object"!==(void 0===e?"undefined":o(e)))throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+(void 0===e?"undefined":o(e))+'".');var n={},r=function(e){return function(t,n,r,i,o){var u=t.key,a=t.getId(r,i,o);u in e||(e[u]={});var c=e[u][a];e[u][a]=c?t.merge(c,n):n}}(n);return{entities:n,result:function e(t,n,r,i,u){return"object"===(void 0===t?"undefined":o(t))&&t?"object"!==(void 0===i?"undefined":o(i))||i.normalize&&"function"==typeof i.normalize?i.normalize(t,n,r,e,u):(Array.isArray(i)?v:O)(i,t,n,r,e,u):t}(e,e,null,t,r)}},z=function(e){var t={},n=A(e);return function e(i,u){return"object"!==(void 0===u?"undefined":o(u))||u.denormalize&&"function"==typeof u.denormalize?null==i?i:u instanceof p?function(e,t,n,i,u){var a=i(e,t);if("object"!==(void 0===a?"undefined":o(a))||null===a)return a;if(u[t.key]||(u[t.key]={}),!u[t.key][e]){var f=r(a)?a:c({},a);u[t.key][e]=f,u[t.key][e]=t.denormalize(f,n)}return u[t.key][e]}(i,u,e,n,t):u.denormalize(i,e):(Array.isArray(u)?g:_)(u,i,e)}},A=function(e){var t=r(e);return function(n,r){var i=r.key;return"object"===(void 0===n?"undefined":o(n))?n:t?e.getIn([i,n.toString()]):e[i][n]}},P=function(e,t,n){if(void 0!==e)return z(n)(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnsupportedSchemaType=new Error("Unsupported Schema Type"),t.UnexpectedFormatType=new Error("Unexpected Format Type, in dataTransform function")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n(5);t.dynaSchemaCreator=i.default,t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(4);t.default=function(e,t){return i.default(e,r.normalize(e.targetParameterName?t[e.targetParameterName]:t,e.normalizrSchema))}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=function(e,t){switch(typeof e){case"string":return t[e];case"object":return Object.keys(e).map(function(n){return{key:n,data:o(e[n],t)}}).reduce(function(e,t){var n;return r({},e,((n={})[t.key]=t.data,n))},{});default:throw i.UnexpectedFormatType}},u=function(e,t){return Object.keys(t).map(function(n){return{itemKey:n,data:Object.keys(t[n]).map(function(r){return{id:r,data:o(e[n],t[n][r])}}).reduce(function(e,t){var n;return r({},e,((n={})[t.id]=t.data,n))},{})}}).reduce(function(e,t){var n;return r({},e,((n={})[t.itemKey]=t.data,n))},{})};t.default=function(e,t){return{entities:u(e.transformerSchema,t.entities),result:t.result}}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(1),u=n(6),a=function(e){return new i.schema.Entity(e.name,e.definition?c(e.definition):{},e.idAttribute?{idAttribute:e.idAttribute}:{})},c=function(e){return Object.keys(e).map(function(t){return{name:t,schema:f(e[t])}}).reduce(function(e,t){var n;return r({},e,((n={})[t.name]=t.schema,n))},{})},f=function(e){switch(e.type){case u.schemaTypes.Entity:return a(e);case u.schemaTypes.Array:return new i.schema.Array(a(e));default:throw o.UnsupportedSchemaType}},s=function(e,t){var n;void 0===t&&(t={});var r=e.definition;return r&&Object.keys(r).forEach(function(e){return s(r[e],t)}),Object.assign(t,((n={})[e.name]=e.transform,n))};t.default=function(e){return{normalizrSchema:f(e.schema),transformerSchema:s(e.schema),targetParameterName:e.target,extendErrorCheck:e.errorCheckParam}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Entity="Entity",e.Array="Array"}(t.schemaTypes||(t.schemaTypes={}))}]).umd;