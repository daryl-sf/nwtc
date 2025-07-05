import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'wedding-pictures',
  access: (allow) => ({
    "photos/*": [
      allow.guest.to(["list", "get"]),
      allow.authenticated.to(["get", "list", "write", "delete"]),
      allow.authenticated.to(["read"]),
    ]
  }),
});
