import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../../core/notification';
import { PedidosService } from '../../../services/pedidos/pedidos.service';
import { Pedidos } from '../../../core/models/pedidos/pedidos.model';

@Component({
  selector: 'app-pedidos-edit',
  standalone: false,
  templateUrl: './pedidos-edit.html',
  styleUrls: ['./pedidos-edit.scss']
})
export class PedidosEditComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  pedidoId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: PedidosService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      clienteId: ['', Validators.required],
      empresaId: ['', Validators.required],
      observacao: [''],
      data: [''],
    });

    this.pedidoId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.pedidoId;

    if (this.isEdit && this.pedidoId) {
      this.service.obterPorId(this.pedidoId).subscribe((pedido: Pedidos) => {
        this.form.patchValue(pedido);
      });
    }
  }

  salvar() {
    if (this.form.invalid) {
      this.notify.show('Dados inválidos!');
      return;
    }

    const dados = this.form.value;

    if (this.isEdit && this.pedidoId) {
      this.service.atualizar(this.pedidoId, dados).subscribe(() => {
        this.notify.show('Dados atualizados com sucesso!');
        this.router.navigate(['/pedidos']);
      });
    } else {
      this.service.criar(dados).subscribe(() => {
        this.notify.show('Novo pedido cadastrado com sucesso!');
        this.router.navigate(['/pedidos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/pedidos']);
  }
}