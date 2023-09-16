import React, {Component} from 'react'
import './Login.css'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            authenticated: false
        };
    }

    componentDidMount() {
        // Verifique se o usuário está autenticado ao carregar o componente
        const isAuthenticated = localStorage.getItem('authenticated') === 'true';
        if (isAuthenticated) {
            this.setState({ authenticated: true });
        }
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleSenhaChange = (e) => {
        this.setState({ senha: e.target.value });
    }

    handleLogin = () => {
        // Simule a autenticação comparando com dados armazenados no Local Storage.
        const storedEmail = localStorage.getItem('email');
        const storedSenha = localStorage.getItem('senha');

        if (this.state.email === storedEmail && this.state.senha === storedSenha) {
            // Autenticação bem-sucedida
            this.setState({ authenticated: true });
            localStorage.setItem('authenticated', true)
            window.location.href = '/home'
        } else {
            // Autenticação falhou
            alert('Credenciais inválidas');
        }
    }

    createAcount = () => {
        // Obter os valores de email e senha do estado
        const { email, senha } = this.state;

        // Verificar se o email e a senha não estão em branco
        if (email && senha) {
            // Salvar as credenciais no Local Storage
            localStorage.setItem('email', email);
            localStorage.setItem('senha', senha);

            alert('Conta criada com sucesso! Você pode fazer login agora.');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    render() {


        return(
            <div className= "login_body">
                <div className="login">
                    <h1>Login</h1>

                    <label htmlFor='email'>E-mail</label>
                    <input type="text" className="user_data" id='email' value= {this.state.email} onChange = {this.handleEmailChange}></input>

                    <label htmlFor='senha'>Senha</label>
                    <input type="text" className="user_data" id= 'senha' value={this.state.senha} onChange = {this.handleSenhaChange}></input>
                    <button onClick = {this.handleLogin}>Submit</button>
                    <button onClick = {this.createAcount}>Criar conta</button>
                    
                </div>
            </div>
        )
    }
}