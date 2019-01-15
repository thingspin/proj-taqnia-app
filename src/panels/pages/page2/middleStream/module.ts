const plugin = require("./plugin.json");

import { appId, BaseTsPanelPlugin } from "../../../common";
import { IScope } from 'angular';
import Snap from "snapsvg";

class TaqniaPage2MiddlestreamPanelCtrl extends BaseTsPanelPlugin {
    static template = require(`./partial/template.html`);
    private svgFilePath: String = `public/plugins/${appId}/img/scada.svg`;

    svg: any;

    constructor($scope: IScope, $injector, $element: JQLite ) {
        super($scope, $injector, $element, plugin.id);

        this.events.on(`${plugin.id}-initialized`, this.onInitialized.bind(this));
        this.events.on('data-received', this.onDataReceived.bind(this));
    }

    /* Angularjs(1.x) Initialize Function */
    $onInit(): void {
        console.log(`${plugin.name} onInited...`);
    }

    private async onInitialized(): Promise<void> {
        try {
            const svg = await this.loadSvg(this.svgFilePath);
            const node = this.container.find(".streamSvg").append(svg.node);

            // svg first child
            this.svg = Snap(node.find("> svg")[0] as any);
        } catch (e) {
            console.error(e);
        }
    }

    public async loadSvg(path: String): Promise<any> {
        return new Promise((resolve) => {
            Snap.load(path as string, resolve);
        });
    }

    onDataReceived(dataList) {
        // console.log(dataList);
    }
}

export {
    TaqniaPage2MiddlestreamPanelCtrl as PanelCtrl
};
