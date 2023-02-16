export interface Response{
   status: string;
   result: any;
}

export interface Paciente{
   PacienteId: string;
   DNI: string;
   Nombre: string;
   Direccion: string;
   CodigoPostal: string;
   Telefono: string;
   Genero: string;
   FechaNacimiento: string;
   Correo: string;
}
export interface Login{
   usuario:string;
   password:string;
}

export interface ListaPaciente{
   PacienteId: string;
   Nombre: string;
   DNI: string;
   Telefono: string;
   Correo: string;
}