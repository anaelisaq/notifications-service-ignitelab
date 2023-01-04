/* eslint-disable prettier/prettier */
export class Content {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    private validateContentLength(content: string): boolean{
        return content.length >= 5 && content.length <= 240;
    } //validar o tamanho do conteúdo do texto

    constructor(content: string) {
        const isContentLengthValid = this.validateContentLength(content);

        if (!isContentLengthValid) {
            throw new Error('Content length error.')
        }
        this.content = content;
    }
}