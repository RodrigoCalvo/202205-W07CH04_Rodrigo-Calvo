import { IOService } from './io.service';

export class FSIOService<T extends { id: string }> extends IOService<T> {
    find(id?: T['id'] | undefined): Promise<T | T[] | undefined> {
        throw new Error('Method not implemented.');
    }
    create(data: Partial<T>): Promise<T['id']> {
        throw new Error('Method not implemented.');
    }
    update(id: T['id'], data: Partial<T>): Promise<T> {
        throw new Error('Method not implemented.');
    }
    delete(id: T['id']): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
