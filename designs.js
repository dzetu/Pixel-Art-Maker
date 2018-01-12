// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$("#submit").click(function(){
	let row_count = $("#input_height").val();
	let col_count = $("#input_width").val();
	let div = $("#table");
    div.html(makeGrid(row_count, col_count));
    $("td").click(function(){
		let c = $("#colorPicker").val();
		console.log(c);
		$(this).css("background-color", c);
	});
	return false;
});




function makeGrid(row_count, col_count){
	let s = "<table>\n";
	for( let i = 0; i < row_count; i++){
		s = s + "\t<tr>\n";
		for(let j = 0; j < col_count; j++){
			s = s + "\t\t<td></td>\n";
		}
		s = s + "\t</tr>\n";
	}
	s = s + "</table>";
	return s;
}

