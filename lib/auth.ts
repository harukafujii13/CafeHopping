import { hash, compare } from 'bcryptjs';

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(
  psassword: string,
  hashedPassword: string
) {
  const isValid = await compare(psassword, hashedPassword);
  return isValid;
}

//memo1
//passwordを複合化する

//memo2
//12 is the number of salt rounds used in the password hashing process.
//Salt is a random value added to the password before hashing to increase its complexity
//and make it more resistant to various types of attacks, such as rainbow table attacks.
//The number of salt rounds determines the computational cost of hashing the password.

//memo3
//verifyPassword()
//This function takes a password and a hashed password as input.
//It uses bcrypt's compare function to compare the plain-text password
//with the hashed password.
//If the comparison is successful and the passwords match,
//the function returns true, indicating that the password is valid. Otherwise, it returns false.
