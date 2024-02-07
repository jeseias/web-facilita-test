declare namespace Client {
  interface Model {
    id: number;
    name: string;
    email: string;
    phone: string;
    position_y: number
    position_x: number
    distance?: number
  }

  interface CreateClientParams {
    name: string 
    name: string 
    phone: string
  }
}
