import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PostInfoLoading = () => {
    return (
        <main className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center justify-between">
                <Skeleton className="w-20 h-7" />

                <div className="flex items-center gap-1">
                    <Skeleton className="w-25 h-7" />
                    <Skeleton className="w-25 h-7" />
                </div>
            </div>

            <Card className="p-3">
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <Skeleton className="w-10 h-5" />
                        <Skeleton className="w-20 h-5" />
                        <Skeleton className="w-15 h-5" />
                    </div>
                </div>

                <div>
                    <Skeleton className="w-full h-20" />
                </div>

                <div>
                    <Skeleton className="w-full h-30" />
                </div>

                <div className="inline-flex gap-x-2">
                    <Skeleton className="size-5" />
                    <Skeleton className="w-30 h-5" />
                </div>

                <Separator />

                <div className="pt-6">
                    <Skeleton className="w-full h-40" />
                </div>

                <div>
                    <Skeleton className="w-full h-20"></Skeleton>
                </div>
            </Card>
        </main>
    );
};

export default PostInfoLoading;
