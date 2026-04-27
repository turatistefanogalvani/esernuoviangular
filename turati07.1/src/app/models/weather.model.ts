export interface Weather {
    city: string;
    temperature: number;
    condition: 'Soleggiato' | 'Nuvoloso' | 'Pioggia' | 'Neve'; // Tipi specifici per il cambio sfondo
    humidity: number;
    wind: number;
    icon: string;
}