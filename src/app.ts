import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { notesRouter } from './routers/notes.js';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/notes', notesRouter);
