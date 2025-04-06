import { CalendarEvent } from '../../store/slices/calendarSlice';

/**
 * Esporta gli eventi del calendario in un file JSON
 * @param events - Array di eventi del calendario da esportare
 * @param filename - Nome del file di esportazione (opzionale)
 */
export const exportEventsToJson = (events: CalendarEvent[], filename: string = 'calendar-events.json'): void => {
  try {
    // Creiamo un oggetto con metadati e gli eventi
    const exportData = {
      exportDate: new Date().toISOString(),
      version: '1.0.0',
      events,
    };
    
    // Convertiamo l'oggetto in una stringa JSON
    const jsonString = JSON.stringify(exportData, null, 2);
    
    // Creiamo un Blob con il contenuto JSON
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // Creiamo un URL per il download
    const url = URL.createObjectURL(blob);
    
    // Creiamo un elemento <a> per scaricare il file
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    
    // Aggiungiamo l'elemento al DOM e facciamo click
    document.body.appendChild(a);
    a.click();
    
    // Puliamo
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Errore durante l\'esportazione degli eventi:', error);
    throw new Error('Impossibile esportare gli eventi del calendario');
  }
};

/**
 * Importa eventi del calendario da un file JSON
 * @param file - File JSON contenente gli eventi da importare
 * @returns Promise<CalendarEvent[]> - Promise che si risolve con l'array di eventi importati
 */
export const importEventsFromJson = (file: File): Promise<CalendarEvent[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        if (!event.target || !event.target.result) {
          throw new Error('Errore nella lettura del file');
        }
        
        const jsonString = event.target.result as string;
        const importData = JSON.parse(jsonString);
        
        // Verifica che il JSON contenga un array di eventi
        if (!importData.events || !Array.isArray(importData.events)) {
          throw new Error('Il file non contiene eventi del calendario validi');
        }
        
        // Verifica che ogni evento abbia la struttura corretta
        const validEvents = importData.events.filter((event: any) => {
          return (
            event.id &&
            event.title &&
            event.date &&
            typeof event.duration === 'number'
          );
        });
        
        resolve(validEvents as CalendarEvent[]);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Errore nella lettura del file'));
    };
    
    reader.readAsText(file);
  });
};
