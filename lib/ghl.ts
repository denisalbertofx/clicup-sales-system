import axios from 'axios';

const GHL_API_URL = 'https://services.leadconnectorhq.com';

const ghlApi = axios.create({
    baseURL: GHL_API_URL,
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
    customFields?: Array<{ key: string; value: unknown }>;
    [key: string]: unknown;
}

export const createGHLContact = async (contactData: ContactData) => {
    try {
        const response = await ghlApi.post('/', {
            ...contactData,
            locationId: process.env.GHL_LOCATION_ID,
            source: 'ClicUp Funnel'
        });
        return response.data.contact;
    } catch (error: unknown) {
        console.error('Error creating contact in GHL:', error);
        throw error;
    }
};

export const updateGHLContact = async (contactId: string, updateData: Partial<ContactData>) => {
    try {
        const response = await ghlApi.put(`/${contactId}`, updateData);
        return response.data.contact;
    } catch (error: unknown) {
        console.error('Error updating GHL contact:', error);
        throw error;
    }
};

export const updateContactTags = async (email: string, tags: string[]) => {
    try {
        // 1. Buscar contacto por email para obtener ID
        const searchResponse = await axios.get(`${GHL_API_URL}/contacts/search?query=${email}`, {
            headers: {
                Authorization: `Bearer ${process.env.GHL_API_KEY}`,
                Version: '2021-07-28',
            },
        });

        const contact = searchResponse.data.contacts?.[0];

        if (!contact) {
            console.warn(`Contact not found for email: ${email}`);
            return null;
        }

        // 2. Actualizar tags
        const updateResponse = await axios.put(
            `${GHL_API_URL}/contacts/${contact.id}`,
            {
                tags: [...(contact.tags || []), ...tags],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GHL_API_KEY}`,
                    Version: '2021-07-28',
                },
            }
        );

        return updateResponse.data;
    } catch (error: unknown) {
        console.error('Error updating contact tags in GHL:', error);
        throw error;
    }
};

export const getGHLContactByEmail = async (email: string) => {
    try {
        const response = await ghlApi.get(`/lookup?email=${email}`);
        return response.data.contacts[0] || null;
    } catch (error: unknown) {
        console.error('Error getting GHL contact by email:', error);
        return null;
    }
};
