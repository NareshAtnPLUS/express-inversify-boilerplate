import { injectable } from "inversify";
import logger from "src/logger";

@injectable()
export class UserService {
    
    private users: any[] = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
    ];

    async getUsers() {
      logger.info(this.users)
        return this.users;
    }
}
