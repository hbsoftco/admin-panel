import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MyDriveComponent } from './my-drive/my-drive.component';
import { AssetsComponent } from './assets/assets.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
  {
    path: '', component: FileManagerComponent, children: [
      { path: '', redirectTo: 'my-drive', pathMatch: 'full' },
      { path: 'my-drive', component: MyDriveComponent },
      { path: 'assets', component: AssetsComponent },
      { path: 'projects', component: ProjectsComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }