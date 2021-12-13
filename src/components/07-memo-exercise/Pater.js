import React, {useCallback} from 'react';

import { Child } from './Child'
import { useState } from 'react';
import '../02-useEffect/effects.css';

export const Pater = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const increment = useCallback((num) => {
        setValor(v => v + num);
    }, [setValor]);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Child 
                        key={ n }
                        num={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Child /> */}
        </div>
    );
};
