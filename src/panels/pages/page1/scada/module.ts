const plugin = require("./plugin.json");

import { appId, BaseTsPanelPlugin } from "../../../common";
import Snap from "snapsvg";
import { IScope } from 'angular';

class TaqniaPage1ScadaPanelCtrl extends BaseTsPanelPlugin {
    static template = require(`./partial/template.html`);
    private svgFilePath: String = `public/plugins/${appId}/img/scada.svg`;

    private _svg: any = null;
    set svg(svg: any) { this._svg = svg; }
    get svg() {return this._svg; }

    // initialize sequence :
    //      constructor -> $onInit() -> events.on('panel-initialized') -> events.on(`${plugin.id}-initialized`)
    constructor($scope: IScope, $injector, $element: JQLite ) {
        super($scope, $injector, $element, plugin.id);

        this.events.on(`${plugin.id}-initialized`, this.onInitialized.bind(this));
        this.events.on('data-received', this.onDataReceived.bind(this));
    }

    /* Angularjs(1.x) Initialize Function */
    public $onInit(): void {
        console.log(`${plugin.name} onInited...`);
    }

    private async onInitialized(): Promise<void> {
        try {
            const svg = await this.loadSvg(this.svgFilePath);
            const node = this.container.append(svg.node);

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

    private onDataReceived(dataList: any): void {
        // console.log(dataList);
    }
}

export {
    TaqniaPage1ScadaPanelCtrl as PanelCtrl
};
