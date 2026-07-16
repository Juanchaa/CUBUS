import { FieldType } from '../../types';

export const TYPE_LABELS: Record<FieldType, string> = {
    text: 'Texto',
    boolean: 'Sí / No',
    select: 'Opción',
    image: 'Imagen',
};

export const TYPE_COLORS: Record<FieldType, { bg: string; text: string }> = {
    text: { bg: '#DCFCE7', text: '#15803D' },
    boolean: { bg: '#FFEDD5', text: '#C2410C' },
    select: { bg: '#F3E8FF', text: '#7E22CE' },
    image: { bg: '#DBEAFE', text: '#1D4ED8' },
};