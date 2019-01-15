const plugin = require("./plugin.json");

import { BaseTsPanelPlugin } from "../../../common";
import { IScope } from 'angular';

class TaqniaPage1AlarmListPanelCtrl extends BaseTsPanelPlugin {
    static template = require(`./partial/template.html`);
    server: any = [];

    constructor($scope: IScope, $injector, $element: JQLite) {
        super($scope, $injector, $element, plugin.id);

        this.events.on(`${plugin.id}-initialized`, this.onInitialized.bind(this));
        this.events.on('data-received', this.onDataReceived.bind(this));
    }

    /* Angularjs(1.x) Initialize Function */
    $onInit(): void {
        console.log(`${plugin.name} onInited...`);
    }

    onInitialized() {
    }

    onDataReceived(dataList) {
        // console.log(dataList);
    }
}

export {
    TaqniaPage1AlarmListPanelCtrl as PanelCtrl
};
