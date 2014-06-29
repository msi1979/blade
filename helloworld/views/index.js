﻿define(['View', getViewTemplatePath('index'), 'UIAlert', 'UIMask', 'UILoading', 'UIReLoading', 'UIToast', 'UINum', 'UISwitch'], function (View, viewhtml, UIAlert, UIMask, UILoading, UIReLoading, UIToast, UINum, UISwitch) {

  window.UIAlert = UIAlert;
  window.UIMask = UIMask;
  window.UILoading = UILoading;
  window.UIReLoading = UIReLoading;
  window.UIToast = UIToast;
  window.UINum = UINum;

  window.n = new UISwitch( );
  n.show();


  return _.inherit(View, {
    onCreate: function () {
      this.$el.html(viewhtml);
    },

    events: {
      'click button': function (e) {
        this.forward('list');
      }
    },

    onPreShow: function () {



      //      a.setContent('测试');

      this.turning();
    },

    onShow: function () {

    },

    onHide: function () {

    }

  });
});
