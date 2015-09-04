namespace Helper{
	
	export class Output{
		private outputTextElement:HTMLParagraphElement;
		
		constructor(outputId:string){				
			this.outputTextElement = <HTMLParagraphElement>document.getElementById(outputId);	
		}
		
		setText(text:string){
			this.outputTextElement.textContent = text;
		}		
	}	
}