import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MercyPlusRoutingModule } from "./mercy-plus-routing.module";
import { MercyPlusComponent } from "./mercy-plus.component";
// import { ChapletComponent } from "./chaplet/chaplet.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MercyPlusRoutingModule
    ],
    declarations: [
        MercyPlusComponent
        // ChapletComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MercyPlusModule { }