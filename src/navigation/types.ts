import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Welcome: undefined;
    Intro: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: { email?: string };
    EmailVerification: { email: string };
    Blocked: undefined;
    Success: { message: string }; // Pantalla para "Contraseña actualizada"
    MainTabs: undefined; // The bottom tab navigator
    CreateCollection: undefined;
    CollectionCreated: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;