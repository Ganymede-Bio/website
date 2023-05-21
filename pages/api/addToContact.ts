import { db } from '@vercel/postgres'

import type { NextApiRequest, NextApiResponse } from "next";

export default async function addToContact(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { name, email, phone, message } = JSON.parse(body);

  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE IF NOT EXISTS 
                      users 
                      (
                        id serial PRIMARY KEY,
                        name varchar(255) NULL,
                        email varchar(255) NOT NULL,
                        phone varchar(255) NULL,
                        message varchar(255) NULL,
                        created_at TIMESTAMP DEFAULT NOW(),
                        updated_at TIMESTAMP DEFAULT NOW()
                      )`;
    await client.sql`INSERT INTO users (name, email, phone, message) VALUES (${name}, ${email}, ${phone}, ${message})`;
  } catch (error) {
    return res.status(500).json({ error });
  }

  return res.status(201).json({
    status: "success",
    data: email,
  });
}
