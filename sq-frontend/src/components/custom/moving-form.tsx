import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ArrowLeftIcon } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    fromAddress: z.string().min(1, 'From Address is required'),
    toAddress: z.string().min(1, 'To Address is required'),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
});

export function MovingForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            fromAddress: '',
            toAddress: '',
            date: '',
        },
    })

    let navigate = useNavigate();

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        navigate('/form-successful');
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl" data-testid="moving-form-heading">Let's get Moving</CardTitle>
                    <CardDescription>
                        Enter your details below to setup a moving appointment
                    </CardDescription>
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeftIcon className="h-4 w-4" />
                        Go back
                    </Link>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="John Doe"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is your legal name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="fromAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>From Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="123 Main St"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is the address you are moving from.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="toAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>To Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="456 Elm St"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is the address you are moving to.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Moving Date</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="date"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            This is the date you want to move.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="john.doe@email.at"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            We will send you a confirmation email.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
