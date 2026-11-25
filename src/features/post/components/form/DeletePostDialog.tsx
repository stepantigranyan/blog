import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from '@/components/ui/dialog';
import { Trash } from 'lucide-react';

import { deletePost } from '@/features/post/actions';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/routes';

const DeletePostDialog = ({ id }: { id: string }) => {
    const formSubmit = async () => {
        const { success } = await deletePost(id);

        if (!success) {
            return;
        } else {
            redirect(ROUTES.HOME);
        }
    };

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button
                        className="cursor-pointer inline-flex items-center gap-x-2"
                        variant="destructive"
                        size="sm"
                    >
                        <Trash className="h-4 w-4" />
                        <span className="hidden sm:block">Delete Post</span>
                    </Button>
                }
            />
            <DialogContent showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>Delete this post?</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this post? This action
                        cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <form action={formSubmit}>
                        <Button type="submit" variant="destructive">
                            Delete
                        </Button>
                    </form>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeletePostDialog;
