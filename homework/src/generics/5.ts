export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

console.log(RoleDescription[UserRole.admin]);  // Output: 'Admin User'
console.log(RoleDescription[UserRole.editor]); // Output: 'Editor User'
console.log(RoleDescription[UserRole.guest]);  // Output: 'Guest User'

export default RoleDescription;