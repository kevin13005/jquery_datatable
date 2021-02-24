//jquery to sort array
			$(document).ready(function() {
				
				$('#example').DataTable({
					"order": [[ 2, "asc" ]],//Asc sort third column
					"columnDefs": [ {
						"targets": [ 1 ],//we want to make the second column invisible
						"visible": false
					},{
						"targets": 2,//third column
						"render": function ( data, type, row ) {
                    		return data + row[3];//Add images from fourth colum to the third to merge data 
                			}
                	},{
						"targets": [ 3 ], //we make fourth column invisible
						"visible": false
					},{
						"targets": [ 4 ], ///we make fifth column invisible
						"visible": false
					}],
					//'f' means searchbar, 'rt' means table, 'ip' means pagination below
					"dom": '<"tabhaut"f><"top"B>rt<"bottom"ip><"clear">',
					//modify language
					"language": {
						"paginate": {//modify language on pagination from english to french
							"next":       "suivant",
        					"previous":   "précédent"
						},
						"info": "page _PAGE_ sur _PAGES_",//on pages number information
						"search": ''//remove search label next to searchbar
					},
					buttons: [
            		{
                		text: 'indien',//add text to button
						action: function(e, dt, node, config){//fonction only look for restaurant
                			dt.column(4).search("restaurant").draw();
            			}
            		},{
                		text: 'snack',
						action: function(e, dt, node, config){//function only look for "GDBQWCV"
                			dt.column(4).search("GDBQWCV").draw();
            			}
            		},{
               			text: 'rev',
						action: function(e, dt, node, config){//function only look for "sryfgwvc" 
                			dt.column(4).search("sryfgwvc").draw();
            			}
            		},{
						text: 'tous les restos',
						action: function ( e, dt, node, config ) {
							document.location.reload(); //refresh page
						}
					}]
				
    			});

			});
