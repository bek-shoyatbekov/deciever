
import AppError from '../utils/app-error/app-error.js';
import UserRepository from './user-repository.js';

class UserService {

    constructor() {
        this.userRepo = new UserRepository();
    }

    async getUserByUsername(username) {
        try {
            const user = await this.userRepo.findByUsername(username);
            if (!user) {
                throw new AppError('User not found', 400);
            }
            return user;
        } catch (err) {
            throw err;
        }
    }

    async createUser(data) {
        // Validate
        if (!data?.username || !data?.password) {
            throw new AppError('username and password arerequired', 400);
        }

        const user = await this.userRepo.create(data);
        return user;
    }

    async deleteUser(userId) {
        const result = await this.userRepo.delete(userId);
        if (!result) {
            throw new Error('User not found');
        }
        return result;
    }

}

export default UserService;