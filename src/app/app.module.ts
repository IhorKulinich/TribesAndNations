import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogicComponent } from './logic/logic.component';
import { GraphicComponent } from './graphic/graphic.component';
import { InterfaceComponent } from './interface/interface.component';
import { TrashComponent } from './trash/trash.component';
import { NavigationComponent } from './interface/navigation/navigation.component';
import { SplashComponent } from './interface/splash/splash.component';
import { ToolsComponent } from './interface/tools/tools.component';
import { UiComponent } from './interface/ui/ui.component';
import { MenuComponent } from './interface/menu/menu.component';
import { G2dComponent } from './graphic/g2d/g2d.component';
import { G3dComponent } from './graphic/g3d/g3d.component';

@NgModule({
  declarations: [
    AppComponent,
    LogicComponent,
    GraphicComponent,
    InterfaceComponent,
    TrashComponent,
    NavigationComponent,
    SplashComponent,
    ToolsComponent,
    UiComponent,
    MenuComponent,
    G2dComponent,
    G3dComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
