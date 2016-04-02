!(function(global) {

    var t = function(_re, isKeepSpace, tpl, vars) {
        var nope = isKeepSpace ? ' ' : '';

        return tpl
            .replace(_re, function(_, lwrap, name, rwrap) {
                var val = vars[name];
                return val ? (lwrap + val + rwrap) : nope;
            })
            .replace(/\$\{\s*(\w+)\s*\}/g, function(_, name) { return vars[name]; });
    };

    // matches spaces around also
    var ts = t.bind(null, /\s*\$\[\[\s*(.*?)\$\{(\w+)\}(.*?)\s*\]\]\s*/g);

    /**
     * base template api
     */
    global.template = global.t = t.bind(null, /\$\[\[\s*(.*?)\$\{(\w+)\}(.*?)\s*\]\]/g, false);

    /**
     * Template and strip around extra spaces also
     */
    global.templateOneSpace = ts.bind(null, true);

    /**
     * Template and strip around all spaces also
     */
    global.templateNoSpace = ts.bind(null, false);

}(module ? module.exports : window));
