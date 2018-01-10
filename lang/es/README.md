# as-cn

Este pequeña función permite gestionar nombres de clase

## Modo 1

de este modo ud puede extraer nombres de un objeto mediante el índice, este posee una comprobación de definición.

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

## Modo 2

de este modo ud puede extraer nombres de un módulo mediante un objeto paralelo que apunte a
cada propiedad del objeto módulo.

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

