namespace Helper{

	export class Input{
		private element:HTMLInputElement;

		constructor(inputId:string){
			this.element = <HTMLInputElement>document.getElementById(inputId);

		}

		getValue():string{
			return this.element.value;
		}

		setOnInputEventToOutput(output :Helper.Output) {
						this.element.oninput = ()  => {
							let text:string = this.getValue();
								console.log('change event text: ' + text);
								output.setText(text);
								};
		}
	}
}
