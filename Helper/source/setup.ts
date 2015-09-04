namespace Helper{
	
	export class Setup{
		
		constructor(inputId:string, outputId:string){			
			 
			let input:Helper.Input = new Helper.Input(inputId);
			let output:Helper.Output  = new Helper.Output(outputId);
			input.setOnInputEventToOutput(output);			
			
		}				
	}
}