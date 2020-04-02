import React from 'react'

import { AiOutlineMail } from 'react-icons/ai';

import './style.scss';
export default function RescuePassword() {
    return (
        <div className="background">
            <div className="container container-rescue flex-center">
                <main className="container-informations">
                    <h1>Recuperação de Senha</h1>
                    <p>
                        Digite o seu e-mail abaixo, onde enviaremos para sua caixa de entrada as instruções para recuperação.
                        Caso não receba, não esquece de verificar a caixa de SPAM.
                    </p>
                </main>
                <form className="form-rescue">
                    <div className="mrg login-input">
                        <AiOutlineMail size={22} color='#8e8e8e' />
                        <input name="email" type="email" placeholder="Digite o seu e-mail" />
                    </div>

                    <div className="mrg">
                        <button type="submit" className="btn-primary">
                            RECUPERAR SENHA
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
