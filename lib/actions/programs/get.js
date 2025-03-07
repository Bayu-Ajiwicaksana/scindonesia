"use server";

import { databases } from "@/lib/appwrite";

import { Query } from "appwrite";
import { notFound } from "next/navigation";

export async function getAllPrograms() {
  const result = await databases.listDocuments(
    "scindonesia", // databaseId
    "programs", // collectionId
    [] // queries (optional)
  );

  // console.log(result.documents);

  return result.documents;
}

export async function getSocialProofArticles() {
  const result = await databases.listDocuments(
    "scindonesia", // databaseId
    "articles", // collectionId
    [] // queries (optional)
  );

  // console.log(result.documents);

  return result.documents;
}

export async function getSocialProofArticle(slug) {
  const result = await databases.listDocuments(
    "scindonesia", // databaseId
    "articles", // collectionId
    [Query.equal("slug", slug)] // queries (optional)
  );

  // console.log(result.documents);

  if (!result.documents.at(0)) return notFound();

  return result.documents.at(0);
}

// export async function getWorksShowcase() {
//   const result = await databases.listDocuments(
//     "scindonesia", // databaseId
//     "works", // collectionId
//     [Query.equal("showcase", true)] // queries (optional)
//   );

//   console.log(result.documents);

//   return result.documents;
// }
