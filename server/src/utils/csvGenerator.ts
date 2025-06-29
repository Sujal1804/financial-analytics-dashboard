import { createObjectCsvWriter } from 'csv-writer';
import path from 'path';
import fs from 'fs';

export const generateCSV = async (data: any[], columns: string[], fileName: string): Promise<string> => {
  // Defensive check and logging
  console.log('generateCSV called with columns:', columns);
  console.log('generateCSV called with data length:', data ? data.length : 'undefined');
  
  // Ensure columns is a valid array
  if (!Array.isArray(columns) || columns.length === 0) {
    console.log('No valid columns provided, using default columns');
    columns = ['date', 'amount', 'category', 'status', 'user_id'];
  }
  
  // Final defensive check before using join
  if (!Array.isArray(columns) || columns.some(col => typeof col !== 'string')) {
    console.error('generateCSV: columns is not a valid array at join point:', columns);
    columns = ['date', 'amount', 'category', 'status', 'user_id'];
  }
  
  // Extra safety check right before join
  if (!columns || !Array.isArray(columns)) {
    console.error('generateCSV: columns is still undefined/null before join:', columns);
    columns = ['date', 'amount', 'category', 'status', 'user_id'];
  }
  
  if (!Array.isArray(data)) {
    console.log('No valid data provided, using empty array');
    data = [];
  }
  
  const csvPath = path.join(process.env.CSV_EXPORT_PATH || './data', fileName);
  
  // Ensure the directory exists
  const dir = path.dirname(csvPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write CSV manually to handle undefined values
  console.log('About to join columns:', columns);
  
  // Final safety check before header creation
  if (!columns || !Array.isArray(columns)) {
    console.error('generateCSV: columns is invalid before header creation:', columns);
    columns = ['date', 'amount', 'category', 'status', 'user_id'];
  }
  
  const header = columns.join(',');
  console.log('Header created:', header);
  const csvRows = [header];
  
  for (const row of data) {
    console.log('Processing row:', row, 'with columns:', columns);
    if (!row || typeof row !== 'object') {
      console.error('generateCSV: Encountered invalid row:', row);
      csvRows.push(columns.map(() => '').join(','));
      continue;
    }
    let values = [];
    try {
      values = columns.map(col => {
        const value = row[col];
        if (value !== undefined && value !== null) {
          return String(value);
        }
        return '';
      });
    } catch (err) {
      console.error('generateCSV: Error mapping row values:', err, row);
      values = columns.map(() => '');
    }
    if (!Array.isArray(values)) {
      console.error('generateCSV: values is not an array before join:', values);
      values = columns.map(() => '');
    }
    console.log('About to join values:', values, 'Type:', typeof values, 'IsArray:', Array.isArray(values));
    try {
      csvRows.push(values.join(','));
    } catch (err) {
      console.error('generateCSV: Error joining values:', err, values);
      csvRows.push(columns.map(() => '').join(','));
    }
  }
  
  // If no data, add a dummy row
  if (data.length === 0) {
    csvRows.push(columns.map(() => '').join(','));
  }
  
  fs.writeFileSync(csvPath, csvRows.join('\n'), 'utf8');
  console.log('CSV file generated successfully at:', csvPath);
  return csvPath;
}; 