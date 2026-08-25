import { httpClient } from '../../../services/httpClient';
import { CollectionBasicInfo, FieldDefinition } from '../types';

// ajustar cuando el backend confirme el contrato real.
interface CreateCollectionPayload {
    name: string;
    description: string;
    visibility: 'public' | 'private';
    fields: {
        label: string;
        type: FieldDefinition['type'];
        order: number;
        options?: string[];
        helperText?: string;
    }[];
    // TODO: coverImageUri es un URI local del dispositivo, no una URL.
    // Definir con backend si viaja como multipart junto a este payload,
    // o se sube antes a un endpoint aparte y acá se manda la URL resultante.
}

function toCreatePayload(basicInfo: CollectionBasicInfo, fields: FieldDefinition[]): CreateCollectionPayload {
    return {
        name: basicInfo.name,
        description: basicInfo.description,
        visibility: basicInfo.visibility,
        // el id de cada field es temporal (generado en el wizard para key/drag-reorder),
        // no se manda: el backend arma su propio id al crear.
        fields: fields.map(({ id, ...rest }) => rest),
    };
}

export async function createCollection(basicInfo: CollectionBasicInfo, fields: FieldDefinition[]) {
    const payload = toCreatePayload(basicInfo, fields);
    return httpClient.post('/collections', payload);
}
