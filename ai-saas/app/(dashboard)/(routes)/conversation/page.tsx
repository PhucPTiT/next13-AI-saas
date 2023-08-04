"use client"

import * as z from "zod";
import { Heading } from "@/components/ui/heading";
import {MessageSquare} from "lucide-react"
import { useForm } from "react-hook-form";
import { formShema } from "./constants";
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formShema>) => {
        console.log(values)
    }


    return ( 
        <div>
            <Heading
                title="Trò chuyện"
                description="Đây là mô hình trò chuyện tiên tiến nhất của chúng tôi"
                icon = {MessageSquare}
                iconColor= "text-violet-500"
                bgColor = "bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg
                                border
                                w-full
                                p-4
                                px-3
                                md:px-6
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2
                            "
                        >
                            <FormField
                                name = "prompt"
                                render = {({field}) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="
                                                    border-0
                                                    outline-none
                                                    focus-visible:ring-0
                                                    focus-visible:ring-transparent
                                                "
                                                disabled = {isLoading}
                                                placeholder="VD: Tại sao bạn không có người yêu ?"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button size={"icon"} type="submit" className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                                Tạo
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    Messages Content
                </div>
            </div>
        </div>
     );
}
 
export default ConversationPage;