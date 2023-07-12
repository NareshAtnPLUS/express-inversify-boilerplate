import { injectable } from 'inversify';
import logger from '../logger';
import { PropertyManager } from '../types/user.type';
import crypto from 'crypto';
@injectable()
export class UserService {
    private users: any[] = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
    ];

    async getUsers() {
        logger.info(this.users);
        return this.users;
    }
    async register(user: PropertyManager[]) {
                
        return null;
    }
}
