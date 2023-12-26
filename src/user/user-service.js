
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
        try {
            // Validate
            if (!data?.username || !data?.password) {
                throw new AppError('username and password arerequired', 400);
            }

            const user = await this.userRepo.create(data);
            return user;
        } catch (err) {
            throw err;
        }
    }

    async deleteUser(userId) {
        try {
            const result = await this.userRepo.delete(userId);
            if (!result) {
                throw new AppError('User not found', 400);
            }
            return result;
        } catch (err) {
            throw err;
        }
    }

}

export default UserService;