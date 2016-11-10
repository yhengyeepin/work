var model = {
  init: function() {
    console.log('Model init');
  }
};

var helper = {

};

var view = {
  init: function() {
    console.log('View init');
  }
};

var app = {
  init: function() {
    model.init();
    view.init();
  }
};

app.init();
