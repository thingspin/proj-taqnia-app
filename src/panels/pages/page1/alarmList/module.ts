/// <reference path="../../../../vendor/dhtmlxSuite/codebase/dhtmlx.d.ts" />
const plugin = require("./plugin.json");
import { BaseTsPanelPlugin } from "../../../common";
import { IScope } from 'angular';
import "../../../../sass/common.scss";
import $ from "jquery";

import "script-loader!../../../../vendor/dhtmlxSuite/codebase/dhtmlx.js";

class TaqniaPage1AlarmListPanelCtrl extends BaseTsPanelPlugin {
    static template = require(`./partial/template.html`);
    server: any = [];
    accordion: dhtmlXAccordion;
    middlestreamTreeView: dhtmlXTreeViewObject;
    upstreamTreeView: dhtmlXTreeViewObject;
    downstreamTreeView: dhtmlXTreeViewObject;

    constructor($scope: IScope, $injector, $element: JQLite) {
        super($scope, $injector, $element, plugin.id);

        this.events.on(`${plugin.id}-initialized`, this.onInitialized.bind(this));
        this.events.on('data-received', this.onDataReceived.bind(this));
        this.events.on("panel-size-changed", this.sizeChanged.bind(this));
    }

    /* Angularjs(1.x) Initialize Function */
    $onInit(): void {
        console.log(`${plugin.name} onInited...`);
    }
    sizeChanged() {
        const $dom = this.container.find("#accordion");
        console.log($dom[0].clientHeight);
    }

    onInitialized() {
        const $dom = this.container.find("#accordion");
        this.accordion = new (dhtmlXAccordion as any)({
            parent: $dom[0],
            multi_mode: true,
        });
        this.accordion.addItem("upstream", `Test <input id="idButton" style="position:absolute; right:0;" />`,
            true, 200, undefined);
        this.accordion.addItem("middlestream", "Middlestream", undefined, 200, undefined);
        this.accordion.addItem("downstream", "Downstream", undefined, 200, undefined);

        this.upstreamTreeView = this.accordion.cells("upstream").attachTreeView(undefined);
        this.middlestreamTreeView = this.accordion.cells("middlestream").attachTreeView(undefined);
        this.downstreamTreeView = this.accordion.cells("downstream").attachTreeView(undefined);

        this.upstreamTreeView.loadStruct([
            {id: 1, text: "Books", open: 1, items: [
                {id: 2, text: `Test `},
                {id: 3, text: "Daire Meets Ever / Alyson Noël"},
                {id: 4, text: "Socs and Greasers / Rob Lowe"},
                {id: 5, text: "Privacy and Terms.pdf"},
                {id: 6, text: "Licence Agreement.pdf"}
            ]}
        ], undefined);
        this.upstreamTreeView.setItemText(1, "gogogogogogogo");
        this.$element.find(".dhxtreeview_item_text").on("mouseenter", (evt: JQueryEventObject) => {
            $(evt.currentTarget).append(`<div class='dhxtreeview_item_label treeview-hover' style="right:0px;">test...<div>`);
        });
        this.$element.find(".dhxtreeview_item_text").on("mouseleave", (evt: JQueryEventObject) => {
            $(evt.currentTarget).find(".treeview-hover").remove();
        });
    }

    onDataReceived(dataList) {
        this.accordion.setSizes();
    }

}

export {
    TaqniaPage1AlarmListPanelCtrl as PanelCtrl
};
