import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HomeLayout } from '../../../shared/layouts/HomeLayout';
import CreateCollectionWizard from '../components/wizard/CreateCollectionForm';

export const CreateCollection = ({ navigation }: any) => {
    const handleComplete = (basicInfo: any, fields: any[]) => {
        console.log('Colección creada:', basicInfo, fields);
        // TODO: Lógica para guardar la colección
        if (navigation?.goBack) {
            navigation.goBack();
        }
    };

    const handleCancel = () => {
        if (navigation?.goBack) {
            navigation.goBack();
        }
    };

    return (
        <HomeLayout showBack title="Nueva colección">
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
