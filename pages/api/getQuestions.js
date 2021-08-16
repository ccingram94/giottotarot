import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

export default async ( req, res ) => {
    const data = req.body;
    try {
        const result = await prisma.user.findMany({});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: 'error occured '})
    }
}