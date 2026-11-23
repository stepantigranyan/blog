import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ArrowLeft, Calendar, Clock, Pencil, User, Trash } from "lucide-react";

import { getPost } from '@/features/post/queries';
import { ROUTES } from '@/routes'

import { readingTimeMinutes } from "@/lib/utils";
import DeletePostDialog from '@/features/post/components/DeletePostDialog';

const PostInfo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <Button className="cursor-pointer" variant="ghost" size="sm">
          <Link href={ROUTES.HOME} className="inline-flex items-center gap-1">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Posts</span>
          </Link>
        </Button>

        <div className="flex items-center gap-1">
          <Button className="cursor-pointer" variant="outline" size="sm">
            <Link
              href={ROUTES.EDIT_POST(id)}
              className="inline-flex items-center gap-1"
            >
              <Pencil className="mr-2 h-4 w-4" />
              <span>Edit Post</span>
            </Link>
          </Button>
          <DeletePostDialog id={post.id} />
        </div>
      </div>

      <Card>
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Article</Badge>
            <span className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3.5 w-3.5" />
              {post.createdAt}
            </span>
            <span className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {readingTimeMinutes(post.content)} min read
            </span>
          </div>

          <CardTitle className="text-3xl font-bold tracking-tight">
            {post.title}
          </CardTitle>

          <CardDescription className="text-base leading-relaxed">
            {post.description}
          </CardDescription>

          <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>
              <strong className="font-medium text-foreground">
                By {post.author}
              </strong>
            </span>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          <div className="space-y-4 whitespace-pre-line text-base leading-7 text-foreground/90">
            {post.content}
          </div>
        </CardContent>

        <Separator />

        <CardFooter className="flex justify-end py-4 text-xs text-muted-foreground">
          <span>Published by {post.author}</span>
        </CardFooter>
      </Card>
    </main>
  );
};

export default PostInfo;
