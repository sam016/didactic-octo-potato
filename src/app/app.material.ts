import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
    CompatibilityModule

    // , MdButton
    // , MdSidenav
    // , MdSidenavContainer
    // , MdToolbar
    // , MdToolbarRow

    , MdButtonModule
    , MdIconModule
    , MdListModule
    , MdMenuModule
    , MdRippleModule
    , MdSidenavModule
    , MdToolbarModule
    // , MaterialModule
} from '@angular/material';

@NgModule({
    imports: [
        CompatibilityModule
        , CommonModule
        , MdIconModule
        // , MaterialModule
        , MdButtonModule
        , MdRippleModule
        , MdSidenavModule
        , MdToolbarModule
        , MdMenuModule
        , MdListModule

    ],
    exports: [
        CompatibilityModule
        , CommonModule
        , MdIconModule
        // , MaterialModule
        , MdButtonModule
        , MdRippleModule
        , MdSidenavModule
        , MdToolbarModule
        , MdMenuModule
        , MdListModule
    ]
})
export class AppMaterialModule { }
