# as-cn

This small function allows you to manage class names

## Mode 1

In this way, you can extract names of an object using the index, which has a definition check.

``` javascript

import {h}   from 'preact';
import cn    from 'as-cn';
import './style.css';

export default function(){
   return <div class={
           cn({
               box : true
           })
       }>
   </div>
}

// <div class="box"></div>
```

## Mode 2

In this way you can extract names of a module by means of a parallel object that points to
each property of the module object.

``` javascript

import {h}   from 'preact';
import cn    from 'as-cn';
import style from './style.css';

export default function(){
   return <div class={
           cn(style,{
               box : true
           })
       }>
   </div>
}
// <div class="box"></div>
```

