class AppConfigCtrl {
  static template = require("./config.html");
  appEditCtrl: any;
  appModel: any;

  constructor(private $q) {
    this.appEditCtrl.setPreUpdateHook(this.preUpdate.bind(this));
    this.appEditCtrl.setPostUpdateHook(this.postUpdate.bind(this));

    if (!this.appModel.jsonData) {
      this.appModel.jsonData = {};
    }
  }

  preUpdate() {
    return this.$q.resolve();
  }

  postUpdate() {
    return this.$q.resolve();
  }

}

// AppConfigCtrl.templateURL = './pages/config.html';

export {
  AppConfigCtrl
};
