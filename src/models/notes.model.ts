import { IOService } from '../services/io.service';
import { DataModel } from './data.model';

export interface iNote {
    id: string;
    author: string;
    content: string;
    important: boolean;
}

export class Note extends DataModel<iNote> implements iNote {
    id!: string;
    author!: string;
    content!: string;
    important!: boolean;
    constructor(public myIOService: IOService) {
        super();
    }
    findAll(): Promise<iNote[]> {
        throw new Error('Method not implemented.');
    }
    find(id: string): Promise<iNote> | undefined {
        throw new Error('Method not implemented.');
    }
    create(data: Partial<iNote>): Promise<iNote> {
        throw new Error('Method not implemented.');
    }
    update(id: string, data: Partial<iNote>): Promise<iNote> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): { status: number } {
        throw new Error('Method not implemented.');
    }
}
