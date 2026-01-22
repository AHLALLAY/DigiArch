import * as bcrypt from "bcryptjs";
import { ConflictException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dtos/create-user.dto";


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(createUserDto: CreateUserDto) {
        const existingUser = await this.userModel.findOne({ email: createUserDto.email });
        if (existingUser) throw new ConflictException("email already existe");
        const hashedPwd = await bcrypt.hash(createUserDto.password, 10);
        const newUser = {
            ...createUserDto,
            password: hashedPwd
        }

        const user = new this.userModel(newUser);


        return await user.save();
    }
}