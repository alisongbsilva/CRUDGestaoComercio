import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../../../core/models/produtos/produtos.model';
import { NotificationService } from '../../../core/notification';
import { ProdutosService } from '../../../services/produtos/produtos.service';

@Component({
  selector: 'app-produtos-edit',
  standalone: false,
  templateUrl: './produtos-edit.html',
  styleUrls: ['./produtos-edit.scss']
})
export class ProdutosEditComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  produtoId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ProdutosService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      descricao: [''],
      empresaId: [''],
    });

    this.produtoId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.produtoId;

    if (this.isEdit && this.produtoId) {
      this.service.obterPorId(this.produtoId).subscribe((produtos: Produtos) => {
        this.form.patchValue(produtos);
      });
    }
  }

  salvar() {
    if (this.form.invalid) {
      this.notify.show('Dados inválidos!');
      return;
    }

    const dados = this.form.value;

    if (this.isEdit && this.produtoId) {
      this.service.atualizar(this.produtoId, dados).subscribe(() => {
        this.notify.show('Dados atualizados com sucesso!');
        this.router.navigate(['/produtos']);
      });
    } else {
      this.service.criar(dados).subscribe(() => {
        this.notify.show('Novo produto cadastrado com sucesso!');
        this.router.navigate(['/produtos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/produtos']);
  }
}