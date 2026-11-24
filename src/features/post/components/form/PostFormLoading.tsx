import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const PostFormLoading = () => {
    return (
        <div className="mx-auto max-w-xl px-4">
            <Card className="flex flex-col gap-y-5 p-3 min-h-100">
                <div className="flex flex-col gap-y-2">
                    <Skeleton className="w-30 h-5" />
                    <Skeleton className="w-40 h-3" />
                </div>

                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-1">
                        <Skeleton className="w-20 h-3" />
                        <Skeleton className="w-full h-5" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <Skeleton className="w-20 h-3" />
                        <Skeleton className="w-full h-5" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <Skeleton className="w-20 h-3" />
                        <Skeleton className="w-full h-15" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <Skeleton className="w-20 h-3" />
                        <Skeleton className="w-full h-20" />
                    </div>
                </div>

                <div className="flex flex-col gap-y-2">
                    <Skeleton className="w-full h-20" />
                </div>
            </Card>
        </div>
    );
};

export default PostFormLoading;
