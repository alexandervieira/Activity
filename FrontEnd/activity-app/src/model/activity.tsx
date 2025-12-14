export const Priority = {
    Indefinite: 'Indefinite',
    Low: 'Low',
    Medium: 'Medium',
    High: 'High'
} as const;

export type Priority = typeof Priority[keyof typeof Priority];

export interface IActivity {
    id: number;
    title: string;
    description: string;
    priority: typeof Priority[keyof typeof Priority];
}