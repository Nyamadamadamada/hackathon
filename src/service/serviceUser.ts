import {
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { db, storage } from "../firebase";
import { userConverter } from "../types/converter";
import { UserStruct, TagStruct, User } from "../types/firestore";
import { Inputs } from "../components/UserForm";
import { tags, tagsKeys } from "../config/common";

export const getUser = async (id: string): Promise<Inputs> => {
  console.log("id");
  console.log(id);
  const userRef = doc(db, "users", id).withConverter(userConverter);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    const doc = docSnap.data();
    const inputTag: {
      [key in typeof tagsKeys[number]]: boolean;
    } = {};

    // 全タグの中からuser.tagと一致するかをチェックする
    const isExtistTag = (tagKey: string) => {
      return doc.tags.find((docTag: TagStruct) => docTag.key === tagKey) !==
        undefined
        ? true
        : false;
    };
    // user.tagをフォーム形式に合わせたオブジェクトを作成する
    tagsKeys.forEach((tag) => (inputTag[tag] = isExtistTag(tag)));

    return {
      name: doc.name,
      tags: inputTag,
      comment: doc.comment,
      file: doc.file,
    };
  } else {
    alert("このユーザーは存在しません");
    throw "not found user";
  }
};
export const getUsers = async () => {
  const querySnapshot = await getDocs(
    collection(db, "users").withConverter(userConverter)
  );
  const users: UserStruct[] = [];
  querySnapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  return users;
};

export const createUser = async (data: Inputs) => {
  const collectionData: UserStruct = {
    name: data.name,
    comment: data.comment,
    tags: tags.filter((tag) => data.tags[tag.key]),
    file: data.file ? data.file : "",
    createAt: serverTimestamp(),
    updateAt: serverTimestamp(),
  };
  const userDocumentRef = await addDoc(collection(db, "users"), collectionData);
  return userDocumentRef.id;
};

export const updateUser = async (id: string, data: Inputs) => {
  const collectionData: UserStruct = {
    name: data.name,
    comment: data.comment,
    tags: tags.filter((tag) => data.tags[tag.key]),
    file: data.file ? data.file : "",
    updateAt: serverTimestamp(),
  };
  const userDocumentRef = doc(db, "users", id);
  await updateDoc(userDocumentRef, collectionData);
};

export const uploadUserIcon = (
  id: string,
  file: string,
  selectedFile: Blob
) => {
  if (!selectedFile || !file) {
    return;
  }
  const filePath = `${id}/${file}`;
  const storageRef = ref(storage, filePath);
  uploadBytes(storageRef, selectedFile);
};

export const getUserIconPath = async (
  id: string,
  file: string
): Promise<string> => {
  const filePath = `${id}/${file}`;
  const url = await getDownloadURL(ref(storage, filePath));
  console.log(url);
  return url;
};
