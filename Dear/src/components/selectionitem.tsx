import React from "react";
import {Card, CardFooter, Image, Checkbox, Popover, PopoverTrigger, PopoverContent, Button, Link} from "@nextui-org/react";

const SelectionItem: React.FC<{subject: string, imageUrl: string, subjectTitle: string, subjectDetail: string, subjectUrl: string }> = (props) => {
    return (
        <div className="flex flex-row">
            <Card
            isFooterBlurred
            radius="lg"
            className="border-none"
            >
            <Image
                isZoomed
                alt={props.subject}
                className="object-cover max-h-64"
                height={200}
                src={props.imageUrl}
            />
            <CardFooter className="justify-between before:bg-white/10 bg-pink-500 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <Popover placement="bottom">
                        <PopoverTrigger>
                            <Button className="bg-pink-600 mr-2 h-8 text-white">{props.subject}</Button>
                        </PopoverTrigger>
                        <PopoverContent className="bg-pink-700">
                            <div className="px-1 py-2">
                            <Link
                                isExternal
                                href={props.subjectUrl}
                                showAnchorIcon
                                className="text-white"
                            >
                                {props.subjectTitle}
                            </Link>
                            <div className="text-tiny text-white">{props.subjectDetail}</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                <Checkbox size="lg" color="success"/>
            </CardFooter>
            </Card>
        </div>
    );
}

export default SelectionItem;