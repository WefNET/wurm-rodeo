// src/pages/api/getData.js
import type { QueryResult } from 'mysql2';
import { query } from '../../lib/database';

import type { APIRoute } from 'astro'

export const getAllSales: APIRoute = async () => {
    try {
        // Execute the stored procedure
        const data: QueryResult = await query('CALL GetItemDetails()', []);

        let items;

        // If data is an array of arrays, get the first element
        if (Array.isArray(data) && data.length > 0) {
            items = data[0]; // Extract the first element which should be the items
        } else {
            items = []; // Default to an empty array if no items found
        }

        return new Response(JSON.stringify(items), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch (error) {
        console.error('Database query error:', error); // Log the error for debugging
        return new Response(JSON.stringify({ error: 'Database query failed' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export const getCategories: APIRoute = async () => {
    try {
        // Execute the stored procedure
        const data: QueryResult = await query('SELECT * FROM ActiveCategories ORDER BY name', []);

        console.log(data);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch (error) {
        console.error('Database query error:', error); // Log the error for debugging
        return new Response(JSON.stringify({ error: 'Database query failed' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

