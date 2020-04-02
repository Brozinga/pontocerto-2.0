import React from 'react'
import { AiOutlineUser, AiOutlineUnlock } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/images/logo-w300.png';

import './style.scss';

export default function Login() {

    const history = useHistory();

    function handleTimesheet(e) {
        e.preventDefault();
        history.push('/timesheet');
    }

    return (
        <div className="background">
            <div className="container flex-center">
                <div className="container-logo">
                    <img src={Logo} alt="ponto certo" />
                </div>
                <form className="login" onSubmit={handleTimesheet}>
                    <div className="mrg login-input">
                        <AiOutlineUser size={22} color='#8e8e8e' />
                        <input name="username" type="email" placeholder="Nome de usuário" />
                    </div>
                    <div className="mrg login-input">
                        <AiOutlineUnlock size={22} color='#8e8e8e' />
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
