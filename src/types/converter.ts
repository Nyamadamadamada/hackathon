import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { User, Tag } from "./firestore";

export const userConverter = {
  toFirestore(user: User): DocumentData {
    return {
      name: user.name,
      tags: user.tags,
      comment: user.comment,
      file: user.file,
      createAt: user.createAt,
      updateAt: user.updateAt,
      deleteAt: user.deleteAt,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);
    return new User(
      data.name,
      data.tags,
      data.comment,
      data.file,
      data.createAt,
      data.updateAt,
      data.deleteAt
    );
  },
};
export const tagConverter = {
  toFirestore(tag: Tag): DocumentData {
    return {
      key: tag.key,
      label: tag.label,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Tag {
    const data = snapshot.data(options);
    return new Tag(data.key, data.label);
  },
};
