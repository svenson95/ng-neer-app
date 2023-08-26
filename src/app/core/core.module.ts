import { NgModule } from '@angular/core';
import { FooterComponent, HeaderComponent } from './components';

const STANDALONE_COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [...STANDALONE_COMPONENTS],
  exports: [...STANDALONE_COMPONENTS],
})
export class CoreModule {}
