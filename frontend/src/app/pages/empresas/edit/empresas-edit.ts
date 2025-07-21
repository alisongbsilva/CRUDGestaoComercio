import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../../../services/empresas/empresas.service';
import { Empresas } from '../../../core/models/empresas/empresas.model';
import { NotificationService } from '../../../core/notification';

@Component({
  selector: 'app-empresas-edit',
  standalone: false,
  templateUrl: './empresas-edit.html',
  styleUrls: ['./empresas-edit.scss']
})
export class EmpresasEditComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  empresaId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: EmpresasService,
    private notify: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeFantasia: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      cnpj: ['', Validators.required],
    });

    this.empresaId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.empresaId;

    if (this.isEdit && this.empresaId) {
      this.service.obterPorId(this.empresaId).subscribe((empresa: Empresas) => {
        this.form.patchValue(empresa);
      });
    }
  }

  salvar() {
    if (this.form.invalid) {
      this.notify.show('Dados inválidos!');
      return;
    }

    const dados = this.form.value;

    if (this.isEdit && this.empresaId) {
      this.service.atualizar(this.empresaId, dados).subscribe(() => {
        this.notify.show('Dados atualizados com sucesso!');
        this.router.navigate(['/empresas']);
      });
    } else {
      this.service.criar(dados).subscribe(() => {
        this.notify.show('Nova empresa cadastrada com sucesso!');
        this.router.navigate(['/empresas']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/empresas']);
  }
}