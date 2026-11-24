import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const PostCardLoading = () => {
    return (
        <Card className="min-h-75 flex flex-col max-w-md p-3">
            <div className="h-full flex flex-col justify-between">
                <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Skeleton className="size-5" />
                        <Skeleton className="h-5 w-full"></Skeleton>
                    </div>
                    <Skeleton className="h-10 w-full" />
                </div>

                <div className="my-4">
                    <Skeleton className="h-25 w-full" />
                </div>
            </div>

            <div>
                <div className="my-1 flex flex items-center">
                    <Skeleton className="h-15 w-full" />
                </div>
            </div>
        </Card>
    );
};

export default PostCardLoading;
