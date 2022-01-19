"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// Your other imports and initialization code
// comes here after you imported the reflect-metadata package!
var typedi_1 = require("typedi");
var ExampleInjectedService = /** @class */ (function () {
    function ExampleInjectedService() {
    }
    ExampleInjectedService.prototype.printMessage = function () {
        console.log('I am alive!');
    };
    ExampleInjectedService = __decorate([
        (0, typedi_1.Service)()
    ], ExampleInjectedService);
    return ExampleInjectedService;
}());
var ExampleService = /** @class */ (function () {
    function ExampleService(
    // because we annotated ExampleInjectedService with the @Service()
    // decorator TypeDI will automatically inject an instance of
    // ExampleInjectedService here when the ExampleService class is requested
    // from TypeDI.
    injectedService) {
        this.injectedService = injectedService;
    }
    ExampleService = __decorate([
        (0, typedi_1.Service)(),
        __metadata("design:paramtypes", [ExampleInjectedService])
    ], ExampleService);
    return ExampleService;
}());
var serviceInstance = typedi_1.Container.get(ExampleService);
// we request an instance of ExampleService from TypeDI
serviceInstance.injectedService.printMessage();
// logs "I am alive!" to the console
//# sourceMappingURL=basic.js.map