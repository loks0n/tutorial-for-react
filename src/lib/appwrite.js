import { Client, Account, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("650870066ca28da3d330"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
