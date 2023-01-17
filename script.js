//Example

(function executeRule(current, previous /*null when async*/) {
	/*
	When entering text in the "u_sla_delay_justification" field and saving the record, a new additional comment is automatically inserted, in the name of the solver.
	*/
	var solicitante = current.getDisplayValue('caller');
	var slaDelay = current.u_sla_delay_justification;
	var solucionador = current.getDisplayValue('assigned_to');
	
	var comment = "Prezado " + solicitante + "," + "\n\n" + "A justificativa de atraso é: " + "\n\n" + slaDelay + "\n\n" + "Atenciosamente, " + "\n\n" + solucionador;
	
	current.comments = comment;
	current.update();

})(current, previous);
