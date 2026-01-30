import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true, index: true })
    email: string;

    @Prop({ required: true, select: false })
    password: string;

    @Prop({ type: String, enum: ['admin', 'archivist'], default: 'archivist' })
    role: 'admin' | 'archivist';
}

export const UserSchema = SchemaFactory.createForClass(User);