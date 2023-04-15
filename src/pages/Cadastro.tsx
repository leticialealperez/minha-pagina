import { Person } from '@mui/icons-material';
import { Avatar, Grid, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Cadastro: React.FC = () => {
	return (
		<Grid
			container
			height='100vh'
		>
			<Grid
				item
				xs={false}
				sm={4}
				md={8}
				bgcolor='black'
				sx={{
					background:
						'url(https://images.pexels.com/photos/15652571/pexels-photo-15652571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center / cover',
				}}
			/>

			<Grid
				item
				xs={12}
				sm={8}
				md={4}
			>
				<Grid
					container
					height='100%'
					alignItems='center'
				>
					<Grid
						item
						xs={12}
						height='50%'
					>
						<Avatar sx={{ bgcolor: pink[500], margin: '0 auto' }}>
							<Person />
						</Avatar>
						<Typography
							variant='h4'
							textAlign='center'
						>
							Criar Conta
						</Typography>
						<Form modo='cadastro' />
						<Typography
							textAlign='center'
							variant='body2'
						>
							Já possui uma conta?{' '}
							<Link
								to='/'
								style={{ color: 'inherit' }}
							>
								Faça Login
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Cadastro;
