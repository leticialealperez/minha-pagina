export type Usuario = {
	email: string;
	senha: string;
	recados: Recado[];
};

export type Recado = {
	id: string;
	titulo: string;
	detalhamento: string;
};
