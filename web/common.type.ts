export interface AuthUser {
  _id: string; // User ID
  name: string; // User's name
  email: string; // User's email
  avatar?: string; // Optional avatar URL
  isActive?: boolean; // Optional active status
  lastLogin?: Date; // Optional last login date
}

export interface Conversation {
  _id: string;

  participants: Participant[];

  lastMessage: string;
  createdAt: string;
  updatedAt: string;
}

export interface Participant extends AuthUser {}
