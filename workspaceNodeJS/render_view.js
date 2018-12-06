function renderiza(html_string, variables, parametros) {

	for (var i = variables.length - 1; i >= 0; i--) {
		//[nombre,apellido]
		var variable = variables[i];	
		//parametros[variable]
		//paramtros[]
		html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);		
		
	}




	return html_string;
}
module.exports.renderiza = renderiza;