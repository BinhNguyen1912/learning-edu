import { IUser, UserModel } from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';
import { TCreateUserSchema } from '@/types';

export async function CreateUser(
  params: TCreateUserSchema
): Promise<TCreateUserSchema | undefined> {
  try {
    await connectToDatabase(); // Đảm bảo DB đã kết nối
    const user = await UserModel.create(params);
    return user;
  } catch (error) {
    console.error('CreateUser error', error);
    throw new Error('Failed to create user');
  }
}
