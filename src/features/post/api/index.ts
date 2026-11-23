import { v4 as uuidv4 } from "uuid";
import { PostAttributes, PostOptionalAttributes } from "@/features/post/types";

import { getNow } from "@/lib/utils";

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://${API_KEY}.mockapi.io/api/v1/posts`;

class PostApi {
  static async create(
    data: PostOptionalAttributes,
  ): Promise<PostAttributes | null> {
    try {
      const id = uuidv4();
      const createdAt = getNow();
      const updatedAt = getNow();

      const newPost: PostAttributes = { id, createdAt, updatedAt, ...data };

      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      const post = await response.json();
      return post as PostAttributes;
    } catch (error) {
      return null;
    }
  }

  static async getOne(postId: string): Promise<PostAttributes | null> {
    try {
      const response = await fetch(`${BASE_URL}/${postId}`);
      const posts = await response.json();
      return posts as PostAttributes;
    } catch (error) {
      return null;
    }
  }

  static async getAll(page: number, limit: number): Promise<{ allPages: number, data: PostAttributes[]} | null> {
    try {
      const response = await fetch(BASE_URL);
      const posts: PostAttributes[] = await response.json();

      const count = posts.length;

      const offset = (page - 1) * limit;

      return {
        allPages: Math.ceil(count / limit),
        data: posts.slice(offset, offset + limit),

      };

    } catch (error) {
      return null;
    }
  }

  static async edit(
    postId: string,
    data: PostOptionalAttributes,
  ): Promise<PostAttributes | null> {
    try {
      const existingPost = (await this.getOne(postId))!;
      const updatingPost: PostAttributes = { ...existingPost, ...data };

      const response = await fetch(`${BASE_URL}/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatingPost),
      });

      const editedPost: PostAttributes = await response.json();
      return editedPost;
    } catch (error) {
      return null;
    }
  }

  static async delete(postId: string): Promise<number | null> {
    try {
      const response = await fetch(`${BASE_URL}/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return 1;
    } catch (error) {
      return null;
    }
  }
}

export default PostApi;
