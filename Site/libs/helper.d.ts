declare module Helper {
    class Input {
        private element;
        constructor(inputId: string);
        getValue(): string;
        setChangeEventToOutput(output: Helper.Output): void;
    }
}
declare module Helper {
    class Output {
        private outputTextElement;
        constructor(outputId: string);
        setText(text: string): void;
    }
}
declare module Helper {
    class Setup {
        constructor(inputId: string, outputId: string);
    }
}
