import { createObjectCsvWriter } from 'csv-writer';
import path from 'path';
import fs from 'fs';

export const generateCSV = async (data: any[], columns: string[], fileName: string): Promise<string> => {
  const csvPath = path.join(process.env.CSV_EXPORT_PATH || './data', fileName);
  const csvWriter = createObjectCsvWriter({
    path: csvPath,
    header: columns.map(col => ({ id: col, title: col })),
  });
  await csvWriter.writeRecords(data);
  return csvPath;
}; 