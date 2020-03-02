import { HomeComponent } from './home-component/home.component';
import { AHeaderTopComponent } from './a-header-top/a-header-top.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SearchModule } from '../search/search.module';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
import { HeaderSideComponent } from './header-side/header-side.component';
import { SidebarSideComponent } from './sidebar-side/sidebar-side.component';

// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
import { HeaderTopComponent } from './header-top/header-top.component';
import { SidebarTopComponent } from './sidebar-top/sidebar-top.component';

// ONLY FOR DEMO
import { CustomizerComponent } from './customizer/customizer.component';

// ALWAYS REQUIRED 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AppComfirmComponent } from '../services/app-confirm/app-confirm.component';
import { AppLoaderComponent } from '../services/app-loader/app-loader.component';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { EgretSidebarComponent, EgretSidebarTogglerDirective } from './egret-sidebar/egret-sidebar.component';
import { BottomSheetShareComponent } from './bottom-sheet-share/bottom-sheet-share.component';
import { EgretExampleViewerComponent } from './example-viewer/example-viewer.component';
import { EgretExampleViewerTemplateComponent } from './example-viewer-template/example-viewer-template.component';
import { InputComponent } from './form-components/input-component/input.component';
import { TextareaComponent } from './form-components/textarea-component/textarea.component';

//--------------------------------------------------------------------
import { BlogPostComponent } from './blog-post-component/blog-post.component';
import { BlogComponent } from './blog-component/blog.component';

import { APanelComponent } from './a-panel/a-panel.component';
import { ASigninSectionComponent } from '../../views/others/a-signin-section/a-signin-section.component';
import { AContactSectionComponent } from '../../views/others/a-contact-section/a-contact-section.component';
import { APostsSectionComponent } from '../../views/others/a-posts-section/a-posts-section.component';
import { AReferencesSectionComponent } from '../../views/others/a-references-section/a-references-section.component';
import { AExperienceSectionComponent } from '../../views/others/a-experience-section/a-experience-section.component';
import { AWorksSectionComponent } from '../../views/others/a-works-section/a-works-section.component';
import { AServicesSectionComponent } from '../../views/others/a-services-section/a-services-section.component';
import { ASkillsSectionComponent } from '../../views/others/a-skills-section/a-skills-section.component';
import { AAboutSectionComponent } from '../../views/others/a-about-section/a-about-section.component';
import { AHomeSectionComponent } from '../../views/others/a-home-section/a-home-section.component';
import { AFooterComponent } from './a-footer/a-footer.component';
import { AHeaderComponent } from './a-header/a-header.component';


const components = [

  AHeaderComponent,
  AFooterComponent,
  APanelComponent,
  AHomeSectionComponent,
  AAboutSectionComponent,
  ASkillsSectionComponent,
  AServicesSectionComponent,
  AWorksSectionComponent,
  AExperienceSectionComponent,
  AReferencesSectionComponent,
  APostsSectionComponent,
  AContactSectionComponent,
  ASigninSectionComponent,
  AHeaderTopComponent,
  HomeComponent,
  BlogComponent,
  BlogPostComponent,


  //--------------------------------

  HeaderTopComponent,
  SidebarTopComponent,
  SidenavComponent,
  NotificationsComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  WebLayoutComponent,
  AuthLayoutComponent,
  BreadcrumbComponent,
  AppComfirmComponent,
  AppLoaderComponent,
  //CustomizerComponent,
  ButtonLoadingComponent,
  EgretSidebarComponent,
  FooterComponent,
  EgretSidebarTogglerDirective,
  BottomSheetShareComponent,
  EgretExampleViewerComponent,
  EgretExampleViewerTemplateComponent,
  InputComponent,
  TextareaComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    SharedMaterialModule
  ],
  declarations: components,
  entryComponents: [
    AppComfirmComponent, 
    AppLoaderComponent, 
    BottomSheetShareComponent
  ],
  exports: components
})
export class SharedComponentsModule {}