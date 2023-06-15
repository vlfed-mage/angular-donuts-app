import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleModule } from './example/example.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ExampleModule, AdminModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
