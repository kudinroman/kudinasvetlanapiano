import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainLayoutComponent } from "./site/components/main-layout/main-layout.component";
import { HomePageComponent } from "./site/components/home-page/home-page.component";
import { PostPageComponent } from "./site/components/post-page/post-page.component";
import { PostComponent } from "./site/components/post/post.component";
import { SharedModule } from "./shared/shared.module";
import { AuthInterceptor } from "./shared/auth.interceptor";
import { registerLocaleData } from "@angular/common";
import ruLocale from '@angular/common/locales/ru';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

registerLocaleData(ruLocale, 'ru')

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
