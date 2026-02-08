"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { toast } from "sonner"; // shadcn toast (sonner)

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqelrgvq";

const Page = () => {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Something went wrong");
            }

            toast.success("Message sent successfully 🚀", {
                description: "I’ll get back to you soon.",
            });

            form.reset();
        } catch (err) {
            toast.error("Failed to send message", {
                description:
                    err instanceof Error
                        ? err.message
                        : "Please try again later.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="min-h-screen w-full flex items-center justify-center px-6">
            <div className="w-full max-w-xl">
                <h1 className="text-4xl font-semibold text-white mb-4">
                    <EncryptedText text="Get in touch" revealDelayMs={80} />
                </h1>

                <p className="text-white/70 mb-10">
                    Have an idea, a question, or just want to say hi?
                    Drop me a message and I’ll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm text-white/60 mb-2">
                            Your email
                        </label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="bg-neutral-900 border-white/10 text-white"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-white/60 mb-2">
                            Message
                        </label>
                        <Textarea
                            name="message"
                            placeholder="Tell me what’s on your mind…"
                            rows={6}
                            className="bg-neutral-900 border-white/10 text-white resize-none"
                            required
                            disabled={loading}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-white text-black hover:bg-white/90"
                    >
                        {loading ? "Sending…" : "Send message"}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Page;
