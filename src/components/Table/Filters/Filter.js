import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CategorySelect } from "./Category"

export function Filter() {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"> open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Filter Table</SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Nitin singh" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Category
                        </Label>
                        <Input id="username" value="@nsp-0111" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            SubCategory
                        </Label>
                        <Input id="username" value="@nsp-0111" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Price
                        </Label>
                        <Input id="username" value="@nsp-0111" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Sale Price
                        </Label>
                        <Input id="username" value="@nsp-0111" className="col-span-3" />
                    </div>
                </div>
                {/* <div className="flex-col gap-1">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" className=" col-span-3 " />
                </div>
                <div className="flex-col gap-1">
                    <Label htmlFor="name" className="text-right">
                        Category
                    </Label>
                    <Input id="name" value="Pedro Duarte" className=" col-span-3 " />
                </div> */}

                {/* <CategorySelect/> */}
                
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Clear filter</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
