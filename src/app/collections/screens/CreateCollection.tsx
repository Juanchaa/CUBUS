import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeLayout } from '../../../shared/layouts/HomeLayout';
import CreateCollectionWizard from '../components/wizard/CreateCollectionForm';

export const CreateCollection = ({ navigation }: any) => {
    const handleComplete = (basicInfo: any, fields: any[]) => {
        // TODO: llamar a createCollection(basicInfo, fields) de collectionsApi.ts
        // acá antes de navegar, cuando el backend confirme el contrato.
        navigation?.navigate?.('CollectionCreated');
    };

    const handleCancel = () => {
        if (navigation?.goBack) {
            navigation.goBack();
        }
    };

    return (
        <HomeLayout showBack title="Nueva colección" headerRight={false} includeBottomSafeArea>
            <View style={styles.container}>
                <CreateCollectionWizard
                    onComplete={handleComplete}
                    onCancel={handleCancel}
                />
            </View>
        </HomeLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
