import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class JogadoresValidatorParametrosPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException(`O parâmetro ${metadata.data} não pode ser nulo`)
        }

        return value
    }
}