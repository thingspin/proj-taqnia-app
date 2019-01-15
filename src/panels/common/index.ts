import { MetricsPanelCtrl, loadPluginCss } from "grafana/app/plugins/sdk";
import { IScope } from "angular";
import "bootstrap";

export const appId: String = "proj-taqnia-app";
export const baseCssFilename: String = "app";

loadPluginCss({
    dark: `plugins/${appId}/css/${baseCssFilename}.dark.css`,
    light: `plugins/${appId}/css/${baseCssFilename}.light.css`,
});

export class BaseTsPanelPlugin extends MetricsPanelCtrl {
    private _container: JQLite;
    set container(container: JQLite) { this._container = container; }
    get container() { return this._container; }

    constructor($scope: IScope, $injector, public $element: JQLite, public divID: string) {
        super($scope, $injector);

        this.events.on('panel-initialized', this.panelInitialized.bind(this));
    }

    private async panelInitialized(): Promise<void> {
        this.container = this.getPluginRootDom();
        this.events.emit(`${this.divID}-initialized`);
    }

    protected getPluginRootDom(): JQLite | null {
        const node: JQLite = this.$element.find("ng-transclude > div");
        if (node.length === 0) {
            console.error(`can't find element id '#${this.divID}'`);
            return null;
        }
        return node;
    }

}