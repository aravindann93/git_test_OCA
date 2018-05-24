/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"git_test/git_test/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"git_test/git_test/test/integration/pages/App",
	"git_test/git_test/test/integration/pages/Browser",
	"git_test/git_test/test/integration/pages/Master",
	"git_test/git_test/test/integration/pages/Detail",
	"git_test/git_test/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "git_test.git_test.view."
	});

	sap.ui.require([
		"git_test/git_test/test/integration/NavigationJourneyPhone",
		"git_test/git_test/test/integration/NotFoundJourneyPhone",
		"git_test/git_test/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});