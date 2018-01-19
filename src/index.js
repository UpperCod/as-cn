export default function asCn(parent, define = parent, prefix = ''){
    return Object
            .keys(define)
            .map((prop)=>{
                if( typeof define[prop] === 'object' ){
                    return alias(parent[prop]||{},define[prop],prefix+prop);
                }else{
                    return define[prop] ? (
                        parent === define ? prefix+prop : parent[prop]
                    ) : '';
                }
            })
            .filter(value=>value)
            .join(' ');
}