export interface Password {
    checkPassword(password: string) : boolean;

    resetPassword(): void;
}