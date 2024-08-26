// pages/api/mail.js

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

export const config = {
    runtime: 'edge',
};

export default async function handler(req: { json: () => any; }) {
    try {
        const data = await req.json();
        console.log('Données reçues :', data.email);

        const mail = await prisma.mails.create({
            data: {
                mail: data.email,
            },
        });
        console.log('Données enregistrées :', mail);

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
