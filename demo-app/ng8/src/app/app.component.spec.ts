import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TranslateModule } from "@ngx-translate/core";
import { NgxFormErrorsModule } from "@nationalbankbelgium/ngx-form-errors";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CardComponent, LanguageSelectorComponent, NavigationComponent, SimpleFormErrorComponent } from "./components";
import { NgxFormsExampleComponent, ReactiveFormsExampleComponent, TemplateDrivenFormsExampleComponent } from "./pages";

describe("AppComponent", () => {
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		return TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				CardComponent,
				NavigationComponent,
				LanguageSelectorComponent,
				NgxFormsExampleComponent,
				ReactiveFormsExampleComponent,
				TemplateDrivenFormsExampleComponent,
				SimpleFormErrorComponent
			],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				MatButtonToggleModule,
				MatCardModule,
				MatFormFieldModule,
				MatInputModule,
				MatListModule,
				MatSidenavModule,
				MatToolbarModule,
				AppRoutingModule,
				NoopAnimationsModule,
				NgxFormErrorsModule.forRoot({
					formErrorComponent: SimpleFormErrorComponent
				}),
				TranslateModule.forRoot()
			],
			schemas: [NO_ERRORS_SCHEMA] // don't want to import mat-icon in these tests
		})
			.overrideModule(BrowserDynamicTestingModule, {
				set: {
					entryComponents: [SimpleFormErrorComponent]
				}
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
	});

	it("should create the app", () => {
		const app: AppComponent = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it("should render title in a h1 tag", () => {
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		const h1Element = compiled.querySelector("h1");
		expect(h1Element).toBeTruthy();
		expect(h1Element.textContent).toContain("Ngx-Form-Errors");
	});
});
