"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOOPPackageType = void 0;
/**
 * Type used to request {@link LOOP1} and {@link LOOP2} packages.
 */
var LOOPPackageType;
(function (LOOPPackageType) {
    /**
     * The older LOOP(1) package used by Rev "A" firmware (dated before April 24, 2002).
     * Newer weather stations support this package type too.
     */
    LOOPPackageType["LOOP1"] = "LOOP1";
    /**
     * The newer LOOP2 package used by Rev "B" firmware (dated after April 24, 2002 / Firmware 1.90^).
     * Older weather stations don't support this package type. The Vantage Pro doesn't support this package at all.
     */
    LOOPPackageType["LOOP2"] = "LOOP2";
})(LOOPPackageType || (exports.LOOPPackageType = LOOPPackageType = {}));
//# sourceMappingURL=LOOPPackageType.js.map