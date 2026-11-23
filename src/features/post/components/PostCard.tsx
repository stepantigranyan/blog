import { FC } from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

import type { PostAttributes } from "@/features/post/types";
import { formatToLongDate } from '@/lib/utils'
import { ROUTES } from '@/routes'

interface PostCardProps extends Omit<PostAttributes, "content" | "updatedAt"> {}

const PostCard: FC<PostCardProps> = ({
  id,
  title,
  description,
  author,
  createdAt,
}) => {
  return (
    <Card className="flex flex-col justify-between max-w-md transition-shadow hover:shadow-md">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarIcon className="h-3.5 w-3.5" />
          <span>{formatToLongDate(createdAt)}</span>
        </div>
        <CardTitle className="cursor-pointer text-xl leading-snug">
          <Link href={ROUTES.GET_POST(id)}>{title}</Link>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium">{author}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
