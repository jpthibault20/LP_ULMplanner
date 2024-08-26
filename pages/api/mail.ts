// pages/api/mail.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const config = {
    runtime: 'edge',
};

export default async function handler(req: { json: () => any; }) {
    try {
        const data = await req.json();
        console.log('Données reçues :', data.email);

        // Exemple : Traitement des données et enregistrement dans la base de données

        return new Response(
            JSON.stringify({ message: 'Données traitées avec succès' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Erreur lors du traitement des données:', error);
        return new Response(
            JSON.stringify({ message: 'Erreur lors du traitement des données' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
