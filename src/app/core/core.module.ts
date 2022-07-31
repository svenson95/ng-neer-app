import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const exportComponents = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [],
  imports: [exportComponents],
  exports: [exportComponents],
  providers: [],
})
export class CoreModule {}
