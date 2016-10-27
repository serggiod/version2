angular
		.module('legislaturaweb')
		.controller('orden_del_diaController',function($scope,$http){

				// Función inicializadora.
				$scope.init = ()=>{
					$('#mediaBar').hide();
				};

				// Inicializar calendario.
				$scope.calendario = $('#calendario').fullCalendar({
					theme:false,
					editable:false,
					selectable:false,
					overlap:true,
					height:420,
					monthNames:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
					monthNameShort:['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
					dayNames:['Domingo', 'Lunes', 'Martes', 'Miercoles','Jueves', 'Viernes', 'Sabado'],
					dayNamesShort:['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
					customButtons:{
						anterior: {
							text: 'Mes Anterior',
							click:()=>{ 
								$('#calendario').fullCalendar('prev');
								getEvents();
							}
						},
						siguiente: {
							text: 'Mes Siguiente',
							click:()=>{ 
								$('#calendario').fullCalendar('next');
								getEvents(); 
							}
						},
						anteriorY: {
							text: 'Año Anterior',
							click:()=>{ 
								$('#calendario').fullCalendar('prevYear');
								getEvents(); 
							}
						},
						siguienteY: {
							text: 'Año Siguiente',
							click:()=>{ 
								$('#calendario').fullCalendar('nextYear');
								getEvents(); 
							}
						}
					},
					header:{
						left:'anteriorY,anterior',
						center:'title',
						right:'siguiente,siguienteY'
					},
					timezone:'America/Argentina/Jujuy',
					eventColor: '#5BC0DE',
					eventClick: function(a){
						titulo   = a.title;
						fileRead = '/img/sesiones/'+a.description+'.html';
						filePrint= '/img/sesiones/'+a.description+'_print.html';
						height  = window.innerHeight -200;
						html    = '<iframe src="'+fileRead+'" style="width:100%;height:'+height+'px;border:0;overflow:scroll;"></iframe>';
						
						alertM  = BootstrapDialog.show({
							type:'type-info',
							size:'size-wide',
							closable:false,
							html:true,
							nl2br:false,
							title:titulo,
							message:html,
							buttons:[{
								cssClass:'btn btn-default',
								label:'Imprimir',
								action:()=>{
									var win = window.open(filePrint);
									win.onload = function(){
										win.print();
										win.close();
									};									
								}
							},{
								cssClass:'btn btn-info',
								label:'Cerrar',
								action:()=>{alertM.close();}
							}]
						});
					},
					viewRender:()=>{ getEvents(); }
				});

				// Solicitar eventos.
				function getEvents(){
					m   = $('#calendario').fullCalendar('getDate');
					d   = m.format().substring(0,7).replace('-','/');
					uri = '/rest/institucion.php/ordenes/'+d;
					$('#calendario').fullCalendar('removeEvents');
					
					$.get(uri,function(json){
						$('#calendario').fullCalendar('removeEvents');
						if(json.rows) for(i in json.rows) $('#calendario').fullCalendar( 'renderEvent',json.rows[i]);
					});

				};

				$scope.init();

		});