// src/styles.ts
export interface ToggleStyle {
    backgroundColor: string;
    textColor: string;
    iconColor: string;
    iconHover: {
        backgroundColor: string;
    };
}

export const getToggleStyle = (darkMode: boolean): ToggleStyle => ({
    backgroundColor: darkMode ? "var(--body-color)" : "var(--orange-color)",
    textColor: darkMode ? 'rgba(202, 98, 23, 0.77)' : 'rgba(0, 0, 0, 0.87)',
    iconColor: darkMode ? 'rgba(202, 98, 23, 0.77)' : 'rgba(0, 0, 0, 0.87)',
    iconHover: {
        backgroundColor: darkMode ? 'rgb(204, 201, 201)' : 'rgba(202, 98, 23, 0.94)',
    },
});
