import { getLastNthDay } from '../helpers'

const BASE_URL = 'https://sap-hackathon-4ddbd.firebaseio.com';

export const Location = {
    async getAll() {
        const res = await fetch(`${BASE_URL}/locations.json`);
        const records = await res.json();
        return records;
    },
    async lastNDays(N) {
        if (typeof N !== "number") {
            return null;
        }
        const records = await this.getAll();

        const filteredRecords = records.filter(record => record.timestampMs > getLastNthDay(N));
        return filteredRecords;
    }
};
