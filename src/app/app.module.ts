import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from '@angular/material/core';
import { AppIconComponent } from './core/components/app-icon/app-icon.component';
import { STORAGE_PROVIDERS } from './core/shared/storage.service';
import { windowProvider, WindowToken } from './core/shared/window';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { RouterModule, TitleStrategy } from '@angular/router';
import { PageTitleStrategy } from './core/shared/page.title-strategy';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

const globalRippleConfig: RippleGlobalOptions = {
  animation: {
    enterDuration: 1000,
    exitDuration: 1500,
  },
  terminateOnPointerUp: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    MatTabsModule,

    AppRoutingModule,

    CoreModule,
    AppIconComponent,
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
    STORAGE_PROVIDERS,
    { provide: WindowToken, useFactory: windowProvider },
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
