import { MetricsPanelCtrl, loadPluginCss } from 'grafana/app/plugins/sdk';
import { appId, baseCssFilename } from "../../../common";
import Snap, { Fragment } from "snapsvg";

loadPluginCss({
    dark: `plugins/${appId}/css/${baseCssFilename}.dark.css`,
    light: `plugins/${appId}/css/${baseCssFilename}.light.css`
});

class TaqniaPage1ScadaPanelCtrl extends MetricsPanelCtrl {
    static template = require(`./partial/template.html`);
    divID: String = "taqnia-page1-scada-panel";
    svgFilePath: String = `public/plugins/${appId}/img/scada.svg`;

    private _container: JQLite;
    set container(container: JQLite) { this._container = container; }
    get container() { return this._container; }

    private _svg: any = null;
    set svg(svg: any) { this._svg = svg; }
    get svg() {return this._svg; }

    // initialize sequence : constructor -> $onInit -> onInitialized
    constructor($scope, $injector, private $element: JQLite ) {
        super($scope, $injector);

        this.events.on('panel-initialized', this.onInitialized.bind(this));
        this.events.on('data-received', this.onDataReceived.bind(this));
    }

    /* Angularjs(1.x) Initialize Function */
    public $onInit() {
        console.log(`${this.divID} onInited...`);
    }

    private async onInitialized() {
        this.container = this.getContainer();

        try {
            const svg = await this.loadSvg(this.svgFilePath as string);
            const node = this.container.append(svg.node);

            // svg first child
            this.svg = Snap(node.find("> svg")[0] as any);
        } catch (e) {
            console.error(e);
        }
    }

    private getContainer(): JQLite | null {
        const node: JQLite = this.$element.find("ng-transclude > div");
        if (node.length === 0) {
            console.error(`cannot find element id '#${this.divID}'`);
            return null;
        }
        return node;
    }

    public async loadSvg(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            Snap.load(path, resolve);
        });
    }

    private onDataReceived(dataList: any) {
        // console.log(dataList);
    }
}

export {
    TaqniaPage1ScadaPanelCtrl as PanelCtrl
};
