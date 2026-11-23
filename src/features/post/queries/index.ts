import PostApi from "@/features/post/api";

export const getAllPosts = async (page: number, limit: number) => {
  return await PostApi.getAll(page, limit);
};

export const getPost = async (id: string) => {
  return await PostApi.getOne(id);
};
