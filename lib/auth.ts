import { hash } from "bcrypt";

export async function hashPassword(password: any) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

//passwordを複合化する

//12 is the number of salt rounds used in the password hashing process.
//Salt is a random value added to the password before hashing to increase its complexity
//and make it more resistant to various types of attacks, such as rainbow table attacks.
//The number of salt rounds determines the computational cost of hashing the password.
