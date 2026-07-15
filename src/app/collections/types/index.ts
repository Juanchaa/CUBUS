export type FieldType = 'text' | 'boolean' | 'select' | 'image';

export interface FieldDefinition {
    id: string;
    label: string;
    helperText?: string;
    type: FieldType;
    order: number;
    options?: string[];
}

export interface CollectionBasicInfo {
    coverImageUri: string | null;
    name: string;
    description: string;
    visibility: 'public' | 'private';
}