export interface UsuariosListApi{
    err: boolean,
    message: string,
    data: UsuariosListdata
}


export interface UsuariosListdata{
   currentPage: number,
   rows: number,
   totalRows: number,
   totalPages: number,
   items:UsuariosListItems[]
}

export interface UsuariosListItems{
 idUserLanding: number,
 names: string,
 lastNames: string,
 email: string,
 phone: string,
 password:string,
 photo: string,
 active: boolean
}

export interface UsuariosGetApi{
 err: boolean,
 message: string,
 data: Usuario
}



export interface Usuario{
   idUserLanding: number,
   names: string,
   lastNames: string,
   email: string,
   phone: string,
   password: string,
   photo: string,
   active: string,
}

