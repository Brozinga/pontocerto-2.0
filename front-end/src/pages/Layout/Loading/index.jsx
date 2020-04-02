import React, { useEffect } from 'react'

import './style.scss';

export default function Loading({ visible }) {
    let loading = '';

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
