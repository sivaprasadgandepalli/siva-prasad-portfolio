export interface TimelineItem {
    title: string;
    subtitle?: string;
    description?: string;
    period: string;
    type?: 'education' | 'experience' | 'training';
}