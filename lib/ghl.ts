import axios from 'axios';

const ghlApi = axios.create({
    baseURL: 'https://services.leadconnectorhq.com/contacts/',
    headers: {
        'Authorization': `Bearer ${process.env.GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export interface ContactData {
    email: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    tags?: string[];
    customFields?: Array<{ key: string; value: any }>;
    [key: string]: any;
}

export const createGHLContact = async (contactData: ContactData) => {
    try {
        const response = await ghlApi.post('/', {
            ...contactData,
            locationId: process.env.GHL_LOCATION_ID,
            source: 'ClicUp Funnel'
        });
        return response.data.contact;
    } catch (error: any) {
        console.error('Error creating GHL contact:', error.response?.data || error.message);
        return null;
    }
};

export const updateGHLContact = async (contactId: string, updateData: Partial<ContactData>) => {
    try {
        const response = await ghlApi.put(`/${contactId}`, updateData);
        return response.data.contact;
    } catch (error: any) {
        console.error('Error updating GHL contact:', error.response?.data || error.message);
        return null;
    }
};

export const getGHLContactByEmail = async (email: string) => {
    try {
        const response = await ghlApi.get(`/lookup?email=${email}`);
        return response.data.contacts[0] || null;
    } catch (error: any) {
        console.error('Error getting GHL contact by email:', error.response?.data || error.message);
        return null;
    }
};
