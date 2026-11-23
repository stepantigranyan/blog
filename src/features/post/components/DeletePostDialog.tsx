import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from '@/components/ui/dialog';
import { Trash } from "lucide-react";
import { deletePost } from '@/features/post/actions';

const DeletePostDialog = ({ id }: { id: string }) => {

    const deletePostById = deletePost.bind(null, id);

  return (
    <Dialog>
        <DialogTrigger
            render={
                <Button className="cursor-pointer" variant="destructive" size="sm">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete Post</span>
                </Button>
            }
        />
        <DialogContent showCloseButton={false}>
            <DialogHeader>
                <DialogTitle>Delete this post?</DialogTitle>
                <DialogDescription>Are you sure you want to delete this post? This action cannot be undone.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <form action={deletePostById}>
                    <Button type='submit' variant='destructive'>Delete</Button>
                </form>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  );
};

export default DeletePostDialog;
