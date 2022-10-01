import { FieldValue } from "firebase/firestore";

export class User {
  constructor(
    readonly name: string,
    readonly tags: TagStruct[],
    readonly comment: string,
    readonly file: string,
    readonly createAt: FieldValue,
    readonly updateAt: FieldValue,
    readonly deleteAt: FieldValue
  ) {
    this.name = name;
    this.tags = tags;
    this.comment = comment;
    this.file = file;
    this.createAt = createAt;
    this.updateAt = updateAt;
    this.deleteAt = deleteAt;
  }
}
export class Tag {
  constructor(readonly key: string, readonly label: string) {
    this.key = key;
    this.label = label;
  }
}

export type TagStruct = {
  key: string;
  label: string;
};
export type UserStruct = {
  id?: string;
  name: string;
  tags: TagStruct[];
  comment: string;
  file: string;
  createAt?: FieldValue;
  updateAt: FieldValue;
  deleteAt?: FieldValue;
};
