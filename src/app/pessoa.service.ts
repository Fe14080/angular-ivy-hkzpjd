import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PessoaService {
  apiURL: string =
    'https://crudcrud.com/api/6ffd5c8c601049f3abdc7ef1a9fa8d80/pessoa';

  constructor(public httpClient: HttpClient) {}

  obterTodasPessoas() {
    return this.httpClient.get(this.apiURL);
  }

  salvarPessoa(pessoa: any) {
    return this.httpClient.post(this.apiURL, pessoa);
  }

  deletarPessoaPorId(id: string) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }
}
