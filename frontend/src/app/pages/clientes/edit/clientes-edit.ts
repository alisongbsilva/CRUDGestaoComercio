import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../core/notification';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { Clientes } from '../../../core/models/clientes/clientes.model';

@Component({
  selector: 'app-clientes-edit',
  standalone: false,
  templateUrl: './clientes-edit.html',
  styleUrls: ['./clientes-edit.scss']
})
export class ClientesEditComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  clienteId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ClientesService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      empresaId: [''],
    });

    this.clienteId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.clienteId;

    if (this.isEdit && this.clienteId) {
      this.service.obterPorId(this.clienteId).subscribe((cliente: Clientes) => {
        this.form.patchValue(cliente);
      });
    }
  }

  salvar() {
    if (this.form.invalid) {
      this.notify.show('Dados inválidos!');
      return;
    }

    const dados = this.form.value;

    if (this.isEdit && this.clienteId) {
      this.service.atualizar(this.clienteId, dados).subscribe(() => {
        this.notify.show('Dados atualizados com sucesso!');
        this.router.navigate(['/clientes']);
      });
    } else {
      this.service.criar(dados).subscribe(() => {
        this.notify.show('Novo cliente cadastrado com sucesso!');
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/clientes']);
  }
}