var Helper;
(function (Helper) {
    var Input = (function () {
        function Input(inputId) {
            this.element = document.getElementById(inputId);
        }
        Input.prototype.getValue = function () {
            return this.element.value;
        };
        Input.prototype.setOnInputEventToOutput = function (output) {
            var _this = this;
            this.element.oninput = function () {
                var text = _this.getValue();
                console.log('change event text: ' + text);
                output.setText(text);
            };
        };
        return Input;
    })();
    Helper.Input = Input;
})(Helper || (Helper = {}));
var Helper;
(function (Helper) {
    var Output = (function () {
        function Output(outputId) {
            this.outputTextElement = document.getElementById(outputId);
        }
        Output.prototype.setText = function (text) {
            this.outputTextElement.textContent = text;
        };
        return Output;
    })();
    Helper.Output = Output;
})(Helper || (Helper = {}));
var Helper;
(function (Helper) {
    var Setup = (function () {
        function Setup(inputId, outputId) {
            var input = new Helper.Input(inputId);
            var output = new Helper.Output(outputId);
            input.setOnInputEventToOutput(output);
        }
        return Setup;
    })();
    Helper.Setup = Setup;
})(Helper || (Helper = {}));
//# sourceMappingURL=helper.js.map