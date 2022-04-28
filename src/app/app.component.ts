import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  teste: FormControl = new FormControl('teste', Validators.required);

  marcador: string;
  nome: string;
  idade: number;

  contador: number = 1;

  cores: string[] = [
    'primary',
    'secundary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];

  color: string = 'danger';

  pessoas: any[] = [];

  constructor(public pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista() {
    this.pessoaService.obterTodasPessoas().subscribe((result: any[]) => {
      this.pessoas = result;
    });
  }

  adicionar() {
    this.pessoaService
      .salvarPessoa({
        nome: this.nome,
        idade: this.idade,
      })
      .subscribe((result) => {
        this.pessoas.push(result);
      });
    this.nome = null;
    this.idade = null;
  }

  remover(id: string) {
    this.pessoaService.deletarPessoaPorId(id).subscribe({
      next: (result) => {
        this.carregarLista();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getColor(index: number) {
    return 'list-group-item-' + this.cores[index % this.cores.length];
  }
}
