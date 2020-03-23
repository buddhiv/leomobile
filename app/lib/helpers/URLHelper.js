const UrlHelper = {
    checkUrlPattern: function (url) {
        if (!isNaN(url)) {
            return false;
        }
        if (url === undefined || url === null) {
            return false;
        }

        let urlRegex = /^(\[[A-z0-9 _]*\]\()?((?:(https):\/\/)?(?:[\w-]+\.)+[a-z]{2,6})((\/))?$/gm;

        let match = urlRegex.test(url.replace(/\s+$/g, ''));
        return match;
    },

    jQueryLikeParamSerializer: function (params) {
        if (!params) {
            return '';
        }
        var parts = [];
        serialize(params, '', true);
        return parts.join('&');

        function serialize(toSerialize, prefix, topLevel) {
            if (toSerialize === null || isUndefined(toSerialize)) {
                return;
            }
            if (isArray(toSerialize)) {
                forEach(toSerialize, function (value, index) {
                    serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
                });
            } else if (isObject(toSerialize) && !isDate(toSerialize)) {
                forEachSorted(toSerialize, function (value, key) {
                    serialize(
                        value,
                        prefix + (topLevel ? '' : '[') + key + (topLevel ? '' : ']'),
                    );
                });
            } else {
                parts.push(
                    encodeUriQuery(prefix) +
                    '=' +
                    encodeUriQuery(serializeValue(toSerialize)),
                );
            }
        }

        function forEach(obj, iterator, context) {
            var key, length;
            if (obj) {
                if (isFunction(obj)) {
                    for (key in obj) {
                        // Need to check if hasOwnProperty exists,
                        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
                        if (
                            key != 'prototype' &&
                            key != 'length' &&
                            key != 'name' &&
                            (!obj.hasOwnProperty || obj.hasOwnProperty(key))
                        ) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                } else if (isArray(obj) || isArrayLike(obj)) {
                    var isPrimitive = typeof obj !== 'object';
                    for (key = 0, length = obj.length; key < length; key++) {
                        if (isPrimitive || key in obj) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                } else if (obj.forEach && obj.forEach !== forEach) {
                    obj.forEach(iterator, context, obj);
                } else if (isBlankObject(obj)) {
                    // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
                    for (key in obj) {
                        iterator.call(context, obj[key], key, obj);
                    }
                } else if (typeof obj.hasOwnProperty === 'function') {
                    // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
                    for (key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                } else {
                    // Slow path for objects which do not have a method `hasOwnProperty`
                    for (key in obj) {
                        if (hasOwnProperty.call(obj, key)) {
                            iterator.call(context, obj[key], key, obj);
                        }
                    }
                }
            }
            return obj;
        }

        function isFunction(value) {
            return typeof value === 'function';
        }

        function isArrayLike(obj) {
            // `null`, `undefined` and `window` are not array-like
            if (obj == null || isWindow(obj)) {
                return false;
            }

            // arrays, strings and jQuery/jqLite objects are array like
            // * jqLite is either the jQuery or jqLite constructor function
            // * we have to check the existence of jqLite first as this method is called
            //   via the forEach method when constructing the jqLite object in the first place
            if (isArray(obj) || isString(obj) || (jqLite && obj instanceof jqLite)) {
                return true;
            }

            // Support: iOS 8.2 (not reproducible in simulator)
            // "length" in obj used to prevent JIT error (gh-11508)
            var length = 'length' in Object(obj) && obj.length;

            // NodeList objects (with `item` method) and
            // other objects with suitable length characteristics are array-like
            return (
                isNumber(length) &&
                ((length >= 0 && (length - 1 in obj || obj instanceof Array)) ||
                    typeof obj.item === 'function')
            );
        }

        function isBlankObject(value) {
            return (
                value !== null && typeof value === 'object' && !getPrototypeOf(value)
            );
        }

        function forEachSorted(obj, iterator, context) {
            var keys = Object.keys(obj).sort();
            for (var i = 0; i < keys.length; i++) {
                iterator.call(context, obj[keys[i]], keys[i]);
            }
            return keys;
        }

        function isDate(value) {
            return toString.call(value) === '[object Date]';
        }

        function isUndefined(value) {
            return typeof value === 'undefined';
        }

        function isObject(value) {
            // http://jsperf.com/isobject4
            return value !== null && typeof value === 'object';
        }

        function encodeUriQuery(val, pctEncodeSpaces) {
            return encodeURIComponent(val)
                .replace(/%40/gi, '@')
                .replace(/%3A/gi, ':')
                .replace(/%24/g, '$')
                .replace(/%2C/gi, ',')
                .replace(/%3B/gi, ';')
                .replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
        }

        function serializeValue(v) {
            if (isObject(v)) {
                return isDate(v) ? v.toISOString() : toJson(v);
            }
            return v;
        }

        function forEachSorted(obj, iterator, context) {
            var keys = Object.keys(obj).sort();
            for (var i = 0; i < keys.length; i++) {
                iterator.call(context, obj[keys[i]], keys[i]);
            }
            return keys;
        }

        function isArray(array) {
            return Array.isArray(array);
        }
    },
};

export default UrlHelper;
