var myApp = new Framework7();
  
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      { path: '/carta/', url: 'carta.html', },
      { path: '/nove/', url: 'nove.html', },
      { path: '/pedido/', url: 'pedido.html', },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

$$(document).on('page:init', '.page[data-name="carta"]', function (e) {
    console.log(e);
    $$('.accordion-item').on('accordion:opened', function () {
        console.log('Accordion item opened');
        });

    $$('.accordion-item').on('accordion:closed', /* @callback */ function (e) {
        console.log('Accordion item closed');
        });

    app.on('accordionOpened', function (el) {
        console.log('The following element opened:');
        console.log(el);
        });

  


});

$$(document).on('page:init', '.page[data-name="nove"]', function (e) {
    console.log(e);
    
    $$('.popup-nov1').on('popup:open', function (e, popup) {
  console.log('nov1 popup open');
});
$$('.popup-nov1').on('popup:opened', function (e, popup) {
  console.log('nov1 popup opened');
});

    $$('.popup-nov2').on('popup:open', function (e, popup) {
  console.log('nov2 popup open');
});
$$('.popup-nov2').on('popup:opened', function (e, popup) {
  console.log('nov2 popup opened');
});

    $$('.popup-nov3').on('popup:open', function (e, popup) {
  console.log('nov3 popup open');
});
$$('.popup-nov1').on('popup:opened', function (e, popup) {
  console.log('nov1 popup opened');
});
    
});

$$(document).on('page:init', '.page[data-name="pedido"]', function (e) {
    console.log(e);
    
    var cp = app.actions.create({
  buttons: [
    {
      text: 'Agregar Articulos',
    },
    {
      text: 'Cancelar Pedido'
    },
    {
      text: 'Finalizar Pedido',
      color: 'red'
    },
  ]
});

$$('.cp').on('click', function () {cp.open();});
    
    
});

// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});

// Instance Events
// App Events
app.on('panelClose', function (panel) {
  console.log('Panel ' + panel.side + ': close');
});
app.on('panelClosed', function (panel) {
  console.log('Panel ' + panel.side + ': closed');
});


