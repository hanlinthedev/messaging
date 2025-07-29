export class CreateUserDto {
  name: string;
  email: string; // Changed from number to string for email
  avatar?: string; // Optional field
  lastLogin?: Date; // Optional field
  isActive?: boolean; // Optional field, default can be set in the schema
}
