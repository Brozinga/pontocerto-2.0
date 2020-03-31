import React from 'react'
import { AiOutlineUser, AiOutlineUnlock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo-w300.png';

import './style.scss';

export default function Login() {
    return (
        <div className="background">
            <div className="container">
                <div className="container-logo">
                    <img src={Logo} alt="ponto certo" />
                </div>
                <form className="login">
                    <div className="mrg login-input">
                        <AiOutlineUser size={22} color='#686868' />
                        <input name="username" type="email" placeholder="Nome de usuário" />
                    </div>
                    <div className="mrg login-input">
                        <AiOutlineUnlock size={22} color='#686868' />
                        <input name="password" type="password" placeholder="Digite a sua senha" />
                    </div>
                    <div className="mrg">
                        <button type="submit" className="btn-primary">
                            ENTRAR
                        </button>
                    </div>
                    <div className="link-container">
                        <Link className="link" to="/esqueci-senha">Esqueci a senha</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
