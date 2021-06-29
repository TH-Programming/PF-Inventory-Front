import React from 'react';
import {useState} from 'react';

const useToken = (token = null) => {
    const [tokenStore, applyToken] = useState(null)

    if (tokenStore) {
        return tokenStore
    } else {
        applyToken(token)
    }

    return (
        <div>
            
        </div>
    );
}

export default useToken;
