// Theme custom js methods
$(document).ready(function(){
  // Custom for descriptions in some programmes
  var addCustomDescriptions = function(){
    var descriptions = {
      '/politicas/31': {
        'text': 'Los datos recogidos en esta página reflejan los presupuestos de la Comunidad Autónoma de Canarias, tal como han sido aprobados por nuestro Parlamento. Sin embargo, no se desglosan los créditos que se distribuyen entre los once organismos autónomos (Servicio Canario de la Salud, Servicio Canario de Empleo, Instituto Canario de la Vivienda…) y entes públicos (RTVC, Agencia Tributaria Canaria y Consejo Económico y Social). Estos aparecen detallados como transferencias corrientes en los presupuestos de los departamentos de los que orgánicamente dependen.',
      },
      '/programas/312A': {
        'text': 'Los datos recogidos en esta página reflejan los presupuestos de la Comunidad Autónoma de Canarias, tal como han sido aprobados por nuestro Parlamento. Sin embargo, no se desglosan los créditos que se distribuyen entre los once organismos autónomos (Servicio Canario de la Salud, Servicio Canario de Empleo, Instituto Canario de la Vivienda…) y entes públicos (RTVC, Agencia Tributaria Canaria y Consejo Económico y Social). Estos aparecen detallados como transferencias corrientes en los presupuestos de los departamentos de los que orgánicamente dependen.',
      },
    };

    var description = descriptions[ window.location.pathname.substring(0,window.location.pathname.lastIndexOf('/')) ];

    if (description) {
      $('.policies .policies-content .policies-chart').append( '<div class="policy-description">'+description.text+'</div>' );
    }
  };

  addCustomDescriptions();
});