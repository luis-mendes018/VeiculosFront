import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:7215/api/v1/';

  constructor(private http: HttpClient) {}

  // Get empresas com paginação
  getEmpresasAssistencia(
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.baseUrl}EmpresasAssistencia/empresas`, {
      params,
    });
  }

  // Get todas as empresas assistencia (sem paginação)
  getTodasEmpresasAssistencia(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}EmpresasAssistencia/empresas/todas`
    );
  }

  // Get empresa por ID
  getEmpresaAssistencia(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}EmpresasAssistencia/empresas/${id}`
    );
  }

  // Buscar empresas assistencia por nome com paginação
  buscarEmpresasAssistencia(
    nome: string,
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('nome', nome)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(
      `${this.baseUrl}EmpresasAssistencia/buscarEmpresas`,
      { params }
    );
  }

  // Adicionar nova empresa assistencia
  adicionarEmpresaAssistencia(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}EmpresasAssistencia/adicionarEmpresa`,
      data
    );
  }

  // Editar uma empresa assistencia existente
  editarEmpresaAssistencia(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}EmpresasAssistencia/editarEmpresa/${id}`,
      data
    );
  }

  // Excluir uma empresa assistencia
  excluirEmpresaAssistencia(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}EmpresasAssistencia/excluirEmpresa/${id}`
    );
  }

  //Grupos

  getGruposVeiculos(pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.baseUrl}GruposVeiculos/grupos`, {
      params,
    });
  }

  getGruposVeiculosSemPaginacao(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}GruposVeiculos/grupos/todos`);
  }

  // Get grupo de veículo por ID
  getGrupoVeiculo(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}GruposVeiculos/grupos/${id}`);
  }

  // Buscar grupos de veículos por nome com paginação
  buscarGruposVeiculos(
    nome: string,
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('nome', nome)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.baseUrl}GruposVeiculos/buscarGrupos`, {
      params,
    });
  }

  // Adicionar novo grupo de veículo
  adicionarGrupoVeiculo(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}GruposVeiculos/adicionarGrupo`,
      data
    );
  }

  // Editar um grupo de veículo existente
  editarGrupoVeiculo(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}GruposVeiculos/editarGrupo/${id}`,
      data
    );
  }

  // Excluir um grupo de veículo
  excluirGrupoVeiculo(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}GruposVeiculos/excluirGrupo/${id}`
    );
  }

  // Veículos

  getVeiculos(pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.baseUrl}Veiculos/listaVeiculos`, {
      params,
    });
  }

  // Get veículo por ID
  getVeiculo(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}Veiculos/veiculos/${id}`);
  }

  // Buscar veículos por nome (modelo) com paginação
  buscarVeiculos(
    nome: string,
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('nome', nome)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.baseUrl}Veiculos/buscarVeiculos`, {
      params,
    });
  }

  // Adicionar novo veículo
  adicionarVeiculo(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}Veiculos/AdicionarVeiculo`,
      data
    );
  }

  // Editar um veículo existente
  editarVeiculo(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}Veiculos/editarVeiculo/${id}`,
      data
    );
  }

  // Excluir um veículo
  excluirVeiculo(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.baseUrl}Veiculos/excluirVeiculo/${id}`
    );
  }

  // planos
  getPlanosAssistencia(pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(`${this.baseUrl}PlanosAssistencia/planos`, {
      params,
    });
  }

  // Get plano de assistência por ID
  getPlanoAssistencia(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}PlanosAssistencia/planos/${id}`);
  }



  // Adicionar novo plano de assistência
  adicionarPlanoAssistencia(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}PlanosAssistencia/adicionarPlano`, data);
  }

  // Editar um plano de assistência existente
  editarPlanoAssistencia(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}PlanosAssistencia/editarPlano/${id}`, data);
  }

  // Excluir um plano de assistência
  excluirPlanoAssistencia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}PlanosAssistencia/excluirPlano/${id}`);
  }

  //Veículos assistência
  getVeiculosAssistencia(
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(
      `${this.baseUrl}veiculosassistencia/listaVeiculosAssistencia`,
      { params }
    );
  }

  adicionarVeiculoPlano(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}veiculosassistencia/adicionarVeiculoPlano`,
      data
    );
  }

  getPlanosPorVeiculo(veiculoId: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}veiculosassistencia/veiculo/${veiculoId}/planos`
    );
  }

  removerVeiculoPlano(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}VeiculosAssistencia/removerVeiculoPlano/${id}`);
  }


  getTodosPlanosAssistencia(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}PlanosAssistencia/planos/todos`);
  }

  getTodosVeiculos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}Veiculos/listaVeiculos/todos`);
  }

  getAssociacaoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}VeiculosAssistencia/veiculoAssistencia/${id}`);
  }

  editarVeiculoPlano(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}Veiculosassistencia/editarVeiculoPlano/${id}`,
      data
    );
  }


}
