import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";
import { useEditUser } from "@/modules/editUserInfo/hook/useEditUser.ts";
import { EditUserForm } from "@/modules/editUserInfo/editUserForm.tsx";

export function EditUserInfo(): ReactNode {
  const {} = useEditUser();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit user info</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <EditUserForm />
      </SheetContent>
    </Sheet>
  );
}
