import React, { useEffect, useState } from 'react'

import './style.scss';

import { EventEmitter } from "../../../services/event";

export default function Loading() {
    
    let loading = '';
    let [visible, setVible] = useState(false);
    EventEmitter.subscribe('loading', event => setVible(event));
    useEffect(() => {
        
        if (visible) {
            loading.classList.add('visible');
        } else {
            loading.classList.remove('visible');
        }
    }, [visible, loading]);

    return (
        <div ref={ref => loading = ref} className="container flex-center loading-container">
            <div className="clock"></div>
            <h2>Carregando...</h2>
        </div>
    )
}
