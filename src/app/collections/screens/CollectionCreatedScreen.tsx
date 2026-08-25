import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { OnboardingLayout } from '../../../shared/layouts/OnboardingLayout';
import { SuccessConfirmation } from '../../../shared/components/SuccessConfirmation';
import { RootStackParamList } from '../../../navigation/types';

type CollectionCreatedNavigationProp = StackNavigationProp<RootStackParamList, 'CollectionCreated'>;

export const CollectionCreatedScreen = () => {
    const navigation = useNavigation<CollectionCreatedNavigationProp>();

    return (
        <OnboardingLayout>
            <OnboardingLayout.Centered>
                <SuccessConfirmation
                    title="¡Colección creada con éxito!"
                    subtitle="Ahora puedes agregar tu primer objeto."
                    primaryActionLabel="Ver mi colección"
                    onPrimaryAction={() => navigation.navigate('MainTabs')}
                    secondaryActionLabel="Agregar objeto ahora"
                    onSecondaryAction={() => {
                        // TODO: todavía no existe una pantalla para agregar el primer objeto de la colección.
                        navigation.navigate('MainTabs');
                    }}
                />
            </OnboardingLayout.Centered>
        </OnboardingLayout>
    );
};
