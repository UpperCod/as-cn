var asCn = (function () {
'use strict';

function asCn(parent, define, prefix){
    if ( define === void 0 ) define = parent;
    if ( prefix === void 0 ) prefix = '';

    return Object
            .keys(define)
            .map(function (prop){
                if( typeof define[prop] === 'object' ){
                    return alias(parent[prop]||{},define[prop],prefix+prop);
                }else{
                    return define[prop] ? (
                        parent === define ? prefix+prop : parent[prop]
                    ) : '';
                }
            })
            .filter(function (value){ return value; })
            .join(' ');
}

return asCn;

}());
