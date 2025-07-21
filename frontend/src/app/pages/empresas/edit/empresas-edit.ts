import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../../../services/empresas/empresas.service';
import { Empresas } from '../../../core/models/empresas/empresas.model';

@Component({
  selector: 'app-empresas-edit',
  standalone: false,
  templateUrl: './empresas-edit.html',
  styleUrls: ['./empresas-edit.scss']
})
export class EmpresasEditComponent implements OnInit {
  formEmpresas!: FormGroup;
  isEdit = false;
  empresaId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: EmpresasService
  ) {}

  ngOnInit(): void {
    this.formEmpresas = this.fb.group({
      nomeFantasia: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      cnpj: ['', Validators.required],
    });

    this.empresaId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.empresaId;

    if (this.isEdit && this.empresaId) {
      this.service.obterPorId(this.empresaId).subscribe((empresa: Empresas) => {
        this.formEmpresas.patchValue(empresa);
      });
    }
  }

  salvar() {
    if (this.formEmpresas.invalid) return;

    const dados = this.formEmpresas.value;

    if (this.isEdit && this.empresaId) {
      this.service.atualizar(this.empresaId, dados).subscribe(() => {
        this.router.navigate(['/empresas']);
      });
    } else {
      this.service.criar(dados).subscribe(() => {
        this.router.navigate(['/empresas']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/empresas']);
  }
}