"use server";

import { databases } from "@/lib/appwrite";

import { Query } from "appwrite";

export async function getAllWorks() {
  const result = await databases.listDocuments(
    "scindonesia", // databaseId
    "works", // collectionId
    [] // queries (optional)
  );

  console.log(result.documents);

  return result.documents;
}

export async function getWorksShowcase() {
  const result = await databases.listDocuments(
    "scindonesia", // databaseId
    "works", // collectionId
    [Query.equal("showcase", true)] // queries (optional)
  );

  console.log(result.documents);

  return result.documents;
}
