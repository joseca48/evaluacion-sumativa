import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UbicanosComponent } from './componentes/ubicanos/ubicanos.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { SolicitudesContactosComponent } from './componentes/solicitudes-contactos/solicitudes-contactos/solicitudes-contactos.component';
import { ServiciosDeEmpresaComponent } from './componentes/servicios-de-empresa/servicios-de-empresa.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "ubicanos", component: UbicanosComponent},
  {path: "contactanos", component: ContactanosComponent},
  {path: "solicitudes-contactos", component: SolicitudesContactosComponent},
  {path: "servicios-de-empresa", component: ServiciosDeEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
