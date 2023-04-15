import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Usuario } from '../../types';

interface FormProps {
	modo: 'login' | 'cadastro';
}

const Form: React.FC<FormProps> = ({ modo }) => {
	const [email, setEmail] = useState('');
	const [erroEmail, setErroEmail] = useState(false);
	const [senha, setSenha] = useState('');
	const [repetirSenha, setRepetirSenha] = useState('');
	const [usuarios, setUsuarios] = useState<Usuario[]>([]);

	// useEffect - ciclos de vida
	// 1 - quando o componente carrega - nasce
	useEffect(() => {
		const dadosStorage = localStorage.getItem('usuarios');

		if (dadosStorage) {
			setUsuarios(JSON.parse(dadosStorage));
		}

		// 3 - quando ele desmonta - morre
		return () => {
			clearInput();
		};
	}, []);

	// 2 - quando um estado do componente atualizar - morre e vive de novo
	useEffect(() => {
		if (email.length > 0 && !email.includes('@' && '.com')) {
			setErroEmail(true);
		} else {
			setErroEmail(false);
		}
	}, [email]);

	useEffect(() => {
		if (usuarios.length > 0) {
			localStorage.setItem('usuarios', JSON.stringify(usuarios));
		}
	}, [usuarios]);

	// logar usuario
	const logar = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		alert('Logar!');
	};

	// cadastrar usuario
	const cadastro = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		// quais regras de cadastro?
		// verifica se preencheu os campos
		if (!email || !email.includes('@' && '.com')) {
			alert('Digite um e-mail válido!');
			return;
		}

		if (senha.length < 6 || senha !== repetirSenha) {
			alert('Preencha os campos de senha corretamente!');
			return;
		}

		if (usuarios.some((usuario) => usuario.email === email)) {
			alert('Este e-mail já está cadastrado!');
			return;
		}

		const novoUsuario: Usuario = {
			email,
			senha,
			recados: [],
		};

		// ... ==> isso aqui serve para copiar a lista anterior e manter os dados do estado antigo no novo
		setUsuarios((antigo) => [...antigo, novoUsuario]);
		alert('Cadastrado com sucesso!');
		clearInput();
	};

	const clearInput = () => {
		setEmail('');
		setSenha('');
		setRepetirSenha('');
	};

	return (
		<Box
			onSubmit={modo === 'login' ? logar : cadastro}
			component='form'
			padding={3}
		>
			<TextField
				error={erroEmail}
				value={email}
				onChange={(ev) => setEmail(ev.target.value)}
				margin='normal'
				id='email'
				label='E-mail'
				variant='outlined'
				fullWidth
			/>
			<TextField
				value={senha}
				onChange={(ev) => setSenha(ev.target.value)}
				margin='normal'
				id='password'
				label='Senha'
				variant='outlined'
				fullWidth
			/>
			{modo === 'cadastro' ? (
				<TextField
					value={repetirSenha}
					onChange={(ev) => setRepetirSenha(ev.target.value)}
					margin='normal'
					id='repassword'
					label='Repetir Senha'
					variant='outlined'
					fullWidth
				/>
			) : (
				<></>
			)}
			<Button
				type='submit'
				variant='contained'
				size='large'
				fullWidth
				sx={{ marginTop: 2 }}
			>
				{modo === 'login' ? 'Logar' : 'Cadastre-se'}
			</Button>
		</Box>
	);
};

export default Form;
